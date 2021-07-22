using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SectionsController : BaseApiController
    {
        private readonly IGenericRepository<GeneralSection> _secRepo;
        private readonly IMapper _mapper;

        public SectionsController(
            IGenericRepository<GeneralSection> secRepo,
            IMapper mapper
        )
        {
            _mapper = mapper;
            _secRepo = secRepo;
        }

        [HttpGet]
        public async Task<IReadOnlyList<GeneralSectionsDto>> GetSec()
        {
            var spec = new GeneralSectionsWithImagesSpecifications();
            var sec = await _secRepo.ListAsync(spec);

            return _mapper.Map<IReadOnlyList<GeneralSectionsDto>>(sec);
        }

        [HttpGet("GetById")]
        public async Task<CreateGeneralSection> GetSecById(int id)
        {
            var spec = new GeneralSectionsWithImagesSpecifications(id);
            var sec = await _secRepo.GetEntityWithSpec(spec);

            return _mapper.Map<GeneralSection, CreateGeneralSection>(sec);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<GeneralSectionsDto>> CreateOrUpdate(CreateGeneralSection input)
        {

            if (input.Id == null)
            {
                return await CreateSec(input);
            }
            else
            {
                return await UpdateSec(input);
            }


        }

        private async Task<GeneralSectionsDto> CreateSec(CreateGeneralSection input)
        {
            var sec = _mapper.Map<CreateGeneralSection, GeneralSection>(input);
            await _secRepo.Add(sec);
            await _secRepo.Save();
            return _mapper.Map<GeneralSection, GeneralSectionsDto>(sec);
        }
        private async Task<ActionResult<GeneralSectionsDto>> UpdateSec(CreateGeneralSection input)
        {
            var sec = _mapper.Map<CreateGeneralSection, GeneralSection>(input);
            _secRepo.Update(sec);
            await _secRepo.Save();
            return _mapper.Map<GeneralSection, GeneralSectionsDto>(sec);
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<GeneralSectionsDto>> Delete(int id)
        {
            var sec = await _secRepo.GetByIdAsync(id);
            if (sec == null) return BadRequest(new ApiResponse(404));
            _secRepo.Delete(sec);
            await _secRepo.Save();
            var secDto = _mapper.Map<GeneralSection, GeneralSectionsDto>(sec);
            return secDto;
        }


    }
}
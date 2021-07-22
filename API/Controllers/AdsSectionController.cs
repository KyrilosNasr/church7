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
    public class AdsSectionController : BaseApiController
    {
        private readonly IGenericRepository<AdsSection> _adsRepo;
        private readonly IMapper _mapper;

        public AdsSectionController(
            IGenericRepository<AdsSection> adsRepo,
            IMapper mapper
        )
        {
            _adsRepo = adsRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IReadOnlyList<AdsSectionDto>> GetSec()
        {
            var spec = new AdsWithImagesSpecifications();
            var sec = await _adsRepo.ListAsync(spec);

            return _mapper.Map<IReadOnlyList<AdsSectionDto>>(sec);
        }

        [Authorize]
        [HttpGet("GetById")]
        public async Task<CreateAdInput> GetSecById(int id)
        {
            var spec = new AdsWithImagesSpecifications(id);
            var sec = await _adsRepo.GetEntityWithSpec(spec);

            return _mapper.Map<AdsSection, CreateAdInput>(sec);
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<AdsSectionDto>> CreateOrUpdate(CreateAdInput input)
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

        private async Task<AdsSectionDto> CreateSec(CreateAdInput input)
        {
            var sec = _mapper.Map<CreateAdInput, AdsSection>(input);
            await _adsRepo.Add(sec);
            await _adsRepo.Save();
            return _mapper.Map<AdsSection, AdsSectionDto>(sec);
        }
        private async Task<ActionResult<AdsSectionDto>> UpdateSec(CreateAdInput input)
        {
            var sec = _mapper.Map<CreateAdInput, AdsSection>(input);
            _adsRepo.Update(sec);
            await _adsRepo.Save();
            return _mapper.Map<AdsSection, AdsSectionDto>(sec);
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<AdsSectionDto>> Delete(int id)
        {
            var sec = await _adsRepo.GetByIdAsync(id);
            if (sec == null) return BadRequest(new ApiResponse(404));
            _adsRepo.Delete(sec);
            await _adsRepo.Save();
            var secDto = _mapper.Map<AdsSection, AdsSectionDto>(sec);
            return secDto;
        }
    }
}
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
    public class MassesController : BaseApiController
    {
        private readonly IGenericRepository<MassSection> _secRepo;
        private readonly IGenericRepository<Mass> _massesRepo;
        private readonly IGenericRepository<MassEvent> _massEventsRepo;
        private readonly IMapper _mapper;

        public MassesController(
            IGenericRepository<MassSection> secRepo,
            IGenericRepository<Mass> massesRepo,
            IGenericRepository<MassEvent> massEventsRepo,
            IMapper mapper
        )
        {
            _secRepo = secRepo;
            _massesRepo = massesRepo;
            _massEventsRepo = massEventsRepo;
            _mapper = mapper;
        }


        [Authorize]
        [HttpPost("UpdateSection")]
        public async Task<ActionResult<int>> UpdateSection(int bannerId)
        {
            var sec = await _secRepo.GetLastAsync();
            if (sec == null)
            {
                sec = new MassSection();
                sec.BannerId = bannerId;
                await _secRepo.Add(sec);
            }
            else
            {
                sec.BannerId = bannerId;
                _secRepo.Update(sec);
            }
            await _secRepo.Save();
            return sec.Id;
        }


        [Authorize]
        [HttpPost("CreateOrUpdate")]
        public async Task<ActionResult<CreateMassIntput>> CreateOrUpdate(CreateMassIntput input)
        {
            var sec = await _secRepo.GetLastAsync();
            if (sec == null) return NotFound();
            input.MassSectionId = sec.Id;

            if (input.Id == null)
            {
                var newMass = await CreateMass(input);
                // input.massId = newMass.Id;
            }
            else
            {
                await UpdateMass(input);
            }


            // if (input.massEventId == null)
            // {
            //     var newEvent = await CreateMassEvent(input);
            //     input.massEventId = newEvent.Id;
            // }
            // else
            // {
            //     await UpdateMassEvent(input);
            // }

            return input;
        }

        private async Task<MassDto> CreateMass(CreateMassIntput input)
        {
            var mass = _mapper.Map<CreateMassIntput, Mass>(input);
            await _massesRepo.Add(mass);
            await _massesRepo.Save();
            return _mapper.Map<Mass, MassDto>(mass);
        }
        private async Task<ActionResult<MassDto>> UpdateMass(CreateMassIntput input)
        {
            var mass = _mapper.Map<CreateMassIntput, Mass>(input);
            _massesRepo.Update(mass);
            await _massesRepo.Save();
            return _mapper.Map<Mass, MassDto>(mass);
        }




        [HttpGet]
        public async Task<ActionResult<MassSectionDto>> GetSec()
        {
            var spec = new MassSecWithMassesSpecifications();
            var sec = await _secRepo.GetEntityWithSpec(spec);
            if (sec == null) return NotFound();

            return _mapper.Map<MassSection, MassSectionDto>(sec);
        }

        [HttpGet("GetById")]
        public async Task<ActionResult<MassDto>> GetMassById(int id)
        {
            var mass = await _massesRepo.GetByIdAsync(id);
            if (mass == null) return NotFound();

            return _mapper.Map<Mass, MassDto>(mass);
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<MassDto>> Delete(int id)
        {
            var mass = await _massesRepo.GetByIdAsync(id);
            if (mass == null) return BadRequest(new ApiResponse(404));
            _massesRepo.Delete(mass);
            await _massesRepo.Save();
            var massDto = _mapper.Map<Mass, MassDto>(mass);
            return massDto;
        }
    }



}
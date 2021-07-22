using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SundayMeetingController : BaseApiController
    {
        private readonly IGenericRepository<SundayMeeting> _sindayMeetingRepo;
        private readonly IMapper _mapper;

        public SundayMeetingController(
            IGenericRepository<SundayMeeting> sindayMeetingRepo,
            IMapper mapper
        )
        {
            _mapper = mapper;
            _sindayMeetingRepo = sindayMeetingRepo;
        }


        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(SundayMeetingDto sundayDto)
        {
            var sunday = _mapper.Map<SundayMeetingDto, SundayMeeting>(sundayDto);
            if (sundayDto.Id == null)
            {
                await _sindayMeetingRepo.Add(sunday);
                await _sindayMeetingRepo.Save();
            }
            else
            {
                //Update

                _sindayMeetingRepo.Update(sunday);
                await _sindayMeetingRepo.Save();

            }
            return sunday.Id;
        }


        [HttpGet]
        public async Task<IReadOnlyList<SundayMeetingDto>> GetAll(int? id)
        {
            var spec = new SundayMeetingSpecifications(id);
            var sundays = await _sindayMeetingRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<SundayMeetingDto>>(sundays);
            return data;
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<SundayMeetingDto>> Delete(int id)
        {
            var sunday = await _sindayMeetingRepo.GetByIdAsync(id);
            if (sunday == null) return BadRequest(new ApiResponse(404));
            _sindayMeetingRepo.Delete(sunday);
            await _sindayMeetingRepo.Save();
            var sundayDto = _mapper.Map<SundayMeeting, SundayMeetingDto>(sunday);
            return sundayDto;
        }
    }
}
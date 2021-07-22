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
    public class AboutChurchController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<AboutChurch> _churchRepository;
        public AboutChurchController(
            IMapper mapper,
        IGenericRepository<AboutChurch> churchRepository
        )
        {
            _mapper = mapper;
            _churchRepository = churchRepository;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<AboutChurchDto>> CreateOrEdit(CreateAboutChurch input)
        {
            var spec = new AboutChurchWithImageSpecification();
            var about = await _churchRepository.GetEntityWithSpec(spec);
            about.ImageId = input.ImageId;
            about.BannerId = input.BannerId;
            about.Description = input.Description;

            if (about == null)
            {
                await _churchRepository.Add(about);

            }
            else
            {
                // about.BannerId = input.BannerId;
                _churchRepository.Update(about);
            }
            await _churchRepository.Save();

            return _mapper.Map<AboutChurch, AboutChurchDto>(about);
        }

        [HttpGet]
        public async Task<ActionResult<AboutChurchDto>> Get()
        {
            var spec = new AboutChurchWithImageSpecification();
            var about = await _churchRepository.GetEntityWithSpec(spec);
            if (about == null)
            {
                return new AboutChurchDto();
            }
            else
            {

                return _mapper.Map<AboutChurch, AboutChurchDto>(about);
            }
        }
    }
}
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
    public class ChurchServiceController : BaseApiController
    {
        private readonly IGenericRepository<ChurchService> _serviceRepo;
        private readonly IMapper _mapper;

        public ChurchServiceController(
            IGenericRepository<ChurchService> serviceRepo,
            IMapper mapper
        )
        {
            _mapper = mapper;
            _serviceRepo = serviceRepo;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(CreateService serviceDto)
        {
            var service = _mapper.Map<CreateService, ChurchService>(serviceDto);
            if (serviceDto.Id == null)
            {
                await _serviceRepo.Add(service);
            }
            else
            {
                //Update
                _serviceRepo.Update(service);
            }
            var save = await _serviceRepo.Save();
            if (!save) return BadRequest(new ApiResponse(500));
            return service.Id;
        }


        [HttpGet]
        public async Task<IReadOnlyList<ChurchServiceDto>> GetAll()
        {
            var spec = new ServicesWithBannerSpecification();
            var service = await _serviceRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<ChurchServiceDto>>(service);
            return data;
        }

        [Authorize]
        [HttpGet("GetForEdit")]
        public async Task<CreateService> GetForEdit(int id)
        {
            var service = await _serviceRepo.GetByIdAsync(id);
            var data = _mapper.Map<CreateService>(service);
            return data;
        }

        [HttpGet("GetById")]
        public async Task<ChurchServiceDto> GetById(int id)
        {
            var spec = new ServicesWithBannerSpecification(id);
            var service = await _serviceRepo.GetEntityWithSpec(spec);
            var data = _mapper.Map<ChurchServiceDto>(service);
            return data;
        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<ChurchServiceDto>> Delete(int id)
        {
            var service = await _serviceRepo.GetByIdAsync(id);
            if (service == null) return BadRequest(new ApiResponse(404));
            _serviceRepo.Delete(service);
            await _serviceRepo.Save();
            var serviceDto = _mapper.Map<ChurchService, ChurchServiceDto>(service);
            return serviceDto;
        }

        [HttpGet("getNames")]
        public async Task<IReadOnlyList<ChurchServicesNamesDto>> GetNames()
        {

            var spec = new ServicesWithBannerSpecification();
            var services = await _serviceRepo.ListAsync(spec);

            return _mapper.Map<IReadOnlyList<ChurchServicesNamesDto>>(services);
        }

    }
}
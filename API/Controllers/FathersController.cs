using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Core.Specifications.Params;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class FathersController : BaseApiController
    {
        private readonly IGenericRepository<FathersSection> _secRepo;
        private readonly IGenericRepository<Fathers> _fathersRepo;
        private readonly IMapper _mapper;
        public FathersController(
        IGenericRepository<FathersSection> secRepo,
        IGenericRepository<Fathers> fathersRepo,
        IMapper mapper
        )
        {
            _secRepo = secRepo;
            _fathersRepo = fathersRepo;
            _mapper = mapper;
        }

        [Authorize]
        [HttpPost("UpdateSection")]
        public async Task<ActionResult<int>> UpdateSection(int bannerId)
        {

            var secSpec = new FathersSecImageAssetsIncudeSpecifications();
            var sec = await _secRepo.GetEntityWithSpec(secSpec);

            if (sec == null)
            {
                sec = new FathersSection(bannerId);
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
        [HttpPost]
        public async Task<ActionResult<int>> CreateOrUpdate(CreateFatherInput fatherDto)
        {

            try
            {
                var sec = await _secRepo.GetLastAsync();
                if (sec == null) return BadRequest(new ApiResponse(400));

                var father = _mapper.Map<CreateFatherInput, Fathers>(fatherDto);
                father.FatherSectionId = sec.Id;
                if (fatherDto.Id == null || fatherDto.Id == 0)
                {

                    await _fathersRepo.Add(father);
                }
                else
                {
                    //Update

                    _fathersRepo.Update(father);

                }
                var res = await _fathersRepo.Save();

                if (father.Id == 0) return BadRequest(new ApiResponse(500));
                return father.Id;
            }
            catch (System.Exception ex)
            {
                var x = ex;
            }

            return 0;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<FathersDto>>> GetAll([FromQuery] FathersParams fathersParams)
        {
            var spec = new FathersSpecificationsWithConfessions(fathersParams);
            var countSpec = new FathersCountSpecifications(fathersParams);
            var totalItems = await _fathersRepo.CountAsync(countSpec);

            var fathers = await _fathersRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<FathersDto>>(fathers);
            return Ok(
                new Pagination<FathersDto>(fathersParams.PageSize, fathersParams.PageIndex, totalItems, data)
            );
            ;
        }

        [HttpGet("GetSection")]
        public async Task<ActionResult<AppSectionWithImage<FathersReturnDto>>> GetSection([FromQuery] FathersParams fathersParams)
        {


            var secSpec = new FathersSecImageAssetsIncudeSpecifications();
            var sec = await _secRepo.GetEntityWithSpec(secSpec);

            if (sec == null)
            {
                return NotFound();
            }
            var banner = _mapper.Map<ImageAssets, ImageAssetsDto>(sec.Banner);


            var spec = new FathersSpecificationsWithConfessions(fathersParams);
            var countSpec = new FathersCountSpecifications(fathersParams);
            var totalItems = await _fathersRepo.CountAsync(countSpec);
            var fathers = await _fathersRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<FathersDto>>(fathers);

            var paginatedFathers = new Pagination<FathersDto>(fathersParams.PageSize, fathersParams.PageIndex, totalItems, data);
            return Ok(
                new FathersReturnDto(banner, paginatedFathers)
            );

        }


        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<FathersDto>> Delete(int id)
        {
            var father = await _fathersRepo.GetByIdAsync(id);
            if (father == null) return BadRequest(new ApiResponse(404));
            _fathersRepo.Delete(father);
            await _fathersRepo.Save();
            var fatherDto = _mapper.Map<Fathers, FathersDto>(father);
            return fatherDto;
        }


    }
}
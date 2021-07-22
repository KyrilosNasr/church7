using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Inputs;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GalleryController : BaseApiController
    {
        private readonly IGenericRepository<Gallery> _secRepo;
        private readonly IGenericRepository<GalleryImages> _imagesRepo;
        private readonly IMapper _mapper;

        public GalleryController(
            IGenericRepository<Gallery> secRepo,
            IGenericRepository<GalleryImages> imagesRepo,
            IMapper mapper
        )
        {
            _secRepo = secRepo;
            _imagesRepo = imagesRepo;
            _mapper = mapper;
        }

        [Authorize]
        [HttpPost("UpdateSection")]
        public async Task<ActionResult<int>> UpdateSection(int bannerId)
        {

            var secSpec = new GalleryWithImagesAndBannersSpecification();
            var sec = await _secRepo.GetEntityWithSpec(secSpec);

            if (sec == null)
            {
                sec = new Gallery(bannerId);
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
        public async Task<ActionResult<int>> CreateOrUpdate(CreateGalleryImage image)
        {

            try
            {
                var sec = await _secRepo.GetLastAsync();
                if (sec == null) return BadRequest(new ApiResponse(400));

                var galleryImage = _mapper.Map<CreateGalleryImage, GalleryImages>(image);
                galleryImage.GalleryId = sec.Id;
                if (image.Id == null || image.Id == 0)
                {

                    await _imagesRepo.Add(galleryImage);
                }
                else
                {
                    //Update

                    _imagesRepo.Update(galleryImage);

                }
                var res = await _imagesRepo.Save();

                if (galleryImage.Id == 0) return BadRequest(new ApiResponse(500));
                return galleryImage.Id;
            }
            catch (System.Exception ex)
            {
                var x = ex;
            }

            return 0;
        }



        [HttpGet("GetSection")]
        public async Task<ActionResult<AppSectionWithImage<GalleryDto>>> GetSection([FromQuery] BasePaginationsParams paginationsParams)
        {


            var secSpec = new GalleryWithImagesAndBannersSpecification();
            var sec = await _secRepo.GetEntityWithSpec(secSpec);

            if (sec == null)
            {
                return NotFound();
            }
            var banner = _mapper.Map<ImageAssets, ImageAssetsDto>(sec.Banner);


            var spec = new GalleryImagesWithIncludeImages(paginationsParams);
            var countSpec = new GalleryImagesCountSpecification(paginationsParams);
            var totalItems = await _imagesRepo.CountAsync(countSpec);
            var images = await _imagesRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<GalleryImagesDto>>(images);

            var paginatedFathers = new Pagination<GalleryImagesDto>(paginationsParams.PageSize, paginationsParams.PageIndex, totalItems, data);
            return Ok(
                new GalleryDto(banner, paginatedFathers)
            );

        }

        [HttpGet("GetById")]
        public async Task<ActionResult<CreateGalleryImage>> GetById(int id)
        {

            var spec = new GalleryImagesWithIncludeImages(id);
            var image = await _imagesRepo.GetEntityWithSpec(spec);
            if (image == null) return NotFound();

            return _mapper.Map<GalleryImages, CreateGalleryImage>(image);

        }

        [Authorize]
        [HttpDelete]
        public async Task<ActionResult<GalleryImagesDto>> Delete(int id)
        {
            var image = await _imagesRepo.GetByIdAsync(id);
            if (image == null) return BadRequest(new ApiResponse(404));
            _imagesRepo.Delete(image);
            await _imagesRepo.Save();
            var imageDto = _mapper.Map<GalleryImages, GalleryImagesDto>(image);
            return imageDto;
        }
    }
}
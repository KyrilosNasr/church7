using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Core.Inputs;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using API.Errors;
using Core.Specifications.Params;
using API.Helpers;
using Core.Specifications;
using API.Dtos;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    public class ImageAssetsController : BaseApiController
    {
        private readonly IGenericRepository<ImageAssets> _ImageRepo;
        private readonly IMapper _mapper;
        public ImageAssetsController(
        IGenericRepository<ImageAssets> ImageRepo,
        IMapper mapper
        )
        {
            _ImageRepo = ImageRepo;
            _mapper = mapper;
        }


        [Authorize]
        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Content/", "images/");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fileName = fileName.Replace(" ", "");
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    var img = new ImageAssets(fileName, dbPath);
                    await _ImageRepo.Add(img);
                    await _ImageRepo.Save();
                    return Ok(new { img });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }


        [Authorize]
        [HttpGet]
        public async Task<ActionResult<Pagination<ImageAssetsDto>>> GetAll([FromQuery] ImageAssetsParams imgParams)
        {
            var spec = new ImageAssetsPaginationSpecifications(imgParams);
            var countSpec = new ImageAssetsCountSpecifications(imgParams);
            var totalItems = await _ImageRepo.CountAsync(countSpec);

            var imgs = await _ImageRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<ImageAssetsDto>>(imgs);

            return Ok(
                new Pagination<ImageAssetsDto>(imgParams.PageSize, imgParams.PageIndex, totalItems, data)
            );
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<ImageAssetsDto>> GetById(int id)
        {
            var img = await _ImageRepo.GetByIdAsync(id);
            if (img == null) return NotFound(new ApiResponse(404));
            var data = _mapper.Map<ImageAssets, ImageAssetsDto>(img);

            return data;
        }

    }
}

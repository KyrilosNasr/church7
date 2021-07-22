using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ImageAssetsUrlResolver : IValueResolver<ImageAssets, ImageAssetsDto, string>
    {
        private readonly IConfiguration _config;
        public ImageAssetsUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(ImageAssets source, ImageAssetsDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ImgUrl))
            {
                var wwwroot = "wwwroot";
                var content = "Content";
                var root = content;
                if (source.ImgUrl.Contains(wwwroot))
                {
                    root = wwwroot;
                }

                var src = source.ImgUrl.Replace(root, "");
                src = src.Replace(" ", "%20");
                return _config["ApiUrl"] + src;
            }

            return null;
        }
    }
}
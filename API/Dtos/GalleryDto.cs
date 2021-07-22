using API.Helpers;
using Core.Entities;

namespace API.Dtos
{
    public class GalleryDto
    {
        public GalleryDto()
        {
        }

        public GalleryDto(ImageAssetsDto banner, Pagination<GalleryImagesDto> images)
        {
            Banner = banner;
            Images = images;
        }

        public ImageAssetsDto Banner { get; set; }
        public virtual Pagination<GalleryImagesDto> Images { get; set; }
    }
}
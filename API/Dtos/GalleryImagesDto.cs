using Core.Entities;

namespace API.Dtos
{
    public class GalleryImagesDto
    {

        public int? Id { get; set; }
        public int DisplayOrder { get; set; }
        public ImageAssetsDto Image { get; set; }
    }
}
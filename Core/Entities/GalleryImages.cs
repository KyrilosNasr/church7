using System.Collections.Generic;

namespace Core.Entities
{
    public class GalleryImages : BaseEntity
    {
        public int GalleryId { get; set; }
        public Gallery Gallery { get; set; }
        public int ImageId { get; set; }
        public ImageAssets Image { get; set; }
        public int DisplayOrder { get; set; } = 1000;
    }
}
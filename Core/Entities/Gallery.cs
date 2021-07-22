using System.Collections.Generic;

namespace Core.Entities
{
    public class Gallery : BaseEntity
    {
        public Gallery(int? bannerId)
        {
            BannerId = bannerId;
        }

        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }
        public virtual IReadOnlyList<GalleryImages> Images { get; set; }
    }
}
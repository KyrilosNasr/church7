using Core.Entities;

namespace Core.Specifications
{
    public class GalleryWithImagesAndBannersSpecification : BaseSpecification<Gallery>
    {
        public GalleryWithImagesAndBannersSpecification()
        {
            AddInclude(x => x.Banner);
        }
    }
}
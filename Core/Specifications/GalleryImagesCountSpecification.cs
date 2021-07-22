using Core.Entities;

namespace Core.Specifications
{
    public class GalleryImagesCountSpecification : BaseSpecification<GalleryImages>
    {
        public GalleryImagesCountSpecification()
        {
            AddOrderBy(x => x.DisplayOrder);
        }

        public GalleryImagesCountSpecification(BasePaginationsParams paginationsParams) : base(x => (string.IsNullOrEmpty(paginationsParams.Search) || x.Image.Title.ToLower().Contains(paginationsParams.Search)))
        {
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
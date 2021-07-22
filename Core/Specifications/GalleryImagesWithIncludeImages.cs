using Core.Entities;

namespace Core.Specifications
{
    public class GalleryImagesWithIncludeImages : BaseSpecification<GalleryImages>
    {
        public GalleryImagesWithIncludeImages(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Image);
        }

        public GalleryImagesWithIncludeImages(BasePaginationsParams paginationsParams) : base(x => (string.IsNullOrEmpty(paginationsParams.Search) || x.Image.Title.ToLower().Contains(paginationsParams.Search)))
        {
            AddInclude(x => x.Image);
            AddOrderBy(x => x.DisplayOrder);
            ApplyPaging(paginationsParams.PageSize, paginationsParams.PageSize * (paginationsParams.PageIndex - 1));
        }
    }
}
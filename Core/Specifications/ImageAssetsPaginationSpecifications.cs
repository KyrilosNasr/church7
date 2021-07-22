using Core.Entities;
using Core.Specifications.Params;

namespace Core.Specifications
{
    public class ImageAssetsPaginationSpecifications : BaseSpecification<ImageAssets>
    {
        public ImageAssetsPaginationSpecifications(int id) : base(x => x.Id == id)
        {
        }

        public ImageAssetsPaginationSpecifications(ImageAssetsParams imageAssetsParams)
        : base(x =>
        (string.IsNullOrEmpty(imageAssetsParams.Search) || x.Title.ToLower().Contains(imageAssetsParams.Search)) &&
        (!imageAssetsParams.ImgId.HasValue || x.Id == imageAssetsParams.ImgId) &&
        (string.IsNullOrEmpty(imageAssetsParams.ImagePath) || x.ImgUrl == imageAssetsParams.ImagePath)
        )
        {
            AddOrderBy(x => x.Id);
            ApplyPaging(imageAssetsParams.PageSize, imageAssetsParams.PageSize * (imageAssetsParams.PageIndex - 1));
        }
    }
}
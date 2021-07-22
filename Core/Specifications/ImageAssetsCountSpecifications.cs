using Core.Entities;
using Core.Specifications.Params;

namespace Core.Specifications
{
    public class ImageAssetsCountSpecifications : BaseSpecification<ImageAssets>
    {
        public ImageAssetsCountSpecifications(ImageAssetsParams imageAssetsParams)
        : base(x =>
        (string.IsNullOrEmpty(imageAssetsParams.Search) || x.Title.ToLower().Contains(imageAssetsParams.Search)) &&
        (!imageAssetsParams.ImgId.HasValue || x.Id == imageAssetsParams.ImgId) &&
        (string.IsNullOrEmpty(imageAssetsParams.ImagePath) || x.ImgUrl == imageAssetsParams.ImagePath))
        {
        }
    }
}
namespace Core.Specifications.Params
{
    public class ImageAssetsParams : BasePaginationsParams
    {
        public int? ImgId { get; set; }
        public string ImagePath { get; set; }
    }
}
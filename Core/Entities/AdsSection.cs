namespace Core.Entities
{
    public class AdsSection : BaseEntity
    {
        public int ImageId { get; set; }
        public ImageAssets Image { get; set; }
        public int DisplayOrder { get; set; } = 1000;
        public bool IsActive { get; set; } = true;
    }
}
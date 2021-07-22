namespace Core.Entities
{
    public class AboutChurch : BaseEntity
    {
        public int? ImageId { get; set; }
        public ImageAssets Image { get; set; }
        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }
        public string Description { get; set; }
    }
}
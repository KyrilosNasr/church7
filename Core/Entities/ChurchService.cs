namespace Core.Entities
{
    public class ChurchService : BaseEntity
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public int BannerId { get; set; }
        public ImageAssets Banner { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; } = 100;
    }
}
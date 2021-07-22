using Core.Entities.Enums;

namespace Core.Entities
{
    public class GeneralSection : BaseEntity
    {
        public SectionsEnum SectionName { get; set; }
        public int DisplayOrder { get; set; }
        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }
        public bool IsActive { get; set; }
        public bool IsWhite { get; set; } = true;
    }
}
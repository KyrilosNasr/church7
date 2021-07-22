using Core.Entities.Enums;

namespace Core.Inputs
{
    public class CreateGeneralSection
    {
        public int? Id { get; set; }
        public SectionsEnum SectionName { get; set; }
        public int DisplayOrder { get; set; }
        public int? BannerId { get; set; }
        public bool IsActive { get; set; }
        public bool IsWhite { get; set; }
    }
}
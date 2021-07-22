using Core.Entities;
using Core.Entities.Enums;

namespace API.Dtos
{
    public class GeneralSectionsDto
    {
        public int? Id { get; set; }
        public SectionsEnum SectionName { get; set; }
        public int DisplayOrder { get; set; }
        public ImageAssetsDto Banner { get; set; }
        public bool IsActive { get; set; }
        public bool IsWhite { get; set; }

    }
}
using Core.Entities;

namespace API.Dtos
{
    public class ChurchServiceDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public ImageAssetsDto Banner { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; }
    }
}
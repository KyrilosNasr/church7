using System;

namespace Core.Inputs
{
    public class CreateFatherInput
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string PriestlyRank { get; set; }
        public DateTime PriestlyDate { get; set; }
        public bool IsDead { get; set; } = false;
        public bool IsActive { get; set; } = false;
        public DateTime? DeathDate { get; set; }
        public string About { get; set; }
        public int ImageId { get; set; }
        public int DisplayOrder { get; set; }
        public int? FatherSectionId { get; set; }
    }
}
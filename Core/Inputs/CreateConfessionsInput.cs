using System;
using Core.Entities.Enums;

namespace Core.Inputs
{
    public class CreateConfessionsInput
    {
        public int? Id { get; set; }
        public DaysEnum Day { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
        public int FathersId { get; set; }
        public int DisplayOrder { get; set; }
        public GenderEnum Gender { get; set; }
    }
}
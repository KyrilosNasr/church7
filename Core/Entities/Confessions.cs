using System;
using System.Collections.Generic;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Confessions : BaseEntity
    {
        public DaysEnum Day { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }

        public int FathersId { get; set; }
        public Fathers Fathers { get; set; }
        public GenderEnum Gender { get; set; } = GenderEnum.Booth;
        public int DisplayOrder { get; set; } = 100;
    }
}
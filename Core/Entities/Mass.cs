using System;
using System.Collections.Generic;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class Mass : BaseEntity
    {
        public Mass()
        {
        }



        public MassRepetationType MassRepetationType { get; set; }
        public DaysEnum Day { get; set; }
        public int DisplayOrder { get; set; } = 100;
        public string Order { get; set; }
        public DateTime? Date { get; set; }
        public int MassSectionId { get; set; }
        public MassSection MassSection { get; set; }

        public string Name { get; set; }
        public MassEventsEnum Type { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
    }
}
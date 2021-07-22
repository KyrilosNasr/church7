using System;
using Core.Entities.Enums;

namespace Core.Inputs
{
    public class CreateMassIntput
    {
        public int? Id { get; set; }
        // public int? massEventId { get; set; }
        public int? MassSectionId { get; set; }
        public MassRepetationType MassRepetationType { get; set; }
        public DaysEnum Day { get; set; }
        public int DisplayOrder { get; set; } = 100;
        public string Order { get; set; }
        public DateTime? Date { get; set; }

        public string Name { get; set; }
        public MassEventsEnum Type { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
    }
}
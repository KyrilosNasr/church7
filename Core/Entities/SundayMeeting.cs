using System;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class SundayMeeting : BaseEntity
    {
        public string Name { get; set; }
        public string Grade { get; set; }
        public DaysEnum Day { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
        public int DisplayOrder { get; set; } = 100;
    }
}
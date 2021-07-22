using System;
using Core.Entities.Enums;

namespace API.Dtos
{
    public class SundayMeetingDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Grade { get; set; }
        public DaysEnum Day { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
        public int DisplayOrder { get; set; }
    }
}
using System;
using Core.Entities.Enums;

namespace API.Dtos
{
    public class MassEventDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public MassEventsEnum Type { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
    }
}
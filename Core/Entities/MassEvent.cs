using System;
using Core.Entities.Enums;

namespace Core.Entities
{
    public class MassEvent : BaseEntity
    {
        public MassEvent(string name, MassEventsEnum type, DateTime startTime, DateTime endTime, string place, bool isActive, int massId)
        {
            Name = name;
            Type = type;
            StartTime = startTime;
            EndTime = endTime;
            Place = place;
            IsActive = isActive;
            this.MassId = massId;
        }

        public string Name { get; set; }
        public MassEventsEnum Type { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
        public virtual Mass Mass { get; set; }
        public int MassId { get; set; }
    }
}
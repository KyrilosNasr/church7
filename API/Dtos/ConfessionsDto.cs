using System;
using System.Collections.Generic;
using Core.Entities;
using Core.Entities.Enums;

namespace API.Dtos
{
    public class ConfessionsDto
    {
        public int? Id { get; set; }
        public DaysEnum Day { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Place { get; set; }
        public bool IsActive { get; set; }
        public GenderEnum Gender { get; set; }
        public int DisplayOrder { get; set; }
    }
}
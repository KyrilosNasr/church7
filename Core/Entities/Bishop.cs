using System;

namespace Core.Entities
{
    public class Bishop : BaseEntity
    {
        public string Name { get; set; }
        public string BishopType { get; set; }
        public DateTime MonasticDate { get; set; }
        public DateTime OrdinationDate { get; set; }
        public string About { get; set; }
        public string ImgUrl { get; set; }
    }
}
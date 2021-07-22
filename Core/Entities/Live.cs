namespace Core.Entities
{
    public class Live : BaseEntity
    {
        public bool IsActive { get; set; }
        public string VideoId { get; set; }
    }
}
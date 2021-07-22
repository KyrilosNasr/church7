namespace Core.Inputs
{
    public class CreateService
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public int BannerId { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; }
    }
}
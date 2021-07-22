namespace Core.Inputs
{
    public class CreateAdInput
    {
        public int? Id { get; set; }
        public int ImageId { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsActive { get; set; }
    }
}
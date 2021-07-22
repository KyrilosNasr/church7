namespace Core.Inputs
{
    public class CreateGalleryImage
    {
        public int? Id { get; set; }
        public int ImageId { get; set; }
        public int displayOrder { get; set; } = 1000;
    }
}
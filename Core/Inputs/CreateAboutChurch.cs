namespace Core.Inputs
{
    public class CreateAboutChurch
    {
        public int? Id { get; set; }
        public int ImageId { get; set; }
        public int BannerId { get; set; }
        public string Description { get; set; }
    }
}
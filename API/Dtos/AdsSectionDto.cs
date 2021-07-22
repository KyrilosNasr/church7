namespace API.Dtos
{
    public class AdsSectionDto
    {
        public int? Id { get; set; }
        public ImageAssetsDto Image { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsActive { get; set; }
    }
}
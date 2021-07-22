
using API.Helpers;

namespace API.Dtos
{
    public class FathersReturnDto
    {
        public FathersReturnDto()
        {
        }

        public FathersReturnDto(ImageAssetsDto banner, Pagination<FathersDto> fathers)
        {
            Banner = banner;
            Fathers = fathers;
        }

        public ImageAssetsDto Banner { get; set; }
        public Pagination<FathersDto> Fathers { get; set; }
    }
}
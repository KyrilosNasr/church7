using System.Collections.Generic;

namespace API.Dtos
{
    public class MassSectionDto
    {
        public ImageAssetsDto Banner { get; set; }
        public IReadOnlyList<MassDto> Mass { get; set; }
    }
}
using System.Collections.Generic;

namespace Core.Entities
{
    public class FathersSection : BaseEntity
    {
        public FathersSection(int? bannerId)
        {
            BannerId = bannerId;
        }

        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }


        public virtual IReadOnlyList<Fathers> fathers { get; set; }
    }
}
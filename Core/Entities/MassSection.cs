using System.Collections.Generic;

namespace Core.Entities
{
    public class MassSection : BaseEntity
    {
        public MassSection()
        {
        }

        public MassSection(int? bannerId)
        {
            BannerId = bannerId;
        }

        public int? BannerId { get; set; }
        public ImageAssets Banner { get; set; }
        public virtual IReadOnlyList<Mass> Mass { get; set; }
    }
}
using Core.Entities;

namespace Core.Specifications
{
    public class FathersSecImageAssetsIncudeSpecifications : BaseSpecification<FathersSection>
    {
        public FathersSecImageAssetsIncudeSpecifications()
        {
            AddInclude(x => x.Banner);
            // AddInclude(x => x.fathers);
        }

        public FathersSecImageAssetsIncudeSpecifications(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Banner);
            // AddInclude(x => x.fathers);

        }
    }
}
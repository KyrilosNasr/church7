using Core.Entities;

namespace Core.Specifications
{
    public class MassSecWithMassesSpecifications : BaseSpecification<MassSection>
    {
        public MassSecWithMassesSpecifications()
        {
            AddInclude(x => x.Mass);
            AddInclude(x => x.Banner);
        }
    }
}
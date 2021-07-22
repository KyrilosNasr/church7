using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class AdsWithImagesSpecifications : BaseSpecification<AdsSection>
    {
        public AdsWithImagesSpecifications()
        {
            AddInclude(x => x.Image);
            AddOrderBy(x => x.DisplayOrder);
        }

        public AdsWithImagesSpecifications(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Image);
        }
    }
}
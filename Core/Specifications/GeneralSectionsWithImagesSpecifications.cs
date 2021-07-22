using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class GeneralSectionsWithImagesSpecifications : BaseSpecification<GeneralSection>
    {
        public GeneralSectionsWithImagesSpecifications()
        {
            AddInclude(x => x.Banner);
            AddOrderBy(x => x.DisplayOrder);
        }

        public GeneralSectionsWithImagesSpecifications(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Banner);
        }
    }
}
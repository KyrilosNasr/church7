using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ServicesWithBannerSpecification : BaseSpecification<ChurchService>
    {
        public ServicesWithBannerSpecification()
        {
            AddInclude(x => x.Banner);
            AddOrderBy(x => x.DisplayOrder);
        }

        public ServicesWithBannerSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Banner);
        }
    }
}
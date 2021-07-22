using System;
using System.Linq.Expressions;
using Core.Entities;
using Core.Specifications.Params;

namespace Core.Specifications
{
    public class FathersCountSpecifications : BaseSpecification<Fathers>
    {
        public FathersCountSpecifications(FathersParams fathersParams)
        : base(x => (string.IsNullOrEmpty(fathersParams.Search) || x.Name.ToLower().Contains(fathersParams.Search)))
        {
            AddOrderBy(x => x.DisplayOrder);
        }
    }
}
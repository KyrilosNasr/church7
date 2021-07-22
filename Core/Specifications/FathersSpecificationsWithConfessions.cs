using Core.Entities;
using Core.Specifications.Params;

namespace Core.Specifications
{
    public class FathersSpecificationsWithConfessions : BaseSpecification<Fathers>
    {
        public FathersSpecificationsWithConfessions(FathersParams fathersParams)
        : base(x => (string.IsNullOrEmpty(fathersParams.Search) || x.Name.ToLower().Contains(fathersParams.Search))
        && (!fathersParams.FatherId.HasValue || x.Id == fathersParams.FatherId)
        )
        {
            AddInclude(x => x.Confessions);
            AddOrderBy(x => x.Name);
            AddOrderBy(x => x.DisplayOrder);
            AddInclude(x => x.Image);
            ApplyPaging(fathersParams.PageSize, fathersParams.PageSize * (fathersParams.PageIndex - 1));
        }

        public FathersSpecificationsWithConfessions(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Confessions);
            AddInclude(x => x.Image);
        }
    }
}
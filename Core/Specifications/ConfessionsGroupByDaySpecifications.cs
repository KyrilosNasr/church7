using Core.Entities;

namespace Core.Specifications
{
    public class ConfessionsGroupByDaySpecifications : BaseSpecification<Confessions>
    {
        public ConfessionsGroupByDaySpecifications()
        {
            AddOrderBy(x => x.DisplayOrder);
        }

        public ConfessionsGroupByDaySpecifications(int? id, int? fatherId) : base(x =>
         (!(id.Value > 0) || x.Id == id) &&
         (!(fatherId.Value > 0) || fatherId == x.FathersId))
        {
            AddOrderBy(x => x.DisplayOrder);
            // AddGroupBy(x => x.Day);
        }
    }
}
using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class SundayMeetingSpecifications : BaseSpecification<SundayMeeting>
    {
        public SundayMeetingSpecifications()
        {
            AddOrderBy(x => x.DisplayOrder);
        }

        public SundayMeetingSpecifications(int? id) : base(x => (!id.HasValue || x.Id == id))
        {
        }
    }
}
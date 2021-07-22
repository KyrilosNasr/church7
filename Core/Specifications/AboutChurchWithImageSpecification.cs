using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class AboutChurchWithImageSpecification : BaseSpecification<AboutChurch>
    {
        public AboutChurchWithImageSpecification()
        {
            AddInclude(x => x.Banner);
            AddInclude(x => x.Image);
        }

        public AboutChurchWithImageSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Banner);
            AddInclude(x => x.Image);
        }
    }
}
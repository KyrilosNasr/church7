using System.Collections.Generic;
using Core.Entities;

namespace API.Helpers
{
    public class AppSectionWithImage<T> where T : class
    {
        public AppSectionWithImage(ImageAssets banner, Pagination<IReadOnlyList<T>> result)
        {
            Banner = banner;
            this.result = result;
        }

        public ImageAssets Banner { get; set; }
        public Pagination<IReadOnlyList<T>> result { get; set; }
    }
}
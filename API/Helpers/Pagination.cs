using System.Collections.Generic;

namespace API.Helpers
{
    public class Pagination<T> where T : class
    {
        public Pagination(int pageSize, int pageIndex, int count, IReadOnlyList<T> result)
        {
            PageSize = pageSize;
            PageIndex = pageIndex;
            Count = count;
            this.result = result;
        }

        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public int Count { get; set; }
        public IReadOnlyList<T> result { get; set; }
    }
}
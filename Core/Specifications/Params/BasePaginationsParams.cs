namespace Core.Specifications
{
    public class BasePaginationsParams
    {
        private const int MaxPageSixe = 50;

        public int PageIndex { get; set; } = 1;

        private int _pageSize = 6;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSixe) ? MaxPageSixe : value;
        }
        public string Sort { get; set; }
        private string _search;
        public string Search
        {
            get => _search;
            set => _search = (string.IsNullOrEmpty(value)) ? null : value.ToLower();
        }
    }
}
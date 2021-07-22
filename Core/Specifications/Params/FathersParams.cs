namespace Core.Specifications.Params
{
    public class FathersParams : BasePaginationsParams
    {
        public int? FatherId { get; set; }
        public int? ConfessionId { get; set; }
    }
}
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class LiveConfigurations : IEntityTypeConfiguration<Live>
    {
        public void Configure(EntityTypeBuilder<Live> builder)
        {
            //builder.HasNoKey();
        }
    }
}
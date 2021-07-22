using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class AboutChurchConfigurations : IEntityTypeConfiguration<AboutChurch>
    {
        public void Configure(EntityTypeBuilder<AboutChurch> builder)
        {
            // builder.OwnsOne(o => o.Banner, a => a.WithOwner());
            // builder.OwnsOne(o => o.Image, a => a.WithOwner());
        }
    }
}
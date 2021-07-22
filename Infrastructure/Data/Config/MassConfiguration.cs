using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class MassConfiguration : IEntityTypeConfiguration<Mass>
    {
        public void Configure(EntityTypeBuilder<Mass> builder)
        {
            builder.Property(s => s.Day)
                .HasConversion(
                    o => o.ToString(),
                    o => (DaysEnum)Enum.Parse(typeof(DaysEnum), o)
                );

            builder.Property(s => s.MassRepetationType).HasConversion(
                    o => o.ToString(),
                    o => (MassRepetationType)Enum.Parse(typeof(MassRepetationType), o)
                );

            //builder.HasMany(o => o.MassEvent).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
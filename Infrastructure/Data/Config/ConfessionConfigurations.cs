using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ConfessionConfigurations : IEntityTypeConfiguration<Confessions>
    {
        public void Configure(EntityTypeBuilder<Confessions> builder)
        {
            builder.Property(s => s.Day)
                .HasConversion(
                    o => o.ToString(),
                    o => (DaysEnum)Enum.Parse(typeof(DaysEnum), o)
                );
            builder.Property(s => s.Gender)
                .HasConversion(
                    o => o.ToString(),
                    o => (GenderEnum)Enum.Parse(typeof(GenderEnum), o)
                );
            // builder.HasMany(o => o.Calender).WithOne().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
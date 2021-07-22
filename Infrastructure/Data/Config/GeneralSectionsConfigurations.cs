using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Config
{
    public class GeneralSectionConfigurations : IEntityTypeConfiguration<GeneralSection>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<GeneralSection> builder)
        {
            builder.Property(s => s.SectionName)
                .HasConversion(
                    o => o.ToString(),
                    o => (SectionsEnum)Enum.Parse(typeof(SectionsEnum), o)
                );
        }
    }
}
using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class MassEventConfiguration : IEntityTypeConfiguration<MassEvent>
    {
        public void Configure(EntityTypeBuilder<MassEvent> builder)
        {
            builder.Property(s => s.Type)
                .HasConversion(
                    o => o.ToString(),
                    o => (MassEventsEnum)Enum.Parse(typeof(MassEventsEnum), o)
                );
        }
    }
}
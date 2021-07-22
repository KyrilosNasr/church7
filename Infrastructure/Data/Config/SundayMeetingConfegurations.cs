using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Config
{
    public class SundayMeetingConfegurations : IEntityTypeConfiguration<SundayMeeting>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<SundayMeeting> builder)
        {
            builder.Property(s => s.Day)
                .HasConversion(
                    o => o.ToString(),
                    o => (DaysEnum)Enum.Parse(typeof(DaysEnum), o)
                );
        }
    }
}
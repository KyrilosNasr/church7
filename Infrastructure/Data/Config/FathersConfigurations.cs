using System;
using Core.Entities;
using Core.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class FathersConfigurations : IEntityTypeConfiguration<Fathers>
    {
        public void Configure(EntityTypeBuilder<Fathers> builder)
        {
            // builder.Property(x => x.Id).ValueGeneratedOnAdd();
        }
    }
}
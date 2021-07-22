using System;
using System.Linq;
using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        // public DbSet<Product> Products { get; set; }
        public DbSet<Live> Live { get; set; }
        public DbSet<Confessions> Confessions { get; set; }
        public DbSet<Bishop> Bishop { get; set; }
        public DbSet<Fathers> Fathers { get; set; }
        public DbSet<FathersSection> FathersSections { get; set; }
        public DbSet<SundayMeeting> SundayMeetings { get; set; }
        public DbSet<AboutChurch> AboutChurch { get; set; }
        public DbSet<ChurchService> ChurchServices { get; set; }
        public DbSet<ImageAssets> ImageAssets { get; set; }
        public DbSet<MassSection> MassSection { get; set; }
        public DbSet<Mass> Masses { get; set; }
        public DbSet<Gallery> Gallery { get; set; }
        public DbSet<GalleryImages> GalleryImages { get; set; }
        public DbSet<GeneralSection> GeneralSections { get; set; }
        public DbSet<AdsSection> AdsSection { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(decimal));
                    var dateTimeProperties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(DateTimeOffset));

                    foreach (var property in properties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion<double>();
                    }

                    foreach (var property in dateTimeProperties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
            }
        }
    }
}
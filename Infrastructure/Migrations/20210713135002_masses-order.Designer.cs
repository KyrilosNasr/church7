﻿// <auto-generated />
using System;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Migrations
{
    [DbContext(typeof(StoreContext))]
    [Migration("20210713135002_masses-order")]
    partial class massesorder
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7");

            modelBuilder.Entity("Core.Entities.AboutChurch", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("BannerId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ImageId")
                        .HasColumnType("int");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("BannerId");

                    b.HasIndex("ImageId");

                    b.ToTable("AboutChurch");
                });

            modelBuilder.Entity("Core.Entities.Bishop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("About")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BishopType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("MonasticDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("OrdinationDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Bishop");
                });

            modelBuilder.Entity("Core.Entities.ChurchService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("BannerImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("ChurchServices");
                });

            modelBuilder.Entity("Core.Entities.Confessions", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Day")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("FathersId")
                        .HasColumnType("int");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Place")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("FathersId");

                    b.ToTable("Confessions");
                });

            modelBuilder.Entity("Core.Entities.Fathers", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("About")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DeathDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<int>("FatherSectionId")
                        .HasColumnType("int");

                    b.Property<int>("ImageId")
                        .HasColumnType("int");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDead")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("PriestlyDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("PriestlyRank")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("fathersSectionId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.HasIndex("fathersSectionId");

                    b.ToTable("Fathers");
                });

            modelBuilder.Entity("Core.Entities.FathersSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("BannerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BannerId");

                    b.ToTable("FathersSections");
                });

            modelBuilder.Entity("Core.Entities.ImageAssets", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ImgUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ImageAssets");
                });

            modelBuilder.Entity("Core.Entities.Live", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("VideoId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Live");
                });

            modelBuilder.Entity("Core.Entities.Mass", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime?>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Day")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<string>("MassRepetationType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("MassSectionId")
                        .HasColumnType("int");

                    b.Property<string>("Order")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SecId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MassSectionId");

                    b.ToTable("Masses");
                });

            modelBuilder.Entity("Core.Entities.MassEvent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int>("MassId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Place")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("MassId");

                    b.ToTable("MassEvents");
                });

            modelBuilder.Entity("Core.Entities.MassSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("BannerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BannerId");

                    b.ToTable("MassSection");
                });

            modelBuilder.Entity("Core.Entities.SundayMeeting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Day")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("DisplayOrder")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Grade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Place")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("SundayMeetings");
                });

            modelBuilder.Entity("Core.Entities.AboutChurch", b =>
                {
                    b.HasOne("Core.Entities.ImageAssets", "Banner")
                        .WithMany()
                        .HasForeignKey("BannerId");

                    b.HasOne("Core.Entities.ImageAssets", "Image")
                        .WithMany()
                        .HasForeignKey("ImageId");

                    b.Navigation("Banner");

                    b.Navigation("Image");
                });

            modelBuilder.Entity("Core.Entities.Confessions", b =>
                {
                    b.HasOne("Core.Entities.Fathers", "Fathers")
                        .WithMany("Confessions")
                        .HasForeignKey("FathersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Fathers");
                });

            modelBuilder.Entity("Core.Entities.Fathers", b =>
                {
                    b.HasOne("Core.Entities.ImageAssets", "Image")
                        .WithMany()
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Core.Entities.FathersSection", "fathersSection")
                        .WithMany("fathers")
                        .HasForeignKey("fathersSectionId");

                    b.Navigation("fathersSection");

                    b.Navigation("Image");
                });

            modelBuilder.Entity("Core.Entities.FathersSection", b =>
                {
                    b.HasOne("Core.Entities.ImageAssets", "Banner")
                        .WithMany()
                        .HasForeignKey("BannerId");

                    b.Navigation("Banner");
                });

            modelBuilder.Entity("Core.Entities.Mass", b =>
                {
                    b.HasOne("Core.Entities.MassSection", null)
                        .WithMany("Mass")
                        .HasForeignKey("MassSectionId");
                });

            modelBuilder.Entity("Core.Entities.MassEvent", b =>
                {
                    b.HasOne("Core.Entities.Mass", "Mass")
                        .WithMany("MassEvent")
                        .HasForeignKey("MassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Mass");
                });

            modelBuilder.Entity("Core.Entities.MassSection", b =>
                {
                    b.HasOne("Core.Entities.ImageAssets", "Banner")
                        .WithMany()
                        .HasForeignKey("BannerId");

                    b.Navigation("Banner");
                });

            modelBuilder.Entity("Core.Entities.Fathers", b =>
                {
                    b.Navigation("Confessions");
                });

            modelBuilder.Entity("Core.Entities.FathersSection", b =>
                {
                    b.Navigation("fathers");
                });

            modelBuilder.Entity("Core.Entities.Mass", b =>
                {
                    b.Navigation("MassEvent");
                });

            modelBuilder.Entity("Core.Entities.MassSection", b =>
                {
                    b.Navigation("Mass");
                });
#pragma warning restore 612, 618
        }
    }
}

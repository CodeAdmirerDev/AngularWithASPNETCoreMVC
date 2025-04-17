﻿// <auto-generated />
using EFCoreSQLiteWebAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EFCoreSQLiteWebAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250417182754_AddTeacher")]
    partial class AddTeacher
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.4");

            modelBuilder.Entity("EFCoreSQLiteWebAPI.Models.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Course")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("TeacherId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("TeacherId");

                    b.ToTable("Students");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Course = "Math",
                            Name = "Arjun Reddy",
                            TeacherId = 1
                        },
                        new
                        {
                            Id = 2,
                            Course = "Science",
                            Name = "Priya Mehta",
                            TeacherId = 1
                        },
                        new
                        {
                            Id = 3,
                            Course = "History",
                            Name = "Rahul Jain",
                            TeacherId = 2
                        });
                });

            modelBuilder.Entity("EFCoreSQLiteWebAPI.Models.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Teachers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Monica Sharma"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Ravi Kumar"
                        });
                });

            modelBuilder.Entity("EFCoreSQLiteWebAPI.Models.Student", b =>
                {
                    b.HasOne("EFCoreSQLiteWebAPI.Models.Teacher", "Teacher")
                        .WithMany("Students")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("EFCoreSQLiteWebAPI.Models.Teacher", b =>
                {
                    b.Navigation("Students");
                });
#pragma warning restore 612, 618
        }
    }
}

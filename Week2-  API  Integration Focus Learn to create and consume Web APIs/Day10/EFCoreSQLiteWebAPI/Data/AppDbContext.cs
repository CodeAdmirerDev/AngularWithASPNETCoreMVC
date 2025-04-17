using EFCoreSQLiteWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EFCoreSQLiteWebAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed Teachers
            modelBuilder.Entity<Teacher>().HasData(
                new Teacher { Id = 1, Name = "Monica Sharma" },
                new Teacher { Id = 2, Name = "Ravi Kumar" }
            );

            // Seed Students
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Arjun Reddy", Course = "Math", TeacherId = 1 },
                new Student { Id = 2, Name = "Priya Mehta", Course = "Science", TeacherId = 1 },
                new Student { Id = 3, Name = "Rahul Jain", Course = "History", TeacherId = 2 }
            );
        }
    }
}

using CrudApiDemo.Models;

namespace CrudApiDemo.Repositories
{
    public static class ProductRepo
    {
        public static List<Product> Products { get; set; } = new List<Product>
    {
        new Product { Id = 1, Name = "Laptop", Price = 75000 },
        new Product { Id = 2, Name = "Mouse", Price = 1500 }
    };
    }
}

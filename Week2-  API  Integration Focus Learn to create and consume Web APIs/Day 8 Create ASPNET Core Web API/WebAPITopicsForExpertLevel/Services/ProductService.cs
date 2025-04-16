using WebAPITopicsForExpertLevel.Models;

namespace WebAPITopicsForExpertLevel.Services
{
    public class ProductService
    {
        public List<Product> Products { get; set; }

        public ProductService() {

            Products = new List<Product>()
            {
                new Product { Id = 1, Name = "Product 1", Price = 10.99m, Description = "Description 1", Category = "Category 1", ImageUrl = "http://example.com/image1.jpg" },
                new Product { Id = 2, Name = "Product 2", Price = 20.99m, Description = "Description 2", Category = "Category 2", ImageUrl = "http://example.com/image2.jpg" },
                new Product { Id = 3, Name = "Product 3", Price = 30.99m, Description = "Description 3", Category = "Category 3", ImageUrl = "http://example.com/image3.jpg" },

            };
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return  Products.ToList();
        }
    }
}

using System.ComponentModel.DataAnnotations;

namespace ProductCatalogApi.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; } // Primary key, auto increment  
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Description { get; set; }

    }
}

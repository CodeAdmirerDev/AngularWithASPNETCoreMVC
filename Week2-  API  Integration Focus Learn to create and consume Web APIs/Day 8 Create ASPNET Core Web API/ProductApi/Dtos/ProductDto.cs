using System.ComponentModel.DataAnnotations;

namespace ProductApi.Dtos
{
    public class ProductDto
    {
        [Required]
        public string name { get; set; }

        [Range(1,10000)]
        public decimal price { get; set; }
    }
}

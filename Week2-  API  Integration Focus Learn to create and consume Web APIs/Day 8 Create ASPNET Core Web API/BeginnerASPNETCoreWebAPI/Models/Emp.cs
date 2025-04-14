using System.ComponentModel.DataAnnotations;

namespace BeginnerASPNETCoreWebAPI.Models
{
    public class Emp
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }

        [Range(1000, 100000)]
        public int salary { get; set; }
    }
}

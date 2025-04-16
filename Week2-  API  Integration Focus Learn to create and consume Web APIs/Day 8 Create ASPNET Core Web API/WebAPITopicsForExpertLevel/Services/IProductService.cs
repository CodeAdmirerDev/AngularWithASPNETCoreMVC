using WebAPITopicsForExpertLevel.Models;

namespace WebAPITopicsForExpertLevel.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllAsync();
    }

}

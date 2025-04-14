using AutoMapper;
using ProductApi.Dtos;
using ProductApi.Models;

namespace ProductApi.Mappings
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
        }
    }
}

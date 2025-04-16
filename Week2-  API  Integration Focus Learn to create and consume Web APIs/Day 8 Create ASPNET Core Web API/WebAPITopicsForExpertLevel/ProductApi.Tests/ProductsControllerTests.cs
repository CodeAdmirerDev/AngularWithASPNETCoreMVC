using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using WebAPITopicsForExpertLevel.Controllers;
using WebAPITopicsForExpertLevel.Models;
using WebAPITopicsForExpertLevel.Services;
using Xunit;

namespace WebAPITopicsForExpertLevel.ProductApi.Tests
{
    public class ProductsControllerTests
    {

        [Fact]
        public async Task GetAll_ReturnsOkResult_WithListOfProducts()
        {
            var mockService = new Mock<IProductService>();
            mockService.Setup(s => s.GetAllAsync()).ReturnsAsync(new List<Product>());
            var controller = new ProductsController(mockService.Object, new Mock<IMapper>().Object);

            var result = await controller.GetPaged();
            Assert.IsType<OkObjectResult>(result);
        }
    }
}

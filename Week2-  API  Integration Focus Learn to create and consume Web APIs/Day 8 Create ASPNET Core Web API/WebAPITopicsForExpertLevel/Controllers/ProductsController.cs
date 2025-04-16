using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPITopicsForExpertLevel.Services;

namespace WebAPITopicsForExpertLevel.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly IProductService _service;

        public ProductsController(IProductService service, AutoMapper.IMapper @object)
        {
            _service = service;
        }

        [Authorize]
        [HttpGet]
        public IActionResult SecureEndpoint() => Ok("This is protected.");


        [HttpGet("paged")]
        public async Task<IActionResult> GetPaged([FromQuery] int page = 1, [FromQuery] int size = 10)
        {
            var data = await _service.GetAllAsync();
            var paged = data.Skip((page - 1) * size).Take(size);
            return Ok(paged);
        }

    }
}

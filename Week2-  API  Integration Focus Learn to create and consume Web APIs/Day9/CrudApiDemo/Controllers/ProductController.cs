using CrudApiDemo.Models;
using CrudApiDemo.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudApiDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        // GET: api/product
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetAll()
        {
            return Ok(ProductRepo.Products);
        }

        // GET: api/product/1
        [HttpGet("{id}")]
        public ActionResult<Product> GetById(int id)
        {
            var product = ProductRepo.Products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        // POST: api/product
        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            product.Id = ProductRepo.Products.Max(p => p.Id) + 1;
            ProductRepo.Products.Add(product);
            return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
        }

        // PUT: api/product/1
        [HttpPut("{id}")]
        public IActionResult Update(int id, Product updatedProduct)
        {
            var product = ProductRepo.Products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();

            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;
            return NoContent();
        }

        // DELETE: api/product/1
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = ProductRepo.Products.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();

            ProductRepo.Products.Remove(product);
            return NoContent();
        }
    }
}

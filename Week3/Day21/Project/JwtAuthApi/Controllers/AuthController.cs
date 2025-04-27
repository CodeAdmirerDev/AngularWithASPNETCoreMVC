using JwtAuthApi.Models;
using JwtAuthApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly TokenService _tokenService;

        public AuthController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserModel user)
        {
            // Dummy validation
            if (user.Username == "admin" && user.Password == "password")
            {
                var token = _tokenService.CreateToken(user.Username);
                return Ok(new { token });
            }
            return Unauthorized();
        }

        [Authorize]
        [HttpGet("secure-data")]
        public IActionResult GetSecureData()
        {
            return Ok(new { data = "This is a protected data only visible to authenticated users." });
        }

    }
}

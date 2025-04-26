using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthCheckerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {

        [Authorize(Roles ="Admin")]
        [HttpGet("admin-data")]
        public IActionResult GetAdminData()
        {
            return Ok("This is protected data for admin only!");

        }

        [Authorize(Roles ="Admin,User")]
        [HttpGet("user-data")]
        public IActionResult GetUserData()
        {

            return Ok("This data is accessible by both admin and user!");
        }
        
        [AllowAnonymous]
        [HttpGet("public")]
        public IActionResult GetPublicData()
        {
            return Ok("This endpoint is public and doesn't required authentication");
        }


    }
}

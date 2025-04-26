using AuthCheckerApp.Models;
using AuthCheckerApp.Services;
using AuthCheckerApp.Stores;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthCheckerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private TokenService _tokenService;

        public AuthController(TokenService tokenService) {
        
            _tokenService = tokenService;
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody]User loginUser)
        {

            var user = UserStore.users.Where(u => u.Username == loginUser.Username && u.PasswordHash == loginUser.PasswordHash);

            if (user == null)
            {
                return Unauthorized("Invalid Creds");
            }

            var accessToken = _tokenService.GenerateAccessToken(loginUser);

            var refreshToken = _tokenService.GetRefreshToken(loginUser.Username);

            //Store refresh token

            RefreshTokenStore.refreshTokens.Add(refreshToken);

            return Ok( new {
                AccessToken =accessToken,
                RefreshToken = refreshToken
            });

        }

        public IActionResult RefreshToken([FromBody]string refreshToken)
        {
            var storedToken = RefreshTokenStore.refreshTokens.SingleOrDefault(t=> t.Token == refreshToken);

            if (storedToken == null || storedToken.ExpiryDate<DateTime.UtcNow) {

                return Unauthorized("Invalid or expired token");
            }

            var user = UserStore.users.SingleOrDefault(u => u.Username == storedToken.Username);

            if (user == null)
            {
                return Unauthorized("Invalid refresh token user");
            }

            //Implement rotation or remove old token 
            RefreshTokenStore.refreshTokens.Remove(storedToken);

            var newAccessToken = _tokenService.GenerateAccessToken(user);
            var newRefrehToken = _tokenService.GetRefreshToken(user.Username);

            RefreshTokenStore.refreshTokens.Add(newRefrehToken);

            return Ok(new
            {
                AccessToken = newAccessToken,
                RefreshToken = newRefrehToken

            });
        }

        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout([FromBody]string refreshToken)
        {
            var storedToken = RefreshTokenStore.refreshTokens.SingleOrDefault(t=> t.Token == refreshToken);

            if(storedToken != null)
            {
                RefreshTokenStore.refreshTokens.Remove(storedToken);
            }

            return NoContent();
        }

    }
}

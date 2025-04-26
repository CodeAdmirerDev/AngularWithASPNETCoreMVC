using AuthCheckerApp.JWTConfig;
using AuthCheckerApp.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace AuthCheckerApp.Services
{
    public class TokenService
    {
        public string GenerateAccessToken(User user)
        {
            var claims = new[]
            {

                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Jti,new Guid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtSettings.SecretKey));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);


            var token = new JwtSecurityToken(
                JwtSettings.Issuer,
                JwtSettings.Audience,
                claims,
                expires: DateTime.UtcNow.AddMinutes(JwtSettings.AccessTokenExpirationMinutes),
                signingCredentials: creds
                );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }

        public RefreshToken GetRefreshToken(string username)
        {
            return new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                ExpiryDate = DateTime.UtcNow.AddDays(JwtSettings.RefreshTokenExpirationDays),
                Username = username
            };

        }
    }
}

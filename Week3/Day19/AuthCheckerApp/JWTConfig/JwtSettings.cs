namespace AuthCheckerApp.JWTConfig
{
    public class JwtSettings
    {
        //HS256 expects a symmetric key at least 256 bits (32 bytes) long.
        public const string SecretKey = "ThisIsASecretKeyThatIsAtLeast32BytesLong!"; // This key value must be more than 32 chars
        public const string Issuer = "AuthCheckerAppIssuer";
        public const string Audience = "AuthCheckerAppAudience";
        public const int AccessTokenExpirationMinutes = 15;
        public const int RefreshTokenExpirationDays = 7;
    }
}

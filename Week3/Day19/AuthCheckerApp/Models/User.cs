namespace AuthCheckerApp.Models
{
    public class User
    {
        public string Username { get; set; }
        public string PasswordHash { get; set; } // For demo, plain text. Always hash in production  
        public string Role { get; set; }
    }
}

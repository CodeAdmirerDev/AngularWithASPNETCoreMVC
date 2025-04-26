using AuthCheckerApp.Models;

namespace AuthCheckerApp.Stores
{
    public static class UserStore
    {
        public static List<User> users = new List<User>{

            new User{Role="Admin",PasswordHash="password",Username="admin"},
            new User{Role="User",PasswordHash="password",Username="user"},
        };

    }
}

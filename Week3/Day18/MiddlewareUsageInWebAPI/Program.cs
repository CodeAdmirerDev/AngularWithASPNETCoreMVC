using MiddlewareUsageInWebAPI.MiddlewaresInfo;

namespace MiddlewareUsageInWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add logging configuration (console by default)  
            builder.Logging.ClearProviders();
            builder.Logging.AddConsole();


            // Add services to the container.

            builder.Services.AddControllers();

            var app = builder.Build();


            // Use custom exception handler middleware  
            app.UseMiddleware<ExceptionHandlingMiddleware>();

            // Use custom logging middleware  
            app.UseMiddleware<RequestLoggingMiddleware>();

            app.MapGet("/", () => "Hello World!");

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            // Endpoint to test exception handling  
            app.MapGet("/error", () =>
            {
                throw new Exception("Test exception!");
            });


            app.Run();
        }
    }
}

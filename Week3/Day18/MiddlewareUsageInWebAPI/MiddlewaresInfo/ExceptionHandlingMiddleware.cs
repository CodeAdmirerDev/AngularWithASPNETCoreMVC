namespace MiddlewareUsageInWebAPI.MiddlewaresInfo
{
    public class ExceptionHandlingMiddleware
    {

        public readonly RequestDelegate _next;
        public readonly ILogger<RequestLoggingMiddleware> _logger;

        public ExceptionHandlingMiddleware(RequestDelegate request, ILogger<RequestLoggingMiddleware> logger)
        {

            _next = request;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {

            try
            {
                await _next(context);//call the next middleware
             
            }
            catch (Exception ex)
            {

                _logger.LogError(ex, "Unhandled exception caught.");
                context.Response.StatusCode = 500;
                context.Response.ContentType = "application/json";

                var response = new { message = "An unexpected error occurred." };
                await context.Response.WriteAsJsonAsync(response);

            }
        }

        }
    }

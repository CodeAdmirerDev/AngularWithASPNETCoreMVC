namespace MiddlewareUsageInWebAPI.MiddlewaresInfo
{
    public class RequestLoggingMiddleware
    {
        public readonly RequestDelegate _next;
        public readonly ILogger<RequestLoggingMiddleware> _logger;

        public RequestLoggingMiddleware(RequestDelegate request, ILogger<RequestLoggingMiddleware> logger)
        {

            _next = request;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            _logger.LogInformation("Hanling request : {Method} {Path}", context.Request.Method, context.Request.Path);
            await _next(context);//call the next middleware

            _logger.LogInformation("Finished handling request.");

        }
    }
}

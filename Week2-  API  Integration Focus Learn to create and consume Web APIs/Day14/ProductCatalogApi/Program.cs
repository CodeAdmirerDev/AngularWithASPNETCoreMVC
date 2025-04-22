using Microsoft.EntityFrameworkCore;
using ProductCatalogApi.Data;

namespace ProductCatalogApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddDbContext<ProductContext>(options =>
    options.UseInMemoryDatabase("ProductCatalogDB"));

            builder.Services.AddSwaggerGen();

            // Add CORS policy to allow Angular frontend to access this API  
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend",
                    policy => policy.WithOrigins("http://localhost:4200") // Angular dev server URL  
                                    .AllowAnyHeader()
                                    .AllowAnyMethod());
            });


            var app = builder.Build();

            //Adding swagger UI
            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseCors("AllowFrontend");  //for cross orgin

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using TubeMe.Data;
using TubeMe.WebApi.App.Utilities;
using TubeMe.WebApi.Services;

namespace TubeMe.WebApi.App
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //Database configure
            services.AddDbContext<TubeMeDbContext>(options =>
            {
                options.UseSqlServer(this.configuration.GetConnectionString("SqlServer"));
            });

            //Identity
            services.AddIdentity<TubeMeUser, TubeMeRole>(options =>
            {
                options.User.RequireUniqueEmail = false;

                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 3;
                options.Password.RequiredUniqueChars = 0;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;

                options.SignIn.RequireConfirmedEmail = false;
                options.SignIn.RequireConfirmedAccount = false;
                options.SignIn.RequireConfirmedPhoneNumber = false;
            })
            .AddEntityFrameworkStores<TubeMeDbContext>()
            .AddDefaultTokenProviders();

            services.AddCors();
            services.AddControllers();

            services.Configure<JwtConfiguration>(this.configuration.GetSection("JwtConfiguration"));

            //Jwt configuration
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = true;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["JwtConfiguration:Secret"])),
                        ValidateIssuer = true,
                        ValidIssuer = this.configuration["JwtConfiguration:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = this.configuration["JwtConfiguration:Audience"],
                        ValidateLifetime = true
                    };
                });

            //Services
            services.AddTransient<IUsersService, UsersService>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            {
                options.AllowAnyOrigin();
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseMiddleware<ParseJwtTokenMiddleware>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

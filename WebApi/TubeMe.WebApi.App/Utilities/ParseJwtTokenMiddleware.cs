using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace TubeMe.WebApi.App.Utilities
{
    public class ParseJwtTokenMiddleware
    {
        private readonly RequestDelegate next;
        private readonly IConfiguration configuration;

        public ParseJwtTokenMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            this.next = next;
            this.configuration = configuration;
        }

        public async Task Invoke(HttpContext context)
        {
            string authHeader = context.Request.Headers["Authorization"];

            var token = authHeader?.Replace("Bearer ", string.Empty);
            if (authHeader != null)
            {
                var principal = new JwtSecurityTokenHandler()
                                   .ValidateToken(token,
                                       new TokenValidationParameters
                                       {
                                           ValidateIssuer = true,
                                           ValidIssuer = this.configuration["JwtConfiguration:Issuer"],
                                           ValidateIssuerSigningKey = true,
                                           IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["JwtConfiguration:Secret"])),
                                           ValidAudience = this.configuration["JwtConfiguration:Audience"],
                                           ValidateAudience = true,
                                           ValidateLifetime = true,
                                           ClockSkew = TimeSpan.FromMinutes(1),
                                       },
                                   out var validatedToken);

                context.User = principal;

            }
            await next(context);
        }
    }
}

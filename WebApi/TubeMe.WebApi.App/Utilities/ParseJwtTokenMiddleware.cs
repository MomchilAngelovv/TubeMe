using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace TubeMe.WebApi.App.Utilities
{
    public class ParseJwtTokenMiddleware
    {
        private readonly RequestDelegate next;

        public ParseJwtTokenMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            string authHeader = context.Request.Headers["Authorization"];

            if (authHeader != null)
            {
                //Reading the JWT middle part           
                int startPoint = authHeader.IndexOf(".") + 1;
                int endPoint = authHeader.LastIndexOf(".");

                var tokenString = authHeader
                    .Substring(startPoint, endPoint - startPoint).Split(".");
                var token = tokenString[0].ToString() + "==";

                var credentialString = Encoding.UTF8
                    .GetString(Convert.FromBase64String(token));

                // Splitting the data from Jwt
                var credentials = credentialString.Split(new char[] { ':', ',' });

                // Trim this Username and UserRole.
                var userName = credentials[3].Replace("\"", "");

                // Identity Principal
                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, userName),
                };

                var identity = new ClaimsIdentity(claims, "basic");
                context.User = new ClaimsPrincipal(identity);
            }
            //Pass to the next middleware
            await next(context);
        }
    }
}

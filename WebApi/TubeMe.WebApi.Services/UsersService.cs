using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;
using TubeMe.WebApi.Models.ServiceModels;

namespace TubeMe.WebApi.Services
{
    public class UsersService : IUsersService
    {
        private readonly UserManager<TubeMeUser> userManager;
        private readonly IConfiguration configuration;

        public UsersService(
            UserManager<TubeMeUser> userManager,
            IConfiguration configuration)
        {
            this.userManager = userManager;
            this.configuration = configuration;
        }

        public async Task<UsersLoginServiceModel> LoginAsync(string email, string password)
        {
            var user = await this.userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return null;
            }

            var hashedPassword = this.userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, password);
            if (hashedPassword != PasswordVerificationResult.Success)
            {
                return null;
            }

            var userRole = (await this.userManager.GetRolesAsync(user)).Single();

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = this.configuration["JwtConfiguration:Audience"],
                Issuer = this.configuration["JwtConfiguration:Issuer"],
                Subject = new ClaimsIdentity(new[]
                {
                     new Claim(ClaimTypes.NameIdentifier, user.Id),
                     new Claim(ClaimTypes.Email, user.Email),
                     new Claim(ClaimTypes.Role, userRole),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(this.configuration["JwtConfiguration:Secret"])), SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var secutiryToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(secutiryToken);

            var serviceModel = new UsersLoginServiceModel
            {
                Id = user.Id,
                Email = user.Email,
                AccessToken = token,
            };

            return serviceModel;
        }

        public async Task<UsersRegisterNewUserServiceModel> RegisterNewUserAsync(string email, string password)
        {
            var newUser = new TubeMeUser
            {
                Email = email,
                UserName = email,
            };

            var result = await this.userManager.CreateAsync(newUser, password);

            if (result.Succeeded == false)
            {
                throw new ArgumentException("Unable to create new user with those credentials!");
            }

            await this.userManager.AddToRoleAsync(newUser, "User");

            var serviceModel = new UsersRegisterNewUserServiceModel
            {
                Id = newUser.Id,
                UserName = newUser.UserName,
                Email = newUser.Email,
                CreatedOn = newUser.CreatedOn
            };

            return serviceModel;
        }
    }
}

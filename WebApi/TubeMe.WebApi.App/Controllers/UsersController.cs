﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TubeMe.Data;
using TubeMe.WebApi.App.Utilities;
using TubeMe.WebApi.Models.BindingModels;
using TubeMe.WebApi.Services;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;
        private readonly UserManager<TubeMeUser> userManager;
        private readonly JwtConfiguration jwtConfiguration;

        public UsersController(
            IUsersService usersService,
            IOptions<JwtConfiguration> jwtConfiguration,
            UserManager<TubeMeUser> userManager)
        {
            this.usersService = usersService;
            this.userManager = userManager;
            this.jwtConfiguration = jwtConfiguration.Value;
        }

        [HttpPost("login")]
        public async Task<ActionResult<object>> Login(UsersLoginBindingModel bindingModel)
        {
            var user = await this.userManager.FindByEmailAsync(bindingModel.Email);
            var hashedPassword = this.userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, bindingModel.Password);
            if (user == null || hashedPassword != PasswordVerificationResult.Success)
            {
                return Unauthorized();
            }

            //var symmetricKey = Convert.FromBase64String();
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                     new Claim(ClaimTypes.NameIdentifier, user.Id),
                     new Claim(ClaimTypes.Email, user.Email),
                     new Claim(ClaimTypes.Email, user.Email),
                }),

                Expires = now.AddMinutes(15),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtConfiguration.Secret)), SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            var response = new
            {
                Email = bindingModel.Email,
                UserName = bindingModel.Email,
                AccessToken = token,
            };

            return response;
        }

        [HttpPost("register")]
        public async Task<ActionResult<object>> Register(UsersRegisterBindingModel bindingModel)
        {
            var newUser = await this.usersService.RegisterNewUserAsync(bindingModel.Email, bindingModel.Password);

            var response = new
            {
                newUser.Id,
                newUser.UserName,
                newUser.Email,
                newUser.CreatedOn
            };

            return response;
        }
    }
}

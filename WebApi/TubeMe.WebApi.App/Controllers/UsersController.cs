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
using Microsoft.Extensions.Configuration;
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
        private readonly IConfiguration configuration;
        private readonly IVideosService videosService;

        public UsersController(
            IUsersService usersService,
            IConfiguration configuration,
            IVideosService videosService)
        {
            this.usersService = usersService;
            this.configuration = configuration;
            this.videosService = videosService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<object>> Login(UsersLoginBindingModel bindingModel)
        {
            var loginResult = await this.usersService.LoginAsync(bindingModel.Email, bindingModel.Password);

            if (loginResult == null)
            {
                return this.Unauthorized();
            }

            var response = new
            {
                loginResult.Id,
                loginResult.Email,
                loginResult.AccessToken,
            };

            return response;
        }

        [HttpPost("register")]
        public async Task<ActionResult<object>> Register(UsersRegisterBindingModel bindingModel)
        {
            var newUser = await this.usersService.RegisterNewUserAsync(bindingModel.Email, bindingModel.Password);

            var response = new
            {
                newUser.Email,
                newUser.CreatedOn
            };

            return response;
        }

        [HttpGet("{userId}/videos")]
        public ActionResult<object> GetUserVideos(string userId)
        {
            var response = new
            {
                Data = this.videosService.GetAll(v => v.UserId == userId)
            };

            return response;
        }
    }
}

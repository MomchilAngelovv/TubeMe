using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
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
        private readonly IOptions<JwtConfiguration> jwtConfiguration;

        public UsersController(IUsersService usersService, IOptions<JwtConfiguration> jwtConfiguration)
        {
            this.usersService = usersService;
            this.jwtConfiguration = jwtConfiguration;
        }

        [HttpPost("login")]
        public ActionResult<object> Login(UsersLoginBindingModel bindingModel)
        {
            

            var response = new
            {
                AccessToken = "123123123",
                RefreshToken = "123123123"
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TubeMe.WebApi.Models.BindingModels;
using TubeMe.WebApi.Services;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        public ActionResult Login()
        {
            return null;
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

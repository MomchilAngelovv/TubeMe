using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TubeMe.WebApi.Models.BindingModels;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        public UsersController()
        {

        }
        public ActionResult Login()
        {
            return null;
        }

        [HttpPost("register")]
        public ActionResult<object> Register(UsersRegisterBindingModel bindingModel)
        {
            var response = new
            {
                Name = "Monkata",
                Password = "123456"
            };
            return response;
        }
    }
}

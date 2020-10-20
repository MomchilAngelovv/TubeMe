using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WelcomeController : ControllerBase
    {
        private readonly RoleManager<TubeMeRole> roleManager;
        private readonly UserManager<TubeMeUser> userManager;

        public WelcomeController(RoleManager<TubeMeRole> roleManager, UserManager<TubeMeUser> userManager)
        {
            this.roleManager = roleManager;
            this.userManager = userManager;
        }

        public ActionResult<string> Welcome()
        {
            var a = this;
            return "Welcome";
        }

        [HttpGet("testdata")]
        public ActionResult<object> TestData()
        {
            var user = this.User;
            var array = new List<int>();

            for (int i = 0; i < 3; i++)
            {
                array.Add(new Random().Next(0, 100));
            }

            var response = new
            {
                Numbers = array,
                Name = "asdas",
                Date = DateTime.Now
            };

            return response;
        }

        [HttpGet("seedroles")]
        public ActionResult<object> SeedRole()
        {
            //var adminRole = new TubeMeRole
            //{
            //    Name = "Admin",
            //};

            //var userRole = new TubeMeRole
            //{
            //    Name = "User",
            //};

            //await this.roleManager.CreateAsync(adminRole);
            //await this.roleManager.CreateAsync(userRole);

            //var user = await this.userManager.FindByIdAsync("33f427ed8ab94f0e88fff4c2f5adbf66");
            //await this.userManager.AddToRoleAsync(user, "Admin");
            return this.Ok();
        }
    }
}
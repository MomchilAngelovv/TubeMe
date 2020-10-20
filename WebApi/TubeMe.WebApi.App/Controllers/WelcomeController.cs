using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WelcomeController : ControllerBase
    {
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
    }
}
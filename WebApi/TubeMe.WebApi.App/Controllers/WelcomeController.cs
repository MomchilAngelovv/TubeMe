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
            var a = this;

            var array = new List<int> { 1, 2, 3, 4 };

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
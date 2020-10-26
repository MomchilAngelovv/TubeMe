using System;
using System.Collections.Generic;
using System.Text;

namespace TubeMe.WebApi.Models.ServiceModels
{
    public class UsersLoginServiceModel
    {
        public string UserEmail { get; set; }
        public string AccessToken { get; set; }
    }
}

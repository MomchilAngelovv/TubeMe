using System;
using System.Collections.Generic;
using System.Text;

namespace TubeMe.WebApi.Models.ServiceModels
{
    public class UsersRegisterNewUserServiceModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}

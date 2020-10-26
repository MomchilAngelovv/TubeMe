namespace TubeMe.WebApi.Models.ServiceModels
{
    using System;

    public class UsersRegisterNewUserServiceModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;
using TubeMe.WebApi.Models.ServiceModels;

namespace TubeMe.WebApi.Services
{
    public interface IUsersService
    {
        Task<UsersRegisterNewUserServiceModel> RegisterNewUserAsync(string email, string password);
    }
}

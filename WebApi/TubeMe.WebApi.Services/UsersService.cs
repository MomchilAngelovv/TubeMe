using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;
using TubeMe.WebApi.Models.ServiceModels;

namespace TubeMe.WebApi.Services
{
    public class UsersService : IUsersService
    {
        private readonly TubeMeDbContext db;
        private readonly UserManager<TubeMeUser> userManager;

        public UsersService(TubeMeDbContext db, UserManager<TubeMeUser> userManager)
        {
            this.db = db;
            this.userManager = userManager;
        }

        public async Task<UsersRegisterNewUserServiceModel> RegisterNewUserAsync(string email, string password)
        {
            var newUser = new TubeMeUser
            {
                Email = email,
                UserName = email,
            };
            
            var result = await this.userManager.CreateAsync(newUser, password);

            var serviceModel = new UsersRegisterNewUserServiceModel
            {
                Id = newUser.Id,
                UserName = newUser.UserName,
                Email = newUser.Email,
                CreatedOn = newUser.CreatedOn
            };

            return serviceModel;
        }
    }
}

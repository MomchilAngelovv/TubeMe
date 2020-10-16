using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.Services
{
    public class UsersService : IUsersService
    {
        private readonly TubeMeDbContext db;

        public UsersService(TubeMeDbContext db)
        {
            this.db = db;
        }

        public Task<object> RegisterAsync()
        {
            throw new NotImplementedException();
        }
    }
}

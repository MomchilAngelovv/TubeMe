using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.Services
{
    public interface IUsersService
    {
        Task<object> RegisterAsync();
    }
}

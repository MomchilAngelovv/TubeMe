namespace TubeMe.WebApi.Services
{
    using System.Threading.Tasks;

    using TubeMe.WebApi.Models.ServiceModels;

    public interface IUsersService
    {
        Task<UsersLoginServiceModel> LoginAsync(string email, string password);
        Task<UsersRegisterNewUserServiceModel> RegisterNewUserAsync(string email, string password);
    }
}

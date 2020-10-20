namespace TubeMe.WebApi.Models.BindingModels
{
    using System.ComponentModel.DataAnnotations;

    public class UsersLoginBindingModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(3)]
        public string Password { get; set; }
    }
}

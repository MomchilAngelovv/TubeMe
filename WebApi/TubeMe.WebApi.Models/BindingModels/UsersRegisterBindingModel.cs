namespace TubeMe.WebApi.Models.BindingModels
{
    using System.ComponentModel.DataAnnotations;

    public class UsersRegisterBindingModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MinLength(3)]  
        public string Password { get; set; }
        [Required]
        [Compare(nameof(Password))]
        public string RepeatPassword { get; set; }
    }
}

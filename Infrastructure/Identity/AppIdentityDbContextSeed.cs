using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Admin",
                    Email = "admin@admin.com",
                    UserName = "admin",
                    Role = "superadmin"
                };
                await userManager.CreateAsync(user, "Abc123**");
            };
        }
    }
}
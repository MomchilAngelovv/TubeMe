using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace TubeMe.Data
{
    public class TubeMeDbContext : IdentityDbContext<TubeMeUser, TubeMeRole, string>
    {
        public TubeMeDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Video> Videos { get; set; }
    }
}

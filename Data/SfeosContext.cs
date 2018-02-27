using Microsoft.EntityFrameworkCore;
using Sfeos.Data.Models;

namespace Sfeos.Data
{
	public class SfeosContext : DbContext
    {
		public DbSet<Captain> Captains { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(
				"Data Source=SQL7004.site4now.net;Initial Catalog=DB_A312AF_sfeos;User Id=DB_A312AF_sfeos_admin;Password=5OoKvJHzL0lV;");
		}
	}
}

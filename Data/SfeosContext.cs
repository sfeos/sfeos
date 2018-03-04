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
				"some connection string");
		}
	}
}

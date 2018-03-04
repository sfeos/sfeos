using Microsoft.EntityFrameworkCore;
using Sfeos.Data.Models;

namespace Sfeos.Data
{
	public class SfeosContext : DbContext
    {
		public DbSet<Captain> Captains { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			// git update-index --assume-unchanged [fileName]
			// git update-index --no-assume-unchanged [fileName]
			optionsBuilder.UseSqlServer(
				"ReplaceWithConnectionString");
		}
	}
}

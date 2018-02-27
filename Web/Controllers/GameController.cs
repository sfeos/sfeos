using Microsoft.AspNetCore.Mvc;
using Sfeos.Data;
using Sfeos.Data.Models;
using System;

namespace Web.Controllers
{
    public class GameController : Controller
    {
		public IActionResult Index()
		{
			//var captain = new Captain
			//{
			//	CaptainName = "test",
			//	CaptainTestPk = "test",
			//	CreatedDate = DateTime.UtcNow
			//};
			//using (var context = new SfeosContext())
			//{
			//	context.Captains.Add(captain);
			//	context.SaveChanges();
			//}

			return View();
		}
    }
}
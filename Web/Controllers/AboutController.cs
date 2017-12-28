using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Models;

namespace Web.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

		public IActionResult GamePlay()
		{
			return View();
		}

		public IActionResult Economy()
		{
			return View();
		}

		public IActionResult Lore()
		{
			return View();
		}

		public IActionResult CrowdFounding()
		{
			return View();
		}

		public IActionResult MissionPlan()
		{
			return View();
		}

		public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

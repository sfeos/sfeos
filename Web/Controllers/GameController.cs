using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class GameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
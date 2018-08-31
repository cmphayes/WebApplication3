using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult JS()
        {
            ViewBag.Message = "JS";

            return View();
        }
        public ActionResult GridDemo()
        {
            ViewBag.Message = "GridDemo";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Contact";

            return View();
        }
    }
}
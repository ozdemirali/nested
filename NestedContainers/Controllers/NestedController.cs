﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NestedContainers.Controllers
{
    public class NestedController : Controller
    {
        //
        // GET: /Nested/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu()
        {

            return View();
        }
       
        public ActionResult Form()
        {
            return View();
        }
        public ActionResult List()
        {
            return View();
        }
	}
}
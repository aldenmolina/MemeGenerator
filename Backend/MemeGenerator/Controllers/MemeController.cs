using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MemeGenerator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {
        private static List<string> memes = new List<string>()
        {
            "/Images/Batman.jpg",
            "/Images/Spiderman.jpg",
            "/Images/Ancient-Aliens.jpg",
            "/Images/Bad-Luck-Brian.jpg"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return memes;
        }

        [HttpPost]
        public ActionResult<bool> Post([FromBody] string memes)
        {
            return true;
        }
    }
}
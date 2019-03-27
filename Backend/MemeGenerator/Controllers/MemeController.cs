using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MemeGenerator.Models;
using MemeGenerator.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MemeGenerator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {
        public MemeRepository memesRepo;

        public MemeController(MemeRepository memesRepo)
        {
            this.memesRepo = memesRepo;
        }

        [HttpGet]
        public ActionResult<List<Meme>> Get()
        {
            var all = memesRepo.GetAll();
            return all;
        }
        [HttpPost]
        public ActionResult<bool> Post([FromBody] string memes)
        {
            //memeDb.Add(memes);
            return true;
        }
    }
}
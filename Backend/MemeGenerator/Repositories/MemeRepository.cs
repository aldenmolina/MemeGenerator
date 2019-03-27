using MemeGenerator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeGenerator.Repositories
{
    public class MemeRepository 
    {
        private MemeContext db;

        public MemeRepository(MemeContext db)
        {
            this.db = db;
        }

        public Meme GetById(int id)
        {
            return db.Memes.Single(meme => meme.MemeId == id);
        }

        public void Create(Meme newMeme)
        {
            db.Memes.Add(newMeme);
            db.SaveChanges();
        }

        public List<Meme> GetAll()
        {
            return db.Memes.ToList();
        }
    }
}

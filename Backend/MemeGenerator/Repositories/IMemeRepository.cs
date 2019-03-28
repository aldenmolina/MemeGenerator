using MemeGenerator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeGenerator.Repositories
{
    public interface IMemeRepository
    {
        List<Meme> GetAll();
        Meme GetById(int id);
        void Create(Meme newMeme);
    }
}

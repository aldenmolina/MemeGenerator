using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MemeGenerator.Models
{
    public class Meme
    {
        [Key]
        public int MemeId { get; set; }
        public string imagePath { get; set; }
        public string topText { get; set; }
        public string bottomText { get; set; }
        public int topTextX{ get; set; }
        public int topTextY { get; set; }
        public int bottomTextX { get; set; }
        public int bottomTextY { get; set; }
        public int fontSize { get; set; }

    }
}

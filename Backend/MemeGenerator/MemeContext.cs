using MemeGenerator.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeGenerator
{
    public class MemeContext : DbContext
    {
        public DbSet<Meme> Memes { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=MemeDataBrogrammers;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Meme>().HasData(
                new Meme()
                {
                    MemeId = 1,
                    imagePath = "/Images/Batman.jpg",
                    topText = "Howdy",
                    bottomText = "Peace",
                    topTextX = 0,
                    topTextY = 0,
                    bottomTextX = 0,
                    bottomTextY = 0,
                    fontSize = 38
                },

                new Meme()
                {
                    MemeId = 2,
                    imagePath = "/Images/Spiderman.jpg",
                    topText = "Hola",
                    bottomText = "Ciao",
                    topTextX = 0,
                    topTextY = 0,
                    bottomTextX = 0,
                    bottomTextY = 0,
                    fontSize = 38
                });

            base.OnModelCreating(modelBuilder);
        }
    }
}

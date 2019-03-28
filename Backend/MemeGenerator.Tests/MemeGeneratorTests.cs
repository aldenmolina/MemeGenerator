using MemeGenerator.Controllers;
using MemeGenerator.Models;
using MemeGenerator.Repositories;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace MemeGenerator.Tests
{
    public class MemeGeneratorTests
    {
        public MemeController underTest;
        public IMemeRepository testRepo;

        public MemeGeneratorTests()
        {
            testRepo = Substitute.For<IMemeRepository>();
            underTest = new MemeController(testRepo);
        }

        [Fact]
        public void Can_Create_a_Meme()
        {
            var pass = true;

            var newMeme = new Meme();   //gets added to testRepo
            var wrongMeme = new Meme(); //doesn't get added to testRepo

            //This is based off NSubstitute website, No Assert Needed! (Received, instead)
            testRepo.Create(newMeme);
            if (!pass) //Change var pass to false to see this fail - it works
                testRepo.Received().Create(wrongMeme);

            if (pass)
                testRepo.Received().Create(newMeme);
        }

        [Fact]
        public void Post_Creates_New_Meme()
        {
            var newMeme = new Meme();
            var result = underTest.Post(newMeme);

            Assert.True(result.Value);
        }


        [Fact] 
        public void Get_Returns_A_List_Of_Memes()
        {
            var expectedModel = new List<Meme>();
            testRepo.GetAll().Returns(expectedModel);
            var newMeme = new Meme();
            var actualModelx = underTest.Post(newMeme);
            var actualModel = underTest.Get();
            
            //Assert.Equal()
            Assert.IsType<ActionResult<List<Meme>>>(actualModel);
        }

        
        [Fact] //(Skip = "Post should increase number of memes")
        public void Post_Should_Increase_Memes_Count()
        {
            underTest.Post(new Meme());
            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}

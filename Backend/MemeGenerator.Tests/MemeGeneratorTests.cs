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
        public void Get_Returns_List_of_Memes()
        {
            var expectedmodel = new List<Meme>() { new Meme() };
            testRepo.GetAll().Returns(expectedmodel);

            var result = underTest.Get();

            Assert.Single(result.Value);
        }

    }
}

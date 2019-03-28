using MemeGenerator.Controllers;
using MemeGenerator.Models;
using MemeGenerator.Repositories;
using NSubstitute;
using System;
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
        public void Get_Returns_A_List_Of_Memes()
        {
            var result = underTest.Get();

            Assert.Equal(2, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Meme()
        {
            var newMeme = new Meme();
            var result = underTest.Post(newMeme);

            Assert.True(result.Value);
        }

        [Fact(Skip = "Post should increase number of memes")]
        public void Post_Should_Increase_Memes_Count()
        {
            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}

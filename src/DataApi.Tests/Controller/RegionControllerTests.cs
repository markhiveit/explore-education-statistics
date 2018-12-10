using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataApi.Controllers;
using DataApi.Models;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace DataApi.Tests.Controller
{
    public class RegionControllerTests
    {
        private readonly RegionController _controller;
        
        public RegionControllerTests()
        {
            var reader = new CsvReader("../../../../../");
            _controller = new RegionController(reader);
        }
        
        [Fact]
        public void List_Regions()
        {
            var result =  _controller.List("schpupnum", null, null, null);
            
            var items = Assert.IsType<List<GeographicModel>>(result.Value);
            Assert.True(items.Count() > 1);
        }
        
        [Fact]
        public void Get_Region()
        {
            var result = _controller.Get("schpupnum", "E12000001", null, null, null);
            
            var item = Assert.IsType<GeographicModel>(result.Value);
            Assert.Equal("England", item.Country.Name);
            Assert.Equal("North East", item.Region.Name);
        }
        
    }
}
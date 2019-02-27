//using System.Collections.Generic;
//using System.Linq;
//using GovUk.Education.ExploreEducationStatistics.Data.Api.Controllers;
//using GovUk.Education.ExploreEducationStatistics.Data.Api.Models;
//using GovUk.Education.ExploreEducationStatistics.Data.Api.Services;
//using GovUk.Education.ExploreEducationStatistics.Data.Api.ViewModels;
//using Microsoft.Extensions.Configuration;
//using Xunit;
//
//namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Tests.Controller
//{
//    public class CountryControllerTests
//    {
//        private CountryController _controller;
//        
//        public CountryControllerTests()
//        {
//            var reader = new CsvReader("../../../../../src/GovUk.Education.ExploreEducationStatistics.Data.Api");
//
//            var database = new MDatabase<TidyDataGeographic>();
//            var dataService = new DataService(database);
//            _controller = new CountryController(reader, dataService);
//        }
//        
//        [Fact]
//        public void List_Countries()
//        {
//            var result =  _controller.List("schpupnum", null, null, new List<string>());
//            
//            var items = Assert.IsType<List<GeographicModel>>(result.Value);
//            Assert.True(items.Count() > 1);
//        }
//        
//        [Fact]
//        public void Get_Country()
//        {
//            var result = _controller.Get("schpupnum","E92000001", null, null, new List<string>());
//            
//            var item = Assert.IsType<GeographicModel>(result.Value);
//            Assert.Equal("England", item.Country.Name);
//        }  
//    }
//}
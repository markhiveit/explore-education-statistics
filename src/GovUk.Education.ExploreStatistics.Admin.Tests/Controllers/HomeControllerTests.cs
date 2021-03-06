﻿using GovUk.Education.ExploreStatistics.Admin.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GovUk.Education.ExploreStatistics.Admin.Tests.Controllers
{
    public class HomeControllerTests
    {
        [Fact]
        public async Task Index_ReturnsAViewResult_ForTheHomePage()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = await controller.Index();

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
        }

        [Fact]
        public async Task Privacy_ReturnsAViewResult_ForThePrivacyPage()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = await controller.Privacy();

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
        }
    }
}
using GovUk.Education.ExploreEducationStatistics.Data.Api.Models.Debug;
using GovUk.Education.ExploreEducationStatistics.Data.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DebugController : ControllerBase
    {
        private readonly IGeographicDataService _geographicDataService;
        private readonly INationalCharacteristicDataService _nationalCharacteristicDataService;
        private readonly ILaCharacteristicDataService _laCharacteristicDataService;

        public DebugController(IGeographicDataService geographicDataService,
            INationalCharacteristicDataService nationalCharacteristicDataService,
            ILaCharacteristicDataService laCharacteristicDataService)
        {
            _geographicDataService = geographicDataService;
            _nationalCharacteristicDataService = nationalCharacteristicDataService;
            _laCharacteristicDataService = laCharacteristicDataService;
        }

        [HttpGet("report")]
        public ActionResult<DebugReport> GetReport()
        {
            return new DebugReport
            {
                geographicCount = _geographicDataService.Count(),
                nationalCharacteristicCount = _nationalCharacteristicDataService.Count(),
                laCharacteristicCount = _laCharacteristicDataService.Count()
            };
        }
    }
}
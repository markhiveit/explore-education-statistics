using GovUk.Education.ExploreEducationStatistics.Data.Api.Data;
using GovUk.Education.ExploreEducationStatistics.Data.Api.Models;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Services
{
    public class GeographicDataService : AbstractDataService<GeographicData>
    {   
        public GeographicDataService(ApplicationDbContext context) : base(context)
        {
        }
    }
}
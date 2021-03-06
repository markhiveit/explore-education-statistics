using System;

namespace GovUk.Education.ExploreEducationStatistics.Content.Api.Models
{
    public class Link
    {
        public Guid Id { get; set; }

        public string Description { get; set; }

        public string Url { get; set; }

        public Guid PublicationId { get; set; }
    }
}
using System;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Models.Meta
{
    public class AttributeMeta : IMeta
    {
        public long Id { get; set; }
        public Guid PublicationId { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public Unit Unit { get; set; } 
        public string Group { get; set; }
        public bool KeyIndicator { get; set; }
    }
}
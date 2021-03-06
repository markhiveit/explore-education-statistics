using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GovUk.Education.ExploreEducationStatistics.Content.Api.Models
{
    public class Publication
    {
        [Key] [Required] public Guid Id { get; set; }

        public string Slug { get; set; }

        [Required] public string Title { get; set; }

        public string Description { get; set; }

        public string DataSource { get; set; }

        public string Summary { get; set; }

        public DateTime? NextUpdate { get; set; }

        public List<Release> Releases { get; set; }

        public List<Link> LegacyReleases { get; set; }

        public Guid TopicId { get; set; }

        public Topic Topic { get; set; }
    }
}
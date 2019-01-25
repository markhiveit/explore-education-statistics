using System;

namespace GovUk.Education.ExploreEducationStatistics.Admin.Models
{
    public class ReleaseMessage
    {
        public ReleaseMessage()
        {
        }

        public ReleaseMessage(Guid publication, Guid release, DateTime uploadedOn)
        {
            Publication = publication;
            Release = release;
            UploadedOn = uploadedOn;
        }

        public Guid Publication { get; set; }
        public Guid Release { get; set; }
        public DateTime UploadedOn { get; set; }
    }
}
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Models
{
    [BsonKnownTypes(typeof(TidyDataGeographic), typeof(TidyDataLaCharacteristic), typeof(TidyDataNationalCharacteristic))]
    public abstract class TidyData
    {
        protected TidyData()
        {
        }

        protected TidyData(int year, string level, Country country, string schoolType,
            Dictionary<string, string> attributes)
        {
            Year = year;
            Level = level;
            Country = country;
            SchoolType = schoolType;
            Attributes = attributes;
        }
        
        public ObjectId Id { get; set; }
        [BsonElement("year")] public int Year { get; set; }
        [BsonElement("level")] public string Level { get; set; }
        public Country Country { get; set; }
        [BsonElement("school_type")] public string SchoolType { get; set; }
        public Dictionary<string, string> Attributes { get; set; }
    }
}
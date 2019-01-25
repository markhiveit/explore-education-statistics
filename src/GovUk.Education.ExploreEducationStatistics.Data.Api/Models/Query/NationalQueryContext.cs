using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Models.Query
{
    public class NationalQueryContext : IQueryContext<CharacteristicDataNational>
    {
        public Guid PublicationId { get; set; }
        public ICollection<SchoolType> SchoolTypes { get; set; }
        public ICollection<int> Years { get; set; }
        public ICollection<string> Attributes { get; set; }
        public ICollection<string> Characteristics { get; set; }

        public Expression<Func<CharacteristicDataNational, bool>> FindExpression()
        {
            return x =>
                x.Level == Level.National.ToString() &&
                (SchoolTypes.Count == 0 ||
                 SchoolTypes.Select(Query.SchoolTypes.EnumToString).Contains(x.SchoolType)) &&
                (Years.Count == 0 || Years.Contains(x.Year)) &&
                (Characteristics.Count == 0 || Characteristics.Contains(x.Characteristic.Name));
        }
    }
}
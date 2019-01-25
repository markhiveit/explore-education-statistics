using System.Collections.Generic;
using AutoMapper;
using GovUk.Education.ExploreEducationStatistics.Data.Api.Models;
using GovUk.Education.ExploreEducationStatistics.Data.Api.Models.TableBuilder;

namespace GovUk.Education.ExploreEducationStatistics.Data.Api.Services.TableBuilder
{
    public class CharacteristicResultBuilder : IResultBuilder<ICharacteristicData, TableBuilderCharacteristicData>
    {
        private readonly IMapper _mapper;

        public CharacteristicResultBuilder(IMapper mapper)
        {
            _mapper = mapper;
        }

        public TableBuilderCharacteristicData BuildResult(ICharacteristicData data, ICollection<string> attributeFilter)
        {
            return new TableBuilderCharacteristicData
            {
                Year = data.Year,
                SchoolType = data.SchoolType,
                Characteristic = _mapper.Map<CharacteristicViewModel>(data.Characteristic),
                Attributes = attributeFilter.Count > 0
                    ? QueryUtil.FilterAttributes(data.Attributes, attributeFilter)
                    : data.Attributes
            };
        }
    }
}
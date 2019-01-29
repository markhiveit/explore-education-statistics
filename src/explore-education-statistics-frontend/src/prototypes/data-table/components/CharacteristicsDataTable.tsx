import groupBy from 'lodash/groupBy';
import max from 'lodash/max';
import min from 'lodash/min';
import React, { Component } from 'react';
import {
  DataTableResult,
  SchoolType,
} from '../../../services/dataTableService';
import { ungroupedPupilAbsenceAttributes } from '../test-data/pupilAbsenceAttributes';
import { ungroupedPupilAbsenceCharacteristics } from '../test-data/pupilAbsenceCharacteristics';
import GroupedDataTable, { GroupedDataSet } from './GroupedDataTable';

const schoolKeys: {
  [key: string]: string;
} = {
  [SchoolType.Dummy]: 'Dummy',
  [SchoolType.State_Funded_Primary]: 'State funded primary schools',
  [SchoolType.State_Funded_Secondary]: 'State funded secondary schools',
  [SchoolType.Special]: 'Special schools',
  [SchoolType.Total]: 'Total',
};

interface Props {
  attributes: string[];
  characteristics: string[];
  results: DataTableResult[];
  schoolTypes: string[];
  years: number[];
}

class CharacteristicsDataTable extends Component<Props> {
  private parseYear(year?: number): string {
    if (!year) {
      return '';
    }

    const yearString = year.toString();

    if (yearString.length === 6) {
      const parsedYear = yearString.substring(0, 4);
      const nextYear = Number(parsedYear) + 1;

      return `${parsedYear}/${nextYear}`;
    }

    return `${year}/${year + 1}`;
  }

  public render() {
    const {
      attributes,
      characteristics,
      results,
      schoolTypes,
      years,
    } = this.props;
    const firstYear = this.parseYear(min(years));
    const lastYear = this.parseYear(max(years));

    const dataBySchool = groupBy(results, 'schoolType');

    const schoolGroups = schoolTypes.map(schoolType => {
      const dataByCharacteristic = groupBy(
        dataBySchool[schoolType],
        'characteristic.name',
      );

      const groupedData: GroupedDataSet[] = characteristics.map(
        characteristic => {
          const dataByYear = groupBy(
            dataByCharacteristic[characteristic],
            'year',
          );

          return {
            name: ungroupedPupilAbsenceCharacteristics[characteristic],
            rows: attributes.map(attribute => ({
              columns: years.map(year => {
                if (dataByYear[year].length > 0) {
                  return dataByYear[year][0].attributes[attribute];
                }

                return '';
              }),
              name: ungroupedPupilAbsenceAttributes[attribute],
            })),
          };
        },
      );
      return {
        data: groupedData,
        name: schoolKeys[schoolType],
      };
    });

    return (
      <div>
        {firstYear === lastYear && (
          <h3>{`Comparing statistics for ${firstYear}`}</h3>
        )}

        {firstYear !== lastYear && (
          <h3>{`Comparing statistics between ${firstYear} and ${lastYear}`}</h3>
        )}

        {schoolGroups.map(schoolGroup => {
          return (
            <GroupedDataTable
              key={schoolGroup.name}
              caption={schoolGroup.name}
              header={years.map(this.parseYear)}
              groups={schoolGroup.data}
            />
          );
        })}
      </div>
    );
  }
}

export default CharacteristicsDataTable;
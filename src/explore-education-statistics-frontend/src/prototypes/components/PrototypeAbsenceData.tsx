import classNames from 'classnames';
import { FeatureCollection } from 'geojson';
import React, { Component } from 'react';
import Details from '../../components/Details';
import PrototypeMap from './PrototypeMap';
import { Boundaries } from './PrototypeMapBoundaries';

import styles from './PrototypeAbsenceData.module.scss';

interface PrototypeAbsenceDataState {
  absenceData: any[];
  selectedAuthority: string;
}

interface PrototypeAbsenceDataProps {
  map: (map: PrototypeMap) => void;
}

class PrototypeAbsenceData extends Component<
  PrototypeAbsenceDataProps,
  PrototypeAbsenceDataState
> {
  private map: (map: PrototypeMap) => void;
  private data: FeatureCollection;
  private legend: any;

  constructor(props: PrototypeAbsenceDataProps) {
    super(props);

    this.map = props.map;

    this.state = {
      absenceData: [],
      selectedAuthority: '',
    };

    this.data = this.generateLegendData(
      this.preprocessBoundaryData(Boundaries),
    );
  }

  private preprocessBoundaryData(data: FeatureCollection) {
    const dataParsed = {
      ...data,
      features: data.features.map(g => {
        if (g.properties) {
          g.properties.selectable = g.properties.lad17cd[0] === 'E';
        }

        return g;
      }),
    } as FeatureCollection;

    dataParsed.features.sort((a, b) => {
      const c = [
        a.properties ? a.properties.lad17nm : '',
        b.properties ? b.properties.lad17nm : '',
      ];

      return c[0] < c[1] ? -1 : c[1] > c[0] ? 1 : 0;
    });

    return dataParsed;
  }

  private generateLegendData(data: FeatureCollection) {
    const minOverall = +data.features.reduce(
      (min, next) =>
        next.properties && next.properties.absence.overall < min
          ? next.properties.absence.overall
          : min,
      100,
    );
    const maxOverall = +data.features.reduce(
      (max, next) =>
        next.properties && next.properties.absence.overall > max
          ? next.properties.absence.overall
          : max,
      0,
    );

    const range = (maxOverall - minOverall) / 4;

    this.legend = [4, 3, 2, 1, 0].map(value => {
      return {
        idx: value,
        max: (minOverall + (value + 1) / range - 0.1).toFixed(1),
        min: (minOverall + value / range).toFixed(1),
      };
    });

    return {
      ...data,
      features: data.features.map(feature => {
        if (feature.properties) {
          if (feature.properties.selectable) {
            const rate = Math.floor(
              (feature.properties.absence.overall - minOverall) / range,
            );
            feature.properties.className = styles[`rate${rate}`];
          } else {
            feature.properties.className = styles.unselectable;
          }
        }

        return feature;
      }),
    };
  }

  public OnFeatureSelect = (properties: any) => {
    if (properties) {
      const currentSelection = this.state.absenceData || [];

      currentSelection.push({
        region: properties.lad17nm,
        ...properties.absence,
      });

      this.setState({
        absenceData: currentSelection,
      });
    } else {
      /*
      this.setState({
        absenceData: undefined,
        selectedAuthority: '',
      });
      */
    }
  };

  public selectAuthority = (e: any) => {
    const selectedAuthority = e.currentTarget.value;

    this.setState({
      selectedAuthority,
    });
  };

  public render() {
    return (
      <div className="govuk-grid-row">
        <div
          className={classNames(
            'govuk-grid-column-one-third',
            styles.adjustMobile,
          )}
          aria-live="assertive"
        >
          <form>
            <div className="govuk-form-group govuk-!-margin-bottom-6">
              <label
                className="govuk-label govuk-label--s"
                htmlFor="selectedAuthority"
              >
                Select a local authority
              </label>
              <select
                id="selectedAuthority"
                value={this.state.selectedAuthority}
                onChange={this.selectAuthority}
                className="govuk-select"
              >
                <option>Select a local authority</option>
                {this.data.features
                  .filter(
                    feature =>
                      feature.properties && feature.properties.selectable,
                  )
                  .map((feature, idx) => (
                    <option
                      value={
                        feature.properties ? feature.properties.lad17nm : ''
                      }
                      key={feature.properties ? feature.properties.lad17cd : ''}
                    >
                      {feature.properties ? feature.properties.lad17nm : ''}
                    </option>
                  ))}
              </select>
            </div>
          </form>

          <div className={classNames(styles.legend, styles.hideMobile)}>
            <h3 className="govuk-heading-s">Key to overall absence rate</h3>
            <dl className="govuk-list">
              {this.legend.map(({ min, max, idx }: any) => (
                <dd key={idx}>
                  <span className={styles[`rate${idx}`]}>&nbsp;</span> {min}% to{' '}
                  {max}%{' '}
                </dd>
              ))}
            </dl>
          </div>
        </div>
        <div
          className={classNames(
            'govuk-grid-column-two-thirds',
            styles.hideMobile,
          )}
        >
          <PrototypeMap
            Boundaries={Boundaries}
            OnFeatureSelect={this.OnFeatureSelect}
            map={m => this.map(m)}
            selectedAuthority={this.state.selectedAuthority}
          />
        </div>

        <table className="govuk-grid-column-full">
          <thead>
            <tr>
              <th>region</th>
              <th>Overall Absence</th>
              <th>Authorised Absence</th>
              <th>Unauthorised Absence</th>
            </tr>
          </thead>
          <tbody>
            {this.state.absenceData.map(data => (
              <tr key={data.region}>
                <td>{data.region}</td>
                <td>{data.overall}</td>
                <td>{data.authorised}</td>
                <td>{data.unauthorised}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrototypeAbsenceData;

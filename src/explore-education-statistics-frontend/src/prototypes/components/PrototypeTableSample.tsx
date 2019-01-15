import React from 'react';

const PrototypeTableSample = () => {
  return (
    <>
      <h2 className="govuk-heading-m">Overall absence data</h2>

      <table className="govuk-table">
        <thead className="govuk-table__head">
          <tr className="tableizer-firstrow">
            <th className="govuk-table__header" />
            <th className="govuk-table__header">2012/13</th>
            <th className="govuk-table__header">2013/14</th>
            <th className="govuk-table__header">2014/15</th>
            <th className="govuk-table__header">2015/16</th>
            <th className="govuk-table__header">2016/17</th>
          </tr>
        </thead>

        <tbody className="govuk-table__body">
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Number of schools
            </th>
            <td className="govuk-table__cell">21,130</td>
            <td className="govuk-table__cell">21,151</td>
            <td className="govuk-table__cell">21,178</td>
            <td className="govuk-table__cell">21,163</td>
            <td className="govuk-table__cell"> 21,247 </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Number of pupil enrolments
            </th>
            <td className="govuk-table__cell">6,477,725</td>
            <td className="govuk-table__cell">6,554,005</td>
            <td className="govuk-table__cell">6,642,755</td>
            <td className="govuk-table__cell">6,737,190</td>
            <td className="govuk-table__cell"> 6,899,770 </td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header">
              Percentage of sessions missed due to:
            </th>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Overall absence
            </th>
            <td className="govuk-table__cell">5.3</td>
            <td className="govuk-table__cell">4.5</td>
            <td className="govuk-table__cell">4.6</td>
            <td className="govuk-table__cell">4.6</td>
            <td className="govuk-table__cell">4.7</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Authorised absence
            </th>
            <td className="govuk-table__cell">4.2</td>
            <td className="govuk-table__cell">3.5</td>
            <td className="govuk-table__cell">3.5</td>
            <td className="govuk-table__cell">3.4</td>
            <td className="govuk-table__cell">3.4</td>
          </tr>
          <tr className="govuk-table__row">
            <th className="govuk-table__header" scope="row">
              Unauthorised absence
            </th>
            <td className="govuk-table__cell">1.1</td>
            <td className="govuk-table__cell">1.1</td>
            <td className="govuk-table__cell">1.1</td>
            <td className="govuk-table__cell">1.1</td>
            <td className="govuk-table__cell">1.3</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PrototypeTableSample;
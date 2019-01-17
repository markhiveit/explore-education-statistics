import React from 'react';

interface Props {
  period: string;
  heading: string;
  percent: string;
  fromText: string;
}

const PrototypeDataTile = ({ period, heading, percent, fromText }: Props) => (
  <div className="dfe-dash-tiles__tile">
    <h3 className="govuk-heading-m">
      {heading}
      <span className="govuk-caption-m date-range govuk-tag">{period}</span>
    </h3>
    <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
      {percent}
    </span>
    <p className="govuk-body">
      <strong className="increase">
        +0.4
        <abbr aria-label="Percentage points" title="Percentage points">
          ppt
        </abbr>
      </strong>
      more than 2015/16
      <br />
      <a className="referenceLink" href="/local-authorities/sheffield">
        From: {fromText}
      </a>
    </p>
    <details className="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          What does this mean?
        </span>
      </summary>
      <div className="govuk-details__text">
        Permanent exclusion rate is the adipisicing elit. Dolorum hic nobis
        voluptas quidem fugiat enim ipsa reprehenderit nulla.
      </div>
    </details>
  </div>
);

export default PrototypeDataTile;
import React from 'react';
// import CollapsibleSection from '../components/CollapsibleSection';
// import Details from '../components/Details';
// import PrototypeDataSample from './components/PrototypeDataSample';
import Link from '../components/Link';
import PrototypePage from './components/PrototypePage';

const StartPage = () => {
  return (
    <PrototypePage breadcrumbs={[]}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">Explore education statistics</h1>
          <p className="govuk-body">
            Use this service to search for and find out about Department for
            Education (DfE) official statistics for England on:
          </p>
          <ul className="govuk-bulllet-list">
            <li>children and young people</li>
            <li>further and higher education</li>
            <li>schools</li>
          </ul>
          <p className="govuk-body">
            To find out more about these statistics the service will let you:
          </p>
          <ul className="govuk-bulllet-list">
            <li>view annual statistical headlines and trends</li>
            <li>view statistical charts and tables</li>
            <li>compare and contrast statistics</li>
            <li>download data files for your own analysis</li>
          </ul>
          <div className="govuk-inset-text">
            <Link to="https://www.education-ni.gov.uk/topics/statistics-and-research/statistics">
              Northern Ireland
            </Link>
            ,{' '}
            <Link to="https://www2.gov.scot/Topics/Statistics/Browse/School-Education">
              Scotland
            </Link>
            , and{' '}
            <Link to="https://gov.wales/statistics-and-research/?topic=Education+and+skills&lang=en">
              Wales
            </Link>{' '}
            have their own websites to help you explore education statistics.
          </div>
          <Link
            to="/prototypes/home"
            className="govuk-button govuk-button--start"
          >
            Start now
          </Link>
          <h2 className="govuk-heading-m govuk-!-margin-top-9">
            Before you start
          </h2>
          <h3 className="govuk-heading-m app-related-items govuk-!-margin-top-9">
            Explore the topic
          </h3>
          <ul className="govuk-list">
            <li>
              <Link to="https://www.gov.uk/topic/schools-colleges-childrens-services/data-collection-statistical-returns">
                DfE statistical collections
              </Link>
            </li>
            <li>
              <Link to="https://www.gov.uk/government/statistics?keywords=&amp;taxons%5B%5D=all&amp;departments%5B%5D=department-for-education&amp;from_date=&amp;to_date=">
                DfE statistics: release calendar
              </Link>
            </li>
            <li>
              <Link to="https://www.gov.uk/guidance/how-to-access-department-for-education-dfe-data-extracts">
                How to access DfE data extracts
              </Link>
            </li>
          </ul>
        </div>
        <div className="govuk-grid-column-one-third">
          <aside className="app-related-items">
            <h2 className="govuk-heading-m" id="subsection-title">
              Related content
            </h2>
            <ul className="govuk-list">
              <li>
                <Link to="https://www.gov.uk/government/organisations/department-for-education/about/statistics#statistical-collections">
                  DfE statistical collections
                </Link>
              </li>
              <li>
                <Link to="https://www.gov.uk/government/publications?departments%5B%5D=department-for-education&amp;publication_type=transparency-data">
                  DfE Transparency data
                </Link>
              </li>
              <li>
                <Link to="https://www.gov.uk/government/organisations/department-for-education/about/statistics">
                  Statistics at DfE
                </Link>
              </li>
              <li>
                <Link to="https://www.gov.uk/government/publications/standards-for-official-statistics-published-by-the-department-for-education">
                  Standards for official statistics published by DfE
                </Link>
              </li>
              <li>
                <Link to="https://www.statisticsauthority.gov.uk/code-of-practice/">
                  UK Statistics Authority: Code of Practice for Statistics
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </PrototypePage>
  );
};

export default StartPage;
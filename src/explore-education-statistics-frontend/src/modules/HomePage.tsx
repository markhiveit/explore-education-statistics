import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Link from '../components/Link';

class HomePage extends Component {
  public render() {
    return (
      <>
        <Helmet>
          <title>Explore Education Statistics - GOV.UK</title>
        </Helmet>
        <h1 className="govuk-heading-xl">
          Choose how to explore our statistics and data
        </h1>
        <p className="govuk-body-l">
          Select an option to find the national and regional level statistical
          and data you’re looking for.
        </p>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-three-quarters">
            <h2 className="govuk-heading-m govuk-!-margin-bottom-0">
              <Link to="/find-statistics-and-data/">
                Find statistics and data
              </Link>
            </h2>
            <p className="govuk-caption-m govuk-!-margin-top-2">
              Browse to find statistical summaries and explanations to help you
              understand and analyse our range of national and regional
              statistics and data.
            </p>
            <h2 className="govuk-heading-m govuk-!-margin-bottom-0">
              <Link to="/prototypes/data-table-v3">
                Create your own charts and tables online
              </Link>
            </h2>
            <p className="govuk-caption-m govuk-!-margin-top-2">
              Use our tool to build charts and tables using our range of
              national and regional statistics and data.
            </p>
            <h2 className="govuk-heading-m govuk-!-margin-bottom-0">
              <Link to="/find-statistics-and-data/">Download data files</Link>
            </h2>
            <p className="govuk-caption-m govuk-!-margin-top-2">
              Browse to find and download the data files behind our range of
              national and regional statistics for your own analysis.
            </p>
          </div>
        </div>

        <hr />
        <h3 className="govuk-heading-m govuk-!-margin-top-9">
          Related services
        </h3>
        <p className="govuk-body">
          Use these services to find and compare and contrast performance and
          other information about schools and colleges near you:
        </p>
        <div className="govuk-grid-row govuk-!-margin-bottom-9">
          <div className="govuk-grid-column-one-half">
            <h4 className="govuk-heading-s govuk-!-margin-bottom-0">
              <a
                className="govuk-link"
                href="https://www.gov.uk/school-performance-tables"
              >
                Find and compare schools in England
              </a>
            </h4>
            <p className="govuk-caption-m govuk-!-margin-top-1">
              Search for and check the performance of primary, secondary and
              special needs schools and colleges
            </p>
          </div>
          <div className="govuk-grid-column-one-half">
            <h4 className="govuk-heading-s govuk-!-margin-bottom-0">
              <a
                className="govuk-link"
                href="https://www.get-information-schools.service.gov.uk/"
              >
                Get information about schools
              </a>
            </h4>
            <p className="govuk-caption-m govuk-!-margin-top-1">
              Search this register to find and download information about of
              schools and colleges in England including details educational
              organisations and governors
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;

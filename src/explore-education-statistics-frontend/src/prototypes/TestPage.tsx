import React from 'react';

const TestPage = () => {
  return (
    <>
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="https://www.gov.uk">
              Home
            </a>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="#">
              Education, training and skills
            </a>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="#">
              Pupil wellbeing, behaviour and attendance
            </a>
          </li>
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="#">
              School attendance and absence
            </a>
          </li>
        </ol>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <strong className="govuk-tag"> This is the latest data </strong>
          <h1 className="govuk-heading-l">
            Pupil absence data and statistics for schools in England
          </h1>
          <p>
            This service helps parents, specialists and the public find
            different kinds of pupil absence facts and figures for state-funded
            schools.
          </p>

          <p>
            It allows you to find out about, view and download overall,
            authorised and unauthorised absence data and statistics going back
            to 2006/07 on the following levels:
          </p>

          <details className="govuk-details">
            <summary className="govuk-details__summary">
              <span className="govuk-details__summary-text">
                {' '}
                Further details{' '}
              </span>
            </summary>
            <div className="govuk-details__text">
              <p>
                To help you analyse and understand the data and statistics under
                the above each one is split into the following tabs:
              </p>

              <ul className="govuk-list govuk-list--bullet">
                <li>
                  Summary - includes the latest headline statistical insights
                  and breakdowns
                </li>
                <li>
                  Further details - includes more detailed explanations, facts
                  and figures
                </li>
                <li>
                  Data and downloads - includes relevant data tables and
                  download links to data files
                </li>
              </ul>

              <div className="govuk-inset-text">
                <a href="">
                  Find out more about our pupil absence data and statistics
                  methodology and terminology
                </a>
              </div>
            </div>
          </details>
        </div>
        <div className="govuk-grid-column-one-third">
          <aside className="app-related-items">
            <h2 className="govuk-heading-m" id="subsection-title">
              About this data
            </h2>

            <h2 className="govuk-heading-s">
              <span className="govuk-caption-m">For school year: </span>
              2016-2017
              <span className="govuk-caption-m govuk-caption-inline">
                (latest data)
              </span>
              <span className="govuk-caption-m">
                <a href="#">See previous 10 years</a>
              </span>
            </h2>

            <h2 className="govuk-heading-s">
              <span className="govuk-caption-m">Published: </span>22 March 2018
            </h2>
            <h2 className="govuk-heading-s">
              <span className="govuk-caption-m">Last updated: </span>20 June
              2018
              <span className="govuk-caption-m">
                <a href="#">See all 4 updates</a>
              </span>
            </h2>
            <h2 className="govuk-heading-s">
              <span className="govuk-caption-m">Next update: </span>22 March
              2019
              <span className="govuk-caption-m">
                <a href="#">Notify me</a>
              </span>
            </h2>
          </aside>
        </div>
      </div>

      <div className="collapsible">
        <h2 className="open govuk-heading-m">
          Headline pupil absence facts and figures for 2016/17
        </h2>
        <div className="collapsible-content">
          <ul className="govuk-list govuk-list--bullet">
            <li>Pupils missed on average 8.2 school days</li>
            <li>Overall and unauthorised absence rates up on previous year</li>
            <li>
              Unauthorised rise due to higher rates of unauthorised holidays
            </li>
            <li>10% of pupils persistently absent during 2016/17</li>
          </ul>
          <h3 className="govuk-heading-s">
            Chart showing the change in different types of absence over time
          </h3>
          <div
            id="da7c10ac-eab3-4a0d-b7ee-2dc75bf614ba"
            className="plotly-graph-div"
          />
          <div className="dfe-dash-tiles dfe-dash-tiles--simple">
            <div className="dfe-dash-tiles__tile">
              <h2 className="govuk-heading-m">
                Overall absence
                <span className="govuk-caption-m date-range govuk-tag">
                  2016/17
                </span>
              </h2>
              <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
                4.7%
              </span>
              <p className="govuk-body">
                <strong className="increase">
                  +0.4
                  <abbr
                    aria-label="Percentage points"
                    title="Percentage points"
                  >
                    ppt
                  </abbr>
                </strong>
                more than 2015/16
              </p>
              <details className="govuk-details">
                <summary className="govuk-details__summary">
                  <span className="govuk-details__summary-text">
                    What does this mean?
                  </span>
                </summary>
                <div className="govuk-details__text">
                  Overall absence is the adipisicing elit. Dolorum hic nobis
                  voluptas quidem fugiat enim ipsa reprehenderit nulla.
                </div>
              </details>
            </div>

            <div className="dfe-dash-tiles__tile">
              <h2 className="govuk-heading-m">
                Authorised absence
                <span className="govuk-caption-m date-range govuk-tag">
                  2016/17
                </span>
              </h2>
              <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
                3.4%
              </span>
              <p className="govuk-body">
                <strong className="level">
                  0
                  <abbr
                    aria-label="Percentage points"
                    title="Percentage points"
                  >
                    ppt
                  </abbr>
                </strong>
                the same as 2015/16
              </p>
              <details className="govuk-details">
                <summary className="govuk-details__summary">
                  <span className="govuk-details__summary-text">
                    What does authorised absence mean?
                  </span>
                </summary>
                <div className="govuk-details__text">
                  Overall absence is the adipisicing elit. Dolorum hic nobis
                  voluptas quidem fugiat enim ipsa reprehenderit nulla.
                </div>
              </details>
            </div>

            <div className="dfe-dash-tiles__tile">
              <h2 className="govuk-heading-m">
                Unauthorised absence
                <span className="govuk-caption-m date-range govuk-tag">
                  2016/17
                </span>
              </h2>
              <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
                1.3%
              </span>
              <p className="govuk-body">
                <strong className="decrease">
                  -0.4
                  <abbr
                    aria-label="Percentage points"
                    title="Percentage points"
                  >
                    ppt
                  </abbr>
                </strong>
                more than 2015/16
              </p>
              <details className="govuk-details">
                <summary className="govuk-details__summary">
                  <span className="govuk-details__summary-text">
                    What does unauthorised absence mean?
                  </span>
                </summary>
                <div className="govuk-details__text">
                  Overall absence is the adipisicing elit. Dolorum hic nobis
                  voluptas quidem fugiat enim ipsa reprehenderit nulla.
                </div>
              </details>
            </div>

            <div className="dfe-dash-tiles__tile">
              <h2 className="govuk-heading-m">
                Persistent absence
                <span className="govuk-caption-m date-range govuk-tag">
                  2016/17
                </span>
              </h2>
              <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
                10.8%
              </span>
              <p className="govuk-body">
                <strong className="increase">
                  +0.3
                  <abbr
                    aria-label="Percentage points"
                    title="Percentage points"
                  >
                    ppt
                  </abbr>
                </strong>
                less than 2015/16
              </p>
              <details className="govuk-details">
                <summary className="govuk-details__summary">
                  <span className="govuk-details__summary-text">
                    What does persistent absence mean?
                  </span>
                </summary>
                <div className="govuk-details__text">
                  Overall absence is the adipisicing elit. Dolorum hic nobis
                  voluptas quidem fugiat enim ipsa reprehenderit nulla.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">About this release</h2>
        <div className="collapsible-content">
          <p className="govuk-body">
            This statistical first release (SFR) reports on absence of pupils of
            compulsory school age in state-funded primary, secondary and special
            schools during the 2016/17 academic year. Information on absence in
            pupil referral units, and for pupils aged four, is also included.
            The Department uses two key measures to monitor pupil absence –
            overall and persistent absence. Absence by reason and pupils
            characteristics is also included in this release. Figures are
            available at national, regional, local authority and school level.
            Figures held in this release are used for policy development as key
            indicators in behaviour and school attendance policy. Schools and
            local authorities also use the statistics to compare their local
            absence rates to regional and national averages for different pupil
            groups.
          </p>
        </div>
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">Absence rates</h2>
        <div className="collapsible-content">
          <details className="govuk-details">
            <summary className="govuk-details__summary">
              <span className="govuk-details__summary-text">
                Overall absence rate definition
              </span>
            </summary>
            <div className="govuk-details__text">
              The overall absence rate is the total number of overall absence
              sessions for all pupils as a percentage of the total number of
              possible sessions for all pupils, where overall absence is the sum
              of authorised and unauthorised absence and one session is equal to
              half a day.
            </div>
          </details>
          <p className="govuk-body">
            The overall absence rate across state-funded primary, secondary and
            special schools increased from 4.6 per cent in 2015/16 to 4.7 per
            cent in 2016/17. In primary schools the overall absence rate stayed
            the same at 4 per cent and the rate in secondary schools increased
            from 5.2 per cent to 5.4 per cent. Absence in special schools is
            much higher at 9.7 per cent in 2016/17
          </p>
          <p className="govuk-body">
            The increase in overall absence rate has been driven by an increase
            in the unauthorised absence rate across state-funded primary,
            secondary and special schools - which increased from 1.1 per cent to
            1.3 per cent between 2015/16 and 2016/17.
          </p>
          <p className="govuk-body">
            Looking at longer-term trends, overall and authorised absence rates
            have been fairly stable over recent years after decreasing gradually
            between 2006/07 and 2013/14. Unauthorised absence rates have not
            varied much since 2006/07, however the unauthorised absence rate is
            now at its highest since records began, at 1.3 per cent.
          </p>
          <p className="govuk-body">
            This increase in unauthorised absence is due to an increase in
            absence due to family holidays that were not agreed by the school.
            The authorised absence rate has not changed since last year, at 3.4
            per cent. Though in primary schools authorised absence rates have
            been decreasing across recent years.
          </p>
          <p className="govuk-body">
            The total number of days missed due to overall absence across
            state-funded primary, secondary and special schools has increased
            since last year, from 54.8 million in 2015/16 to 56.7 million in
            2016/17. This partly reflects the rise in the total number of pupil
            enrolments, the average number of days missed per enrolment has
            increased very slightly from 8.1 days in 2015/16 to 8.2 days in
            2016/17.
          </p>
          <p className="govuk-body">
            In 2016/17, 91.8 per cent of pupils in state-funded primary,
            state-funded secondary and special schools missed at least one
            session during the school year, this is similar to the previous year
            (91.7 per cent in 2015/16).
          </p>
        </div>
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">Persistent absence</h2>
        <div className="collapsible-content">
          <details className="govuk-details">
            <summary className="govuk-details__summary">
              <span className="govuk-details__summary-text">
                Persistent absence definition
              </span>
            </summary>
            <div className="govuk-details__text">
              <p>
                A pupil enrolment is identified as a persistent absentee if they
                miss 10% or more of their possible sessions
              </p>
              <p>
                The persistent absentee measure changed as of the start of the
                2015/16 academic year. Time series data in this release has been
                recalculated using the new methodology but caution should be
                used when interpreting these series as they may be impacted by
                the change in the measure itself. For more information on this
                and on the methodologies used in previous years, please see the
                <a className="govuk-link" href="#">
                  {' '}
                  guide to absence statistics{' '}
                </a>
                .
              </p>
            </div>
          </details>
          <p className="govuk-body">
            The percentage of enrolments in state-funded primary and
            state-funded secondary schools that were classified as persistent
            absentees in 2016/17 was 10.8 per cent. This is up from the
            equivalent figure of 10.5 per cent in 2015/16 (see Figure 2).
          </p>
          <p className="govuk-body">
            In 2016/17, persistent absentees accounted for 37.6 per cent of all
            absence compared to 36.6 per cent in 2015/16. Longer term, there has
            been a decrease in the proportion of absence that persistent
            absentees account for – down from 43.3 per cent in 2011/12.
          </p>
          <p className="govuk-body">
            The overall absence rate for persistent absentees across all schools
            was 18.1 per cent, nearly four times higher than the rate for all
            pupils. This is a slight increase from 2015/16, when the overall
            absence rate for persistent absentees was 17.6 per cent.
          </p>
          <p className="govuk-body">
            Persistent absentees account for almost a third, 31.6 per cent, of
            all authorised absence and more than half, 53.8 per cent of all
            unauthorised absence. The rate of illness absences is almost four
            times higher for persistent absentees compared to other pupils, at
            7.6 per cent and 2.0 per cent respectively.
          </p>
        </div>
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">Reasons for absence</h2>
        <div className="collapsible-content">
          <div className="govuk-inset-text">
            <p className="govuk-body">
              Within this release absence by reason is broken down in three
              different ways:
            </p>
            <p className="govuk-body">
              Distribution of absence by reason: The proportion of absence for
              each reason, calculated by taking the number of absences for a
              specific reason as a percentage of the total number of absences.
            </p>
            <p className="govuk-body">
              Rate of absence by reason: The rate of absence for each reason,
              calculated by taking the number of absences for a specific reason
              as a percentage of the total number of possible sessions.
            </p>
            <p className="govuk-body">
              One or more sessions missed due to each reason: The number of
              pupil enrolments missing at least one session due to each reason.
            </p>
          </div>
          <p className="govuk-body">
            Illness is the main driver for overall absence rates, however whilst
            overall absence rates have increased slightly since 2015/16, illness
            rates have remained the same at 2.6 per cent. Illness absence
            accounted for 55.3 per cent of all absence in 2016/17, a lower
            proportion than seen in previous years - 57.3 in 2015/16 and 60.1 in
            2014/15.
          </p>
          <p className="govuk-body">
            The rate of absence due to other unauthorised circumstances has
            remained the same as in 2015/16 at 0.7 per cent.
          </p>
          <h3 className="govuk-heading-s">Absence due to family holiday</h3>
          <p className="govuk-body">
            The percentage of pupils who missed at least one session due to a
            family holiday in 2016/17 was 16.9 per cent, compared with 14.7 per
            cent in 2015/16.
          </p>
          <p className="govuk-body">
            The absence rate due to family holidays agreed by the school was 0.1
            in 2016/17, which was the same as in 2015/16. The percentage of all
            possible sessions missed due to unauthorised family holidays
            increased from 0.3 per cent in 2015/16 to 0.4 in 2016/17.
          </p>
          <p className="govuk-body">
            Unauthorised holiday absence rates have been increasing gradually
            since 2006/07, authorised holiday absence rates are much lower now
            than in 2006/07 but have remained steady over recent years. From
            September 2013 a regulations amendment stated that term time leave
            may only be granted in exceptional circumstances, which explains the
            sharp fall in authorised holiday absence between 2012/13 and
            2013/14.
          </p>
          <p className="govuk-body">
            The figures in this publication relate to the period after the Isle
            of Wight Council v Jon Platt High Court judgment (which was in May
            2016) where the High Court supported a local magistrates’ ruling
            that there was no case to answer and partially to the period after
            the judgment in the Supreme Court (which was in April 2017) where
            the Supreme Court unanimously agreed that no children should be
            taken out of school without good reason and clarified that
            ‘regularly’ means ‘in accordance with the rules prescribed by the
            school’.
          </p>
        </div>
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">1</h2>
        <div className="collapsible-content" />
      </div>
      <div className="collapsible">
        <h2 className="open govuk-heading-m">2</h2>
        <div className="collapsible-content" />
      </div>
    </>
  );
};

export default TestPage;
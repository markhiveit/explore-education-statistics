import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import CollapsibleSection from '../components/CollapsibleSection';
import Details from '../components/Details';
import PrototypeDataSample from './components/PrototypeDataSample';
import PrototypePage from './components/PrototypePage';

const TestPage = () => {
  const chartData = [
    { name: '2012/13', unauthorised: 1.1, authorised: 4.2, overall: 5.3 },
    { name: '2013/14', unauthorised: 1.1, authorised: 3.5, overall: 4.5 },
    { name: '2014/15', unauthorised: 1.1, authorised: 3.5, overall: 4.6 },
    { name: '2015/16', unauthorised: 1.1, authorised: 3.4, overall: 4.6 },
    { name: '2016/17', unauthorised: 1.3, authorised: 3.4, overall: 4.7 },
  ];

  return (
    <PrototypePage
      breadcrumbs={[
        { text: 'Education, training and skills' },
        { text: 'Pupil wellbeing, behaviour and attendance' },
        { text: 'School attendance and absence' },
      ]}
    >
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

            <h3 className="govuk-heading-s govuk-!-margin-bottom-0">
              <span className="govuk-caption-m">For school year: </span>
              2016-2017
              <span className="govuk-caption-m govuk-caption-inline">
                (latest data)
              </span>
            </h3>
            <p className="govuk-caption-m govuk-!-margin-top-0">
              <a href="#">See previous 10 years</a>
            </p>
            <h3 className="govuk-heading-s">
              <span className="govuk-caption-m">Published: </span>22 March 2018
            </h3>
            <h3 className="govuk-heading-s govuk-!-margin-bottom-0">
              <span className="govuk-caption-m">Last updated: </span>20 June
              2018
            </h3>
            <p className="govuk-caption-m govuk-!-margin-top-0">
              <a href="#">See all 4 updates</a>
            </p>
            <h3 className="govuk-heading-s govuk-!-margin-bottom-0">
              <span className="govuk-caption-m">Next update: </span>22 March
              2019
            </h3>
            <p className="govuk-caption-m govuk-!-margin-top-0">
              <a href="#">Notify me</a>
            </p>
          </aside>
        </div>
      </div>

      <CollapsibleSection heading="Headline pupil absence facts and figures for 2016/17">
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
        <LineChart
          width={900}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              offset: 5,
              position: 'bottom',
              value: 'School year',
            }}
            padding={{ left: 20, right: 20 }}
            tickMargin={10}
          />
          <YAxis
            label={{
              angle: -90,
              offset: 0,
              position: 'left',
              value: 'Absence rate',
            }}
            scale="auto"
            unit="%"
          />
          <Line
            type="linear"
            dataKey="unauthorised"
            stroke="#28A197"
            strokeWidth="1"
            unit="%"
            activeDot={{ r: 3 }}
          />
          <Line
            type="linear"
            dataKey="authorised"
            stroke="#6F72AF"
            strokeWidth="1"
            unit="%"
            activeDot={{ r: 3 }}
          />
          <Line
            type="linear"
            dataKey="overall"
            stroke="#DF3034"
            strokeWidth="1"
            unit="%"
            activeDot={{ r: 3 }}
          />
        </LineChart>
        <div className="dfe-dash-tiles dfe-dash-tiles--simple">
          <div className="dfe-dash-tiles__tile">
            <h3 className="govuk-heading-m">
              Overall absence
              <span className="govuk-caption-m date-range govuk-tag">
                2016/17
              </span>
            </h3>
            <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
              4.7%
            </span>
            <p className="govuk-body">
              <strong className="increase">
                +0.4
                <abbr aria-label="Percentage points" title="Percentage points">
                  ppt
                </abbr>
              </strong>
              more than 2015/16
            </p>
            <details className="govuk-details">
              <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                  What does overall absence mean?
                </span>
              </summary>
              <div className="govuk-details__text">
                Overall absence is the adipisicing elit. Dolorum hic nobis
                voluptas quidem fugiat enim ipsa reprehenderit nulla.
              </div>
            </details>
          </div>

          <div className="dfe-dash-tiles__tile">
            <h3 className="govuk-heading-m">
              Authorised absence
              <span className="govuk-caption-m date-range govuk-tag">
                2016/17
              </span>
            </h3>
            <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
              3.4%
            </span>
            <p className="govuk-body">
              <strong className="level">
                0
                <abbr aria-label="Percentage points" title="Percentage points">
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
            <h3 className="govuk-heading-m">
              Unauthorised absence
              <span className="govuk-caption-m date-range govuk-tag">
                2016/17
              </span>
            </h3>
            <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
              1.3%
            </span>
            <p className="govuk-body">
              <strong className="decrease">
                -0.4
                <abbr aria-label="Percentage points" title="Percentage points">
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
            <h3 className="govuk-heading-m">
              Persistent absence
              <span className="govuk-caption-m date-range govuk-tag">
                2016/17
              </span>
            </h3>
            <span className="govuk-heading-xl govuk-!-margin-bottom-0 govuk-caption-increase-negative">
              10.8%
            </span>
            <p className="govuk-body">
              <strong className="increase">
                +0.3
                <abbr aria-label="Percentage points" title="Percentage points">
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
      </CollapsibleSection>

      <CollapsibleSection heading="About this release">
        <p>
          This statistical first release (SFR) reports on absence of pupils of
          compulsory school age in state-funded primary, secondary and special
          schools during the 2016/17 academic year. Information on absence in
          pupil referral units, and for pupils aged four, is also included. The
          Department uses two key measures to monitor pupil absence – overall
          and persistent absence. Absence by reason and pupils characteristics
          is also included in this release. Figures are available at national,
          regional, local authority and school level. Figures held in this
          release are used for policy development as key indicators in behaviour
          and school attendance policy. Schools and local authorities also use
          the statistics to compare their local absence rates to regional and
          national averages for different pupil groups.
        </p>
      </CollapsibleSection>

      <CollapsibleSection heading="Absence rates">
        <Details summary="Overall absence rate definition">
          The overall absence rate is the total number of overall absence
          sessions for all pupils as a percentage of the total number of
          possible sessions for all pupils, where overall absence is the sum of
          authorised and unauthorised absence and one session is equal to half a
          day.
        </Details>
        <PrototypeDataSample
          sectionId="absenceRates"
          chartTitle="absence rates"
        />
        <p>
          The overall absence rate across state-funded primary, secondary and
          special schools increased from 4.6 per cent in 2015/16 to 4.7 per cent
          in 2016/17. In primary schools the overall absence rate stayed the
          same at 4 per cent and the rate in secondary schools increased from
          5.2 per cent to 5.4 per cent. Absence in special schools is much
          higher at 9.7 per cent in 2016/17
        </p>
        <p>
          The increase in overall absence rate has been driven by an increase in
          the unauthorised absence rate across state-funded primary, secondary
          and special schools - which increased from 1.1 per cent to 1.3 per
          cent between 2015/16 and 2016/17.
        </p>
        <p>
          Looking at longer-term trends, overall and authorised absence rates
          have been fairly stable over recent years after decreasing gradually
          between 2006/07 and 2013/14. Unauthorised absence rates have not
          varied much since 2006/07, however the unauthorised absence rate is
          now at its highest since records began, at 1.3 per cent.
        </p>
        <p>
          This increase in unauthorised absence is due to an increase in absence
          due to family holidays that were not agreed by the school. The
          authorised absence rate has not changed since last year, at 3.4 per
          cent. Though in primary schools authorised absence rates have been
          decreasing across recent years.
        </p>
        <p>
          The total number of days missed due to overall absence across
          state-funded primary, secondary and special schools has increased
          since last year, from 54.8 million in 2015/16 to 56.7 million in
          2016/17. This partly reflects the rise in the total number of pupil
          enrolments, the average number of days missed per enrolment has
          increased very slightly from 8.1 days in 2015/16 to 8.2 days in
          2016/17.
        </p>
        <p>
          In 2016/17, 91.8 per cent of pupils in state-funded primary,
          state-funded secondary and special schools missed at least one session
          during the school year, this is similar to the previous year (91.7 per
          cent in 2015/16).
        </p>
      </CollapsibleSection>

      <CollapsibleSection heading="Persistent absence">
        <Details summary="absence definition">
          <p>
            A pupil enrolment is identified as a persistent absentee if they
            miss 10% or more of their possible sessions
          </p>
          <p>
            The persistent absentee measure changed as of the start of the
            2015/16 academic year. Time series data in this release has been
            recalculated using the new methodology but caution should be used
            when interpreting these series as they may be impacted by the change
            in the measure itself. For more information on this and on the
            methodologies used in previous years, please see the
            <a href="#">guide to absence statistics</a>.
          </p>
        </Details>
        <PrototypeDataSample
          sectionId="persistentAbsence"
          chartTitle="persistent absence rates"
        />
        <p>
          The percentage of enrolments in state-funded primary and state-funded
          secondary schools that were classified as persistent absentees in
          2016/17 was 10.8 per cent. This is up from the equivalent figure of
          10.5 per cent in 2015/16 (see Figure 2).
        </p>
        <p>
          In 2016/17, persistent absentees accounted for 37.6 per cent of all
          absence compared to 36.6 per cent in 2015/16. Longer term, there has
          been a decrease in the proportion of absence that persistent absentees
          account for – down from 43.3 per cent in 2011/12.
        </p>
        <p>
          The overall absence rate for persistent absentees across all schools
          was 18.1 per cent, nearly four times higher than the rate for all
          pupils. This is a slight increase from 2015/16, when the overall
          absence rate for persistent absentees was 17.6 per cent.
        </p>
        <p>
          Persistent absentees account for almost a third, 31.6 per cent, of all
          authorised absence and more than half, 53.8 per cent of all
          unauthorised absence. The rate of illness absences is almost four
          times higher for persistent absentees compared to other pupils, at 7.6
          per cent and 2.0 per cent respectively.
        </p>
      </CollapsibleSection>

      <CollapsibleSection heading="Reasons for absence">
        <div className="govuk-inset-text">
          <p>
            Within this release absence by reason is broken down in three
            different ways:
          </p>
          <p>
            Distribution of absence by reason: The proportion of absence for
            each reason, calculated by taking the number of absences for a
            specific reason as a percentage of the total number of absences.
          </p>
          <p>
            Rate of absence by reason: The rate of absence for each reason,
            calculated by taking the number of absences for a specific reason as
            a percentage of the total number of possible sessions.
          </p>
          <p>
            One or more sessions missed due to each reason: The number of pupil
            enrolments missing at least one session due to each reason.
          </p>
        </div>
        <PrototypeDataSample
          sectionId="reasonAbsence"
          chartTitle="reason for absence"
        />
        <p>
          Illness is the main driver for overall absence rates, however whilst
          overall absence rates have increased slightly since 2015/16, illness
          rates have remained the same at 2.6 per cent. Illness absence
          accounted for 55.3 per cent of all absence in 2016/17, a lower
          proportion than seen in previous years - 57.3 in 2015/16 and 60.1 in
          2014/15.
        </p>
        <p>
          The rate of absence due to other unauthorised circumstances has
          remained the same as in 2015/16 at 0.7 per cent.
        </p>
        <h3 className="govuk-heading-s">Absence due to family holiday</h3>
        <p>
          The percentage of pupils who missed at least one session due to a
          family holiday in 2016/17 was 16.9 per cent, compared with 14.7 per
          cent in 2015/16.
        </p>
        <p>
          The absence rate due to family holidays agreed by the school was 0.1
          in 2016/17, which was the same as in 2015/16. The percentage of all
          possible sessions missed due to unauthorised family holidays increased
          from 0.3 per cent in 2015/16 to 0.4 in 2016/17.
        </p>
        <p>
          Unauthorised holiday absence rates have been increasing gradually
          since 2006/07, authorised holiday absence rates are much lower now
          than in 2006/07 but have remained steady over recent years. From
          September 2013 a regulations amendment stated that term time leave may
          only be granted in exceptional circumstances, which explains the sharp
          fall in authorised holiday absence between 2012/13 and 2013/14.
        </p>
        <p>
          The figures in this publication relate to the period after the Isle of
          Wight Council v Jon Platt High Court judgment (which was in May 2016)
          where the High Court supported a local magistrates’ ruling that there
          was no case to answer and partially to the period after the judgment
          in the Supreme Court (which was in April 2017) where the Supreme Court
          unanimously agreed that no children should be taken out of school
          without good reason and clarified that ‘regularly’ means ‘in
          accordance with the rules prescribed by the school’.
        </p>
      </CollapsibleSection>
      <CollapsibleSection heading="Distribution of absence">
        <p>
          Nearly half of all pupils (48.9 per cent) were absent for five days or
          fewer across state-funded primary, secondary and special schools in
          2016/17, down from 49.1 per cent in 2015/16.
        </p>
        <p>
          4.3 per cent of pupil enrolments had more than 25 days of absence in
          2016/17 (the same as in 2015/16). These pupil enrolments accounted for
          23.5 per cent of days missed. 8.2 per cent of pupil enrolments had no
          absence during 2016/17.
        </p>
        <p>
          Per pupil enrolment, the average total absence in primary schools was
          7.2 days, compared to 16.9 days in special schools and 9.3 days in
          secondary schools.
        </p>
        <p>
          When looking at absence rates across terms for primary, secondary and
          special schools, the overall absence rate is lowest in the autumn term
          and highest in the summer term. The authorised rate is highest in the
          spring term and lowest in the summer term, and the unauthorised rate
          is highest in the summer term.
        </p>
      </CollapsibleSection>
      <CollapsibleSection heading="Absence by pupil characteristics">
        <p>
          The patterns of absence rates for pupils with different
          characteristics have been consistent across recent years.
        </p>
        <h3 className="govuk-heading-s">Gender</h3>
        <p>
          The overall absence rates across state-funded primary, secondary and
          special schools were very similar for boys and girls, at 4.7 per cent
          and 4.6 per cent respectively. The persistent absence rates were also
          similar, at 10.9 per cent for boys and 10.6 per cent for girls.
        </p>
        <h3 className="govuk-heading-s">Free school meals (FSM) eligibility</h3>
        <p>
          Absence rates are higher for pupils who are known to be eligible for
          and claiming free school meals. The overall absence rate for these
          pupils was 7.3 per cent, compared to 4.2 per cent for non FSM pupils.
          The persistent absence rate for pupils who were eligible for FSM was
          more than twice the rate for those pupils not eligible for FSM.
        </p>
        <h3 className="govuk-heading-s">National curriculum year group</h3>
        <p>
          Pupils in national curriculum year groups 3 and 4 had the lowest
          overall absence rates at 3.9 and 4 per cent respectively. Pupils in
          national curriculum year groups 10 and 11 had the highest overall
          absence rate at 6.1 per cent and 6.2 per cent respectively. This trend
          is repeated for persistent absence.
        </p>
        <h3 className="govuk-heading-s">Special educational need (SEN)</h3>
        <p>
          Pupils with a statement of special educational needs (SEN) or
          education healthcare plan (EHC) had an overall absence rate of 8.2 per
          cent compared to 4.3 per cent for those with no identified SEN. The
          percentage of pupils with a statement of SEN or an EHC plan that are
          persistent absentees was more than two times higher than the
          percentage for pupils with no identified SEN.
        </p>
        <h3 className="govuk-heading-s">Ethnic group</h3>
        <p>
          The highest overall absence rates were for Traveller of Irish Heritage
          and Gypsy/ Roma pupils at 18.1 per cent and 12.9 per cent
          respectively. Overall absence rates for pupils of a Chinese and Black
          African ethnicity were substantially lower than the national average
          of 4.7 per cent at 2.4 per cent and 2.9 per cent respectively. A
          similar pattern is seen in persistent absence rates; Traveller of
          Irish heritage pupils had the highest rate at 64 per cent and Chinese
          pupils had the lowest rate at 3.1 per cent.
        </p>
      </CollapsibleSection>
      <CollapsibleSection heading="Absence for four year olds">
        <p>
          The overall absence rate for four year olds in 2016/17 was 5.1 per
          cent which is lower than the rate of 5.2 per cent which it has been
          for the last two years.
        </p>
        <p>
          Absence recorded for four year olds is not treated as 'authorised' or
          'unauthorised' and is therefore reported as overall absence only.
        </p>
      </CollapsibleSection>
      <CollapsibleSection heading="Pupil referral unit absence">
        <p>
          The overall absence rate for pupil referral units in 2016/17 was 33.9
          per cent, compared to 32.6 per cent in 2015/16. The percentage of
          enrolments in pupil referral units who were persistent absentees was
          73.9 per cent in 2016/17, compared to 72.5 per cent in 2015/16.
        </p>
      </CollapsibleSection>
      <CollapsibleSection heading="Pupil absence by local authority">
        <p>
          There is variation in overall and persistent absence rates across
          state-funded primary, secondary and special schools by region and
          local authority. Similarly to last year, the three regions with the
          highest overall absence rate across all state-funded primary,
          secondary and special schools are the North East (4.9 per cent),
          Yorkshire and the Humber (4.9 per cent) and the South West (4.8 per
          cent), with Inner and Outer London having the lowest overall absence
          rate (4.4 per cent). The region with the highest persistent absence
          rate is Yorkshire and the Humber, where 11.9 per cent of pupil
          enrolments are persistent absentees, with Outer London having the
          lowest rate of persistent absence (at 10.0 per cent).
        </p>
        <p>
          Absence information at local authority district level is also
          published within this release, in the accompanying underlying data
          files.
        </p>
      </CollapsibleSection>

      <h2 className="govuk-heading-m govuk-!-margin-top-9">
        Extra information
      </h2>
      <CollapsibleSection
        heading="Local authorities"
        caption="Find absence facts and figures for an individual LA or compare rates between LAs"
        headingTag="h3"
      >
        text here
      </CollapsibleSection>
      <CollapsibleSection
        heading="Pupil characteristics"
        caption="Figures for age, gender, ethnicity, and more"
        headingTag="h3"
      >
        text here
      </CollapsibleSection>
      <CollapsibleSection
        heading="Types of school"
        caption="Figures for different types of state school"
        headingTag="h3"
      >
        text here
      </CollapsibleSection>
      <CollapsibleSection
        heading="Where does this data come from"
        caption="How we collect and process the data"
        headingTag="h3"
      >
        text here
      </CollapsibleSection>
      <CollapsibleSection heading="Feedback and questions" headingTag="h3">
        text here
      </CollapsibleSection>

      <h2
        className="govuk-heading-m govuk-!-margin-top-9"
        id="subsection-title"
      >
        Getting the data
      </h2>

      <ul className="govuk-list">
        <li>
          <a href="#" className="govuk-link">
            View by graphs and charts
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            View by tables and numbers
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            Create your own tables and charts
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            Download pdf files
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            Download Excel files
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            Download .csv files
          </a>
        </li>
        <li>
          <a href="#" className="govuk-link">
            Access API
          </a>
        </li>
      </ul>
    </PrototypePage>
  );
};

export default TestPage;

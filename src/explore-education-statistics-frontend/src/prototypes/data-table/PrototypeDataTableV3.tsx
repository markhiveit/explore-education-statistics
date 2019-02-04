import React, { Component, createRef } from 'react';
import PageHeading from '../../components/PageHeading';
import Tabs from '../../components/Tabs';
import TabsSection from '../../components/TabsSection';
import {
  DataTableResult,
  getCharacteristicsMeta,
  getNationalCharacteristicsData,
  PublicationMeta,
  SchoolType,
} from '../../services/dataTableService';
import PrototypePage from '../components/PrototypePage';
import CharacteristicsDataTable from './components/CharacteristicsDataTable';
import CharacteristicsFilterForm, {
  CharacteristicsFilterFormSubmitHandler,
} from './components/CharacteristicsFilterForm';
import PublicationMenu, {
  MenuChangeEventHandler,
} from './components/PublicationMenu';

interface State {
  filters: {
    attributes: string[];
    characteristics: string[];
  };
  publicationId: string;
  publicationMeta: Pick<PublicationMeta, 'attributes' | 'characteristics'>;
  publicationName: string;
  schoolTypes: SchoolType[];
  tableData: DataTableResult[];
  years: number[];
}

class PrototypeDataTableV3 extends Component<{}, State> {
  public state: State = {
    filters: {
      attributes: [],
      characteristics: [],
    },
    publicationId: '',
    publicationMeta: {
      attributes: {},
      characteristics: {},
    },
    publicationName: '',
    schoolTypes: [
      SchoolType.Total,
      SchoolType.State_Funded_Primary,
      SchoolType.State_Funded_Secondary,
    ],
    tableData: [],
    years: [201213, 201314, 201415, 201516, 201617],
  };

  private filtersRef = createRef<HTMLDivElement>();
  private dataTableRef = createRef<HTMLDivElement>();

  private handleMenuChange: MenuChangeEventHandler = async menuOption => {
    if (!menuOption) {
      return;
    }

    const menuOptions = {
      EXCLUSIONS: {
        id: 'bf2b4284-6b84-46b0-aaaa-a2e0a23be2a9',
        label: 'Exclusions',
      },
      PUPIL_ABSENCE: {
        id: 'cbbd299f-8297-44bc-92ac-558bcf51f8ad',
        label: 'Pupil absence',
      },
    };

    const publication = menuOptions[menuOption];

    const { data } = await getCharacteristicsMeta(publication.id);

    this.setState(
      {
        publicationId: publication.id,
        publicationMeta: data,
        publicationName: publication.label,
      },
      () => {
        if (this.filtersRef.current) {
          this.filtersRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      },
    );
  };

  private handleFilterFormSubmit: CharacteristicsFilterFormSubmitHandler = async ({
    attributes,
    characteristics,
  }) => {
    const { data } = await getNationalCharacteristicsData(
      this.state.publicationId,
      attributes,
      characteristics,
      this.state.schoolTypes,
      this.state.years,
    );

    this.setState(
      {
        filters: {
          attributes,
          characteristics,
        },
        tableData: data.result,
      },
      () => {
        if (this.dataTableRef.current) {
          this.dataTableRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      },
    );
  };

  public render() {
    const {
      filters,
      publicationMeta,
      publicationName,
      schoolTypes,
      tableData,
      years,
    } = this.state;

    return (
      <PrototypePage
        breadcrumbs={[
          { text: 'Education training and skills' },
          { text: 'National level' },
          { text: 'Explore statistics' },
        ]}
      >
        <PageHeading caption="National level" heading="Explore statistics" />

        <ul>
          <li>
            You can explore all the DfE statistics available at national level
            here.
          </li>
          <li>
            Once you've chosen your data you can view it by year, school type,
            area or pupil characteristics.
          </li>
          <li>
            You can also download it, visualise it or copy and paste it as you
            need.
          </li>
        </ul>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <PublicationMenu onChange={this.handleMenuChange} />
          </div>
        </div>

        {publicationName && (
          <div className="govuk-grid-row" ref={this.filtersRef}>
            <div className="govuk-grid-column-full">
              <h2>
                2. Filter statistics from '{publicationName}'
                <span className="govuk-hint">
                  Select any options you are interested in from the groups
                  below.
                </span>
              </h2>

              <Tabs>
                <TabsSection id="characteristics" title="Characteristics">
                  <CharacteristicsFilterForm
                    publicationMeta={publicationMeta}
                    onSubmit={this.handleFilterFormSubmit}
                  />
                </TabsSection>
              </Tabs>
            </div>
          </div>
        )}

        {tableData.length > 0 && (
          <div ref={this.dataTableRef}>
            <h2>3. Explore statistics from '{publicationName}'</h2>

            <CharacteristicsDataTable
              attributes={filters.attributes}
              attributesMeta={publicationMeta.attributes}
              characteristics={filters.characteristics}
              characteristicsMeta={publicationMeta.characteristics}
              results={tableData}
              schoolTypes={schoolTypes}
              years={years}
            />

            <ul className="govuk-list">
              <li>
                <a href="#download">Download data (.csv)</a>
              </li>
              <li>
                <a href="#api">Access developer API</a>
              </li>
              <li>
                <a href="#methodology">Methodology</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </PrototypePage>
    );
  }
}

export default PrototypeDataTableV3;

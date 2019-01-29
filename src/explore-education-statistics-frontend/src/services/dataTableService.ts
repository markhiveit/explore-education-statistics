import { AxiosPromise } from 'axios';
import { dataApi } from './api';

export interface AttributesMeta {
  [group: string]: {
    name: string;
    label: string;
    unit?: string;
  }[];
}

export interface CharacteristicsMeta {
  [group: string]: {
    name: string;
    label: string;
  }[];
}

export interface PublicationMeta {
  publicationId: string;
  attributes: AttributesMeta;
  characteristics: CharacteristicsMeta;
}

export const getCharacteristicsMeta = (
  publicationUuid: string,
): AxiosPromise<PublicationMeta> =>
  dataApi.get(`/tablebuilder/meta/${publicationUuid}`);

export enum SchoolType {
  Dummy = 'Dummy',
  Total = 'Total',
  State_Funded_Primary = 'State_Funded_Primary',
  State_Funded_Secondary = 'State_Funded_Secondary',
  Special = 'Special',
}

export interface DataTableResult {
  year: number;
  schoolType: SchoolType;
  attributes: {
    [attribute: string]: string;
  };
}

export interface CharacteristicsData {
  publicationId: string;
  releaseId: string;
  releaseDate: string;
  result: DataTableResult[];
}

export const getNationalCharacteristicsData = (
  publicationUuid: string,
  attributes: string[],
  characteristics: string[],
  schoolTypes: SchoolType[],
  years?: number[],
): AxiosPromise<CharacteristicsData> =>
  dataApi.get(`/tablebuilder/characteristics/national/${publicationUuid}`, {
    params: {
      attributes,
      characteristics,
      schoolTypes,
      years,
    },
  });

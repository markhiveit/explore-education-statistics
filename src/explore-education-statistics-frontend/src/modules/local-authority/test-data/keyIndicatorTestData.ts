import { KeyIndicatorTileProps } from '../../../components/KeyIndicatorTile';

const testData: KeyIndicatorTileProps[] = [
  {
    changes: [
      {
        description: '16/17',
        units: 'ppt',
        value: 0.5,
      },
      {
        description: 'national',
        units: 'ppt',
        value: -1.3,
      },
    ],
    link: '#',
    reference: {
      link: '#',
      title: 'Early years foundation state profile results',
    },
    title: 'EYFSP good level of development',
    units: '%',
    value: 70.3,
  },
  {
    changes: [
      {
        description: '16/17',
        units: 'ppt',
        value: -0.5,
      },
      {
        description: 'national',
        units: 'ppt',
        value: -5.0,
      },
    ],
    link: '#',
    reference: {
      link: '#',
      title: 'KS2 SAT expected standard',
    },
    title: 'National curriculum assessments at key stage 2 in England',
    units: '%',
    value: 47,
  },
  {
    changes: [
      {
        description: '15/16',
        units: 'ppt',
        value: -3.7,
      },
      {
        description: 'national',
        units: 'ppt',
        value: 0,
      },
    ],
    link: '#',
    reference: {
      link: '#',
      title: 'KS4 GCSE average attainment 8 score',
    },
    title: 'GCSE and equivalent results: 2017 to 2018 (provisional)',
    units: '%',
    value: 44.6,
  },
  {
    changes: [
      {
        description: '15/16',
        units: 'ppt',
        value: 0.1,
      },
      {
        description: 'national',
        units: 'ppt',
        value: -4.7,
      },
    ],
    link: '#',
    reference: {
      link: '#',
      title: 'KS5 A-level pupils attaining at least 2',
    },
    title: 'A level and other 16 to 18 results: 2017 to 2018 (provisional)',
    units: '%',
    value: 72.7,
  },
];

export default testData;

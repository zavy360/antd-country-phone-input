import { ReactNode } from 'react';
import { searchArea } from './third-party';

export const getAreas = (locale: any) => {
  return defaultAreas.map((area) => ({
    ...area,
    name: searchArea({ alpha2: area.short.toLowerCase() }, locale)?.name,
  }));
};

export type Area = {
  short: string;
  phoneCode: number;
  emoji: ReactNode;
  name?: string;
};

export const defaultAreas: Area[] = [
  {
    emoji: '🇦🇺',
    phoneCode: 61,
    short: 'AU',
  },
  {
    emoji: '🇳🇿',
    phoneCode: 64,
    short: 'NZ',
  },
  {
    emoji: '🇸🇬',
    phoneCode: 65,
    short: 'SG',
  },
  {
    emoji: '🇵🇭',
    phoneCode: 63,
    short: 'PH',
  },
  // {
  //   emoji: '🇨🇦',
  //   phoneCode: 1,
  //   short: 'CA',
  // },
  // {
  //   emoji: '🇺🇸',
  //   phoneCode: 1,
  //   short: 'US',
  // },
  // {
  //   emoji: '🇬🇧',
  //   phoneCode: 44,
  //   short: 'GB',
  // },
];

export default defaultAreas;

import germanyFlag from '../assets/icons/flags/germany.png';
import netherlandsFlag from '../assets/icons/flags/netherlands.png';
import polandFlag from '../assets/icons/flags/poland.png';
import usaFlag from '../assets/icons/flags/usa.png';

export const DATA_CENTERS = [
    {
        id: 'poland',
        apiId: '12',
        label: 'Poland',
        flagSrc: polandFlag,
    },
    {
        id: 'netherlands',
        apiId: '17',
        label: 'Netherlands',
        flagSrc: netherlandsFlag,
    },
    {
        id: 'germany',
        apiId: '19',
        label: 'Germany',
        flagSrc: germanyFlag,
    },
    {
        id: 'usa',
        apiId: '21',
        label: 'USA',
        flagSrc: usaFlag,
    },
] as const;

export type DataCenterId = (typeof DATA_CENTERS)[number]['id'];
export type DataCenterApiId = (typeof DATA_CENTERS)[number]['apiId'];

export const DEFAULT_DATA_CENTER_ID: DataCenterId = 'netherlands';

export const DATA_CENTER_API_IDS = DATA_CENTERS.map(
    (dataCenter) => dataCenter.apiId,
).join(',');
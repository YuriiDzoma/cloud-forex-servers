export const PURCHASE_PERIODS = [
    {
        id: '1-day',
        apiPeriod: '-50',
        label: '1 Day',
        priceSuffix: 'day',
    },
    {
        id: '1-month',
        apiPeriod: '1',
        label: '1 Month',
        priceSuffix: 'month',
    },
    {
        id: '3-months',
        apiPeriod: '3',
        label: '3 Month',
        priceSuffix: '3 months',
    },
    {
        id: '6-months',
        apiPeriod: '6',
        label: '6 Month',
        priceSuffix: '6 months',
    },
    {
        id: '12-months',
        apiPeriod: '12',
        label: '12 Month',
        priceSuffix: '12 months',
    },
] as const;

export type PurchasePeriodId = (typeof PURCHASE_PERIODS)[number]['id'];
export type PurchasePeriodApiValue = (typeof PURCHASE_PERIODS)[number]['apiPeriod'];

export const DEFAULT_PURCHASE_PERIOD_ID: PurchasePeriodId = '1-month';
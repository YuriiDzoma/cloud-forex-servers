import type { DataCenterId } from '../constants/dataCenters';
import type { PurchasePeriodId } from '../constants/purchasePeriods';

export type TariffPriceMap = Partial<Record<PurchasePeriodId, number>>;

export interface TariffDetailRow {
    label: string;
    value: string;
}

export interface TariffPlan {
    id: string;
    orderId: string;
    title: string;
    dataCenterId: DataCenterId;
    priceByPeriod: TariffPriceMap;
    currency: string;

    sortOrder: number;
    specs: string;
    details: TariffDetailRow[];
    terminalCount: number;
    chartIconCount: number;
    features: string[];
    tags: string[];

    isBestChoice?: boolean;
}
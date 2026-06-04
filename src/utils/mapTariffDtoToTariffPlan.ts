import { DATA_CENTERS, type DataCenterId } from '../constants/dataCenters';
import {
    PURCHASE_PERIODS,
    type PurchasePeriodId,
} from '../constants/purchasePeriods';
import { getTariffContentByTitle } from '../constants/tariffContent';
import type { ApiTariffDetailDto, ApiTariffDto } from '../types/api';
import type { TariffDetailRow, TariffPlan, TariffPriceMap } from '../types/tariff';

function getDataCenterIdByApiId(apiId?: string): DataCenterId | null {
    const dataCenter = DATA_CENTERS.find((item) => item.apiId === apiId);

    return dataCenter?.id ?? null;
}

function getCleanTariffTitle(rawTitle?: string): string {
    return rawTitle?.split('|')[0]?.trim() ?? 'Cloud Forex';
}

function getDetailValue(details: ApiTariffDetailDto[] = [], name: string): string {
    return (
        details.find((detail) => detail.name?.$ === name)?.value?.$.trim() ?? ''
    );
}

function normalizeGbValue(value: string): string {
    return value.replace(/\bGb\b/i, 'GB');
}

function getTariffDetails(details: ApiTariffDetailDto[] = []): TariffDetailRow[] {
    const cpuCount = getDetailValue(details, 'CPU count');
    const memory = getDetailValue(details, 'Memory');
    const disk = getDetailValue(details, 'Disk space');
    const portSpeed = getDetailValue(details, 'Port speed');

    return [
        {
            label: 'CPU',
            value: 'AMD EPYC 3.3 GHz',
        },
        {
            label: 'Cores',
            value: cpuCount || '—',
        },
        {
            label: 'RAM',
            value: memory ? `${normalizeGbValue(memory)} DDR4` : '—',
        },
        {
            label: 'NVMe',
            value: disk ? normalizeGbValue(disk) : '—',
        },
        {
            label: 'Speed',
            value: portSpeed || '—',
        },
    ];
}

function mapPrices(tariff: ApiTariffDto): {
    priceByPeriod: TariffPriceMap;
    currency: string;
} {
    const priceByPeriod: TariffPriceMap = {};
    let currency = 'EUR';

    tariff.prices?.price?.forEach((price) => {
        const period = PURCHASE_PERIODS.find(
            (purchasePeriod) => purchasePeriod.apiPeriod === price.period?.$,
        );

        if (!period || !price.cost?.$) {
            return;
        }

        priceByPeriod[period.id as PurchasePeriodId] = Number(price.cost.$);
        currency = price.currency?.$ ?? currency;
    });

    return {
        priceByPeriod,
        currency,
    };
}

export function mapTariffDtoToTariffPlan(
    tariff: ApiTariffDto,
): TariffPlan | null {
    const dataCenterId = getDataCenterIdByApiId(tariff.datacenter?.id?.$);

    if (!dataCenterId || !tariff.id?.$ || !tariff.keyvalue?.$) {
        return null;
    }

    const title = getCleanTariffTitle(tariff.title?.$);
    const content = getTariffContentByTitle(title);

    if (!content) {
        return null;
    }

    const { priceByPeriod, currency } = mapPrices(tariff);

    return {
        id: tariff.id.$,
        orderId: tariff.keyvalue.$,
        title,
        dataCenterId,
        priceByPeriod,
        currency,

        sortOrder: content.sortOrder,
        specs: content.specs,
        details: getTariffDetails(tariff.detail),
        terminalCount: content.terminalCount,
        chartIconCount: content.chartIconCount,
        features: content.features,
        tags: content.tags,

        isBestChoice: content.isBestChoice
    };
}
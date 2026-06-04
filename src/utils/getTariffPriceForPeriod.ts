import type { PurchasePeriodId } from '../constants/purchasePeriods';
import type { TariffPlan } from '../types/tariff';

export function getTariffPriceForPeriod(
    tariff: TariffPlan,
    periodId: PurchasePeriodId,
): number | null {
    return tariff.priceByPeriod[periodId] ?? null;
}
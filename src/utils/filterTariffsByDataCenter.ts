import type { DataCenterId } from '../constants/dataCenters';
import type { TariffPlan } from '../types/tariff';

export function filterTariffsByDataCenter(
    tariffs: TariffPlan[],
    dataCenterId: DataCenterId,
): TariffPlan[] {
    return tariffs.filter((tariff) => tariff.dataCenterId === dataCenterId);
}
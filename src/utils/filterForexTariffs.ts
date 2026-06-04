import type { ApiTariffDto } from '../types/api';

const FOREX_SERVER_TAG = 'forex_server';

export function filterForexTariffs(tariffs: ApiTariffDto[]): ApiTariffDto[] {
    return tariffs.filter((tariff) => tariff.title_tag?.$ === FOREX_SERVER_TAG);
}
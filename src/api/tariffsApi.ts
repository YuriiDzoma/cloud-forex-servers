import { DATA_CENTER_API_IDS } from '../constants/dataCenters';
import type { TariffsApiResponse } from '../types/api';

const TARIFFS_API_URL = 'https://api.zomrodev.online/v1/api/proxy/';

const TARIFFS_REQUEST_BODY = {
    func: 'v2.instances.order.pricelist',
    out: 'json',
    lang: 'en',
    page: '1',
    page_size: '999',
    datacenter: DATA_CENTER_API_IDS,
} as const;

export async function fetchTariffs(
    signal?: AbortSignal,
): Promise<TariffsApiResponse> {
    const body = new URLSearchParams(TARIFFS_REQUEST_BODY);

    const response = await fetch(TARIFFS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
        signal,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch tariffs. Status: ${response.status}`);
    }

    return response.json() as Promise<TariffsApiResponse>;
}
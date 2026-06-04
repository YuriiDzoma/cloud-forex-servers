import { useEffect, useState } from 'react';

import { fetchTariffs } from '../api/tariffsApi';
import type { TariffPlan } from '../types/tariff';
import { filterForexTariffs } from '../utils/filterForexTariffs';
import { mapTariffDtoToTariffPlan } from '../utils/mapTariffDtoToTariffPlan';

interface UseTariffsResult {
    tariffs: TariffPlan[];
    isLoading: boolean;
    error: string | null;
}

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    return 'Unknown error occurred while loading tariffs.';
}

export function useTariffs(): UseTariffsResult {
    const [tariffs, setTariffs] = useState<TariffPlan[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        async function loadTariffs() {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetchTariffs(abortController.signal);

                const apiTariffs = response.doc?.list?.[0]?.elem ?? [];
                const forexTariffs = filterForexTariffs(apiTariffs);
                const mappedTariffs = forexTariffs
                    .map(mapTariffDtoToTariffPlan)
                    .filter((tariff): tariff is TariffPlan => tariff !== null)
                    .sort((firstTariff, secondTariff) => (
                        firstTariff.sortOrder - secondTariff.sortOrder
                    ));

                setTariffs(mappedTariffs);
            } catch (caughtError) {
                if (abortController.signal.aborted) {
                    return;
                }

                setError(getErrorMessage(caughtError));
            } finally {
                if (!abortController.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        void loadTariffs();

        return () => {
            abortController.abort();
        };
    }, []);

    return {
        tariffs,
        isLoading,
        error,
    };
}
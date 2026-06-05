import { useMemo, useState } from 'react';

import { DataCenterSelector } from '../../components/DataCenterSelector/DataCenterSelector';
import { PeriodDropdown } from '../../components/PeriodDropdown/PeriodDropdown';
import { TariffCard } from '../../components/TariffCard/TariffCard';
import { TariffCardSkeleton } from '../../components/TariffCard/TariffCardSkeleton';
import {
    DEFAULT_DATA_CENTER_ID,
    type DataCenterId,
} from '../../constants/dataCenters';
import {
    DEFAULT_PURCHASE_PERIOD_ID,
    type PurchasePeriodId,
} from '../../constants/purchasePeriods';
import { useTariffs } from '../../hooks/useTariffs';
import { filterTariffsByDataCenter } from '../../utils/filterTariffsByDataCenter';
import styles from './ForexServerPage.module.scss';

const PAGE_TITLE_ID = 'forex-server-page-title';
const SKELETON_CARD_COUNT = 4;

export function ForexServerPage() {
    const [selectedDataCenterId, setSelectedDataCenterId] = useState<DataCenterId>(
        DEFAULT_DATA_CENTER_ID,
    );

    const [selectedPeriodId, setSelectedPeriodId] = useState<PurchasePeriodId>(
        DEFAULT_PURCHASE_PERIOD_ID,
    );

    const { tariffs, isLoading, error } = useTariffs();

    const visibleTariffs = useMemo(
        () => filterTariffsByDataCenter(tariffs, selectedDataCenterId),
        [tariffs, selectedDataCenterId],
    );

    const hasVisibleTariffs = visibleTariffs.length > 0;
    const shouldShowEmptyState = !isLoading && !error && !hasVisibleTariffs;
    const shouldShowTariffs = !isLoading && !error && hasVisibleTariffs;

    return (
        <main className={styles.page}>
            <section className={styles.pricing} aria-labelledby={PAGE_TITLE_ID}>
                <h1 id={PAGE_TITLE_ID} className={styles.title}>
                    Buy Forex VPS plans
                </h1>

                <div className={styles.controls}>
                    <DataCenterSelector
                        value={selectedDataCenterId}
                        onChange={setSelectedDataCenterId}
                    />

                    <PeriodDropdown
                        value={selectedPeriodId}
                        onChange={setSelectedPeriodId}
                    />
                </div>

                {isLoading && (
                    <>
                        <p className={styles.visuallyHidden}>Loading tariffs...</p>

                        <div className={styles.tariffGrid} aria-hidden="true">
                            {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
                                <TariffCardSkeleton key={index} />
                            ))}
                        </div>
                    </>
                )}

                {error && (
                    <p className={styles.error} role="alert">
                        {error}
                    </p>
                )}

                {shouldShowEmptyState && (
                    <p className={styles.status}>
                        No tariffs found for this data center.
                    </p>
                )}

                {shouldShowTariffs && (
                    <div className={styles.tariffGrid}>
                        {visibleTariffs.map((tariff) => (
                            <TariffCard
                                key={tariff.id}
                                tariff={tariff}
                                selectedPeriodId={selectedPeriodId}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
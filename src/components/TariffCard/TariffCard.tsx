import { memo } from 'react';

import type { PurchasePeriodId } from '../../constants/purchasePeriods';
import type { TariffPlan } from '../../types/tariff';
import { TariffCardActions } from './TariffCardActions';
import { TariffCardHeader } from './TariffCardHeader';
import { TariffFeatureList } from './TariffFeatureList';
import { TariffTagList } from './TariffTagList';
import { TariffTerminals } from './TariffTerminals';
import styles from './TariffCard.module.scss';

interface TariffCardProps {
    tariff: TariffPlan;
    selectedPeriodId: PurchasePeriodId;
}

export const TariffCard = memo(function TariffCard({
                                                       tariff,
                                                       selectedPeriodId,
                                                   }: TariffCardProps) {
    return (
        <article className={styles.card}>
            {tariff.isBestChoice && (
                <span className={styles.badge}>Best choice</span>
            )}

            <TariffCardHeader
                title={tariff.title}
                currency={tariff.currency}
                priceByPeriod={tariff.priceByPeriod}
                selectedPeriodId={selectedPeriodId}
                specs={tariff.specs}
                details={tariff.details}
                chartIconCount={tariff.chartIconCount}
            />

            <TariffTerminals terminalCount={tariff.terminalCount} />

            <TariffFeatureList features={tariff.features} />

            <TariffTagList tags={tariff.tags} />

            <TariffCardActions
                orderId={tariff.orderId}
                tariffTitle={tariff.title}
            />
        </article>
    );
});
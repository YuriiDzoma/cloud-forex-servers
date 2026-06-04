import { memo } from 'react';

import type { PurchasePeriodId } from '../../constants/purchasePeriods';
import type { TariffDetailRow, TariffPriceMap } from '../../types/tariff';
import { formatPrice } from '../../utils/formatPrice';
import { getMonitoringIconByCount } from './monitoringIcons';
import { TariffDetailsDropdown } from './TariffDetailsDropdown';
import styles from './TariffCardHeader.module.scss';

interface TariffCardHeaderProps {
    title: string;
    currency: string;
    priceByPeriod: TariffPriceMap;
    selectedPeriodId: PurchasePeriodId;
    specs: string;
    details: TariffDetailRow[];
    chartIconCount: number;
}

export const TariffCardHeader = memo(function TariffCardHeader({
                                                                   title,
                                                                   currency,
                                                                   priceByPeriod,
                                                                   selectedPeriodId,
                                                                   specs,
                                                                   details,
                                                                   chartIconCount,
                                                               }: TariffCardHeaderProps) {
    const price = priceByPeriod[selectedPeriodId] ?? null;
    const monitoringIcon = getMonitoringIconByCount(chartIconCount);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <h2 className={styles.title}>{title}</h2>

                    <p className={styles.price}>
                        {price !== null ? formatPrice(price, currency) : '—'}
                        <span className={styles.period}>month</span>
                    </p>
                </div>

                <div className={styles.chartIcons} aria-hidden="true">
                    <img
                        className={styles.chartIcon}
                        src={monitoringIcon}
                        alt=""
                    />
                </div>
            </div>

            <TariffDetailsDropdown
                tariffTitle={title}
                specs={specs}
                details={details}
            />
        </header>
    );
});
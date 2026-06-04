import { memo } from 'react';

import okIcon from '../../assets/icons/ok.svg';
import styles from './TariffFeatureList.module.scss';

interface TariffFeatureListProps {
    features: string[];
}

export const TariffFeatureList = memo(function TariffFeatureList({
                                                                     features,
                                                                 }: TariffFeatureListProps) {
    return (
        <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Возможности</h3>

            <ul className={styles.features}>
                {features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                        <img src={okIcon} alt="" aria-hidden="true" />
                        {feature}
                    </li>
                ))}
            </ul>
        </section>
    );
});
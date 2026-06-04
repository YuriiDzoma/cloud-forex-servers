import { memo } from 'react';

import styles from './TariffCardSkeleton.module.scss';

export const TariffCardSkeleton = memo(function TariffCardSkeleton() {
    return (
        <article className={styles.skeletonCard} aria-hidden="true">
            <div className={styles.skeletonHeader}>
                <div className={styles.skeletonLineLarge} />
                <div className={styles.skeletonLineMedium} />
                <div className={styles.skeletonSpecs} />
            </div>

            <div className={styles.skeletonTerminals} />

            <div className={styles.skeletonSection}>
                <div className={styles.skeletonLineSmall} />
                <div className={styles.skeletonFeature} />
                <div className={styles.skeletonFeature} />
                <div className={styles.skeletonFeature} />
            </div>

            <div className={styles.skeletonSection}>
                <div className={styles.skeletonLineSmall} />
                <div className={styles.skeletonTags}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div className={styles.skeletonActions}>
                <div />
                <span />
            </div>
        </article>
    );
});
import { memo } from 'react';

import styles from './TariffTagList.module.scss';

interface TariffTagListProps {
    tags: string[];
}

export const TariffTagList = memo(function TariffTagList({
                                                             tags,
                                                         }: TariffTagListProps) {
    return (
        <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Подходит для</h3>

            <ul className={styles.tags}>
                {tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                        {tag}
                    </li>
                ))}
            </ul>
        </section>
    );
});
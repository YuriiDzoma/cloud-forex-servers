import { memo } from 'react';

import styles from './BuyButton.module.scss';

interface BuyButtonProps {
    orderId: string;
    tariffTitle: string;
}

export const BuyButton = memo(function BuyButton({
                                                     orderId,
                                                     tariffTitle,
                                                 }: BuyButtonProps) {
    return (
        <a
            className={styles.button}
            href={`/order/${orderId}`}
            aria-label={`Buy ${tariffTitle}`}
        >
            Купить
        </a>
    );
});
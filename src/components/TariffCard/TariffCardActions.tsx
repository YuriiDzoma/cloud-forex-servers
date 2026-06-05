import { memo } from 'react';

import shoppingIcon from '../../assets/icons/shopping.svg';
import { BuyButton } from '../BuyButton/BuyButton';
import styles from './TariffCardActions.module.scss';

interface TariffCardActionsProps {
    orderId: string;
    tariffTitle: string;
}

export const TariffCardActions = memo(function TariffCardActions({
                                                                     orderId,
                                                                     tariffTitle,
                                                                 }: TariffCardActionsProps) {
    return (
        <div className={styles.actions}>
            <BuyButton orderId={orderId} tariffTitle={tariffTitle} />

            <a
                className={styles.cartButton}
                href={`/order/${orderId}`}
                aria-label={`Add ${tariffTitle} to cart`}
            >
                <img
                    className={styles.cartIcon}
                    src={shoppingIcon}
                    alt=""
                    aria-hidden="true"
                />
            </a>
        </div>
    );
});
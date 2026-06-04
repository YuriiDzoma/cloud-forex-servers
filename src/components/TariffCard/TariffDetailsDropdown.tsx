import { memo, useEffect, useId, useRef, useState } from 'react';

import dotsIcon from '../../assets/icons/dots.svg';
import type { TariffDetailRow } from '../../types/tariff';
import styles from './TariffDetailsDropdown.module.scss';

interface TariffDetailsDropdownProps {
    tariffTitle: string;
    specs: string;
    details: TariffDetailRow[];
}

export const TariffDetailsDropdown = memo(function TariffDetailsDropdown({
                                                                             tariffTitle,
                                                                             specs,
                                                                             details,
                                                                         }: TariffDetailsDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownId = useId();
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <div className={styles.specsWrapper} ref={rootRef}>
            <div className={styles.specs}>
                <span>{specs}</span>

                <button
                    className={styles.detailsButton}
                    type="button"
                    aria-label={`Show ${tariffTitle} details`}
                    aria-expanded={isOpen}
                    aria-controls={dropdownId}
                    onClick={() => setIsOpen((currentValue) => !currentValue)}
                >
                    <img
                        className={styles.detailsIcon}
                        src={dotsIcon}
                        alt=""
                        aria-hidden="true"
                    />
                </button>
            </div>

            <dl
                className={styles.detailsDropdown}
                id={dropdownId}
                data-open={isOpen}
            >
                {details.map((detail) => (
                    <div key={detail.label} className={styles.detailsRow}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
});
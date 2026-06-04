import {
    type KeyboardEvent as ReactKeyboardEvent,
    useEffect,
    useId,
    memo,
    useRef,
    useState,
} from 'react';
import calendarIcon from '../../assets/icons/calendar.svg';

import {
    PURCHASE_PERIODS,
    type PurchasePeriodId,
} from '../../constants/purchasePeriods';
import styles from './PeriodDropdown.module.scss';

interface PeriodDropdownProps {
    value: PurchasePeriodId;
    onChange: (periodId: PurchasePeriodId) => void;
}

export const PeriodDropdown = memo(function PeriodDropdown({
                                                               value,
                                                               onChange,
                                                           }: PeriodDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownId = useId();
    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const selectedPeriod = PURCHASE_PERIODS.find((period) => period.id === value);

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

    const handleSelect = (periodId: PurchasePeriodId) => {
        onChange(periodId);
        setIsOpen(false);
        triggerRef.current?.focus();
    };

    const handleTriggerKeyDown = (
        event: ReactKeyboardEvent<HTMLButtonElement>,
    ) => {
        if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(true);
        }
    };

    return (
        <div className={styles.dropdown} ref={rootRef}>
            <span className={styles.label}>Rent period</span>

            <button
                ref={triggerRef}
                className={styles.trigger}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={dropdownId}
                onClick={() => setIsOpen((currentValue) => !currentValue)}
                onKeyDown={handleTriggerKeyDown}
            >
                <span className={styles.triggerText}>
                    <img src={calendarIcon} alt="" aria-hidden="true" />
                    {selectedPeriod?.label}
                </span>
                <span className={styles.arrow} aria-hidden="true" />
            </button>

            <ul
                className={styles.menu}
                id={dropdownId}
                role="listbox"
                data-open={isOpen}
            >
                {PURCHASE_PERIODS.map((period) => {
                    const isSelected = period.id === value;

                    return (
                        <li key={period.id} className={styles.option} role="presentation">
                            <button
                                className={styles.optionButton}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                data-selected={isSelected}
                                tabIndex={isOpen ? 0 : -1}
                                onClick={() => handleSelect(period.id)}
                            >
                                <span>{period.label}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
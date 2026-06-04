import { memo } from 'react';

import questionIcon from '../../assets/icons/question.svg';
import terminalIcon from '../../assets/icons/terminal.svg';
import styles from './TariffTerminals.module.scss';

interface TariffTerminalsProps {
    terminalCount: number;
}

export const TariffTerminals = memo(function TariffTerminals({
                                                                 terminalCount,
                                                             }: TariffTerminalsProps) {
    return (
        <div className={styles.terminals}>
            <span className={styles.terminalsLabel}>
                <img src={terminalIcon} alt="" aria-hidden="true" />
                Terminals
            </span>

            <span className={styles.terminalCount}>
                {terminalCount}
                <img src={questionIcon} alt="" aria-hidden="true" />
            </span>
        </div>
    );
});
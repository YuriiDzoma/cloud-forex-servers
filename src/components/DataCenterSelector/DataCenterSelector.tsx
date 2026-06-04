import {memo} from 'react';
import {DATA_CENTERS, type DataCenterId} from '../../constants/dataCenters';
import styles from './DataCenterSelector.module.scss';

interface DataCenterSelectorProps {
    value: DataCenterId;
    onChange: (dataCenterId: DataCenterId) => void;
}

export const DataCenterSelector = memo(function DataCenterSelector({
                                                                       value,
                                                                       onChange,
                                                                   }: DataCenterSelectorProps) {
    return (
        <fieldset className={styles.selector}>
            <legend className={styles.label}>Data center</legend>

            <div className={styles.options}>
                {DATA_CENTERS.map((dataCenter) => {
                    const isSelected = dataCenter.id === value;

                    return (
                        <button
                            key={dataCenter.id}
                            className={styles.option}
                            type="button"
                            aria-pressed={isSelected}
                            data-selected={isSelected}
                            onClick={() => onChange(dataCenter.id)}
                        >
                            <img
                                className={styles.flag}
                                src={dataCenter.flagSrc}
                                alt="flag"
                                aria-hidden="true"
                            />

                            <span className={styles.optionText}>{dataCenter.label}</span>
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
});
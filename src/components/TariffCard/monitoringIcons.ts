
import monitoring2Icon from '../../assets/monitoring/monitoring2.svg';
import monitoring3Icon from '../../assets/monitoring/monitoring3.svg';
import monitoring4Icon from '../../assets/monitoring/monitoring4.svg';
import monitoring6Icon from '../../assets/monitoring/monitoring6.svg';

const MONITORING_ICON_BY_COUNT: Record<number, string> = {
    2: monitoring2Icon,
    3: monitoring3Icon,
    4: monitoring4Icon,
    6: monitoring6Icon,
};

export function getMonitoringIconByCount(count: number): string {
    return MONITORING_ICON_BY_COUNT[count] ?? monitoring2Icon;
}
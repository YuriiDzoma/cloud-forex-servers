export interface TariffStaticContent {
    sortOrder: number;
    specs: string;
    terminalCount: number;
    chartIconCount: number;
    features: string[];
    tags: string[];
    isBestChoice?: boolean;
}

export const TARIFF_CONTENT_BY_TITLE: Record<string, TariffStaticContent> = {
    'Cloud Forex 1': {
        sortOrder: 1,
        specs: '2 TRM · 5 RAM · 35 NVMe · 1000 Mbps',
        terminalCount: 2,
        chartIconCount: 2,
        features: [
            'Бесперебойный доступ к рынку 24/7',
            'Стабильная ручная торговля',
            'Базовая автоматизация и скрипты',
        ],
        tags: [
            'Личное использование',
            'Микро-счета',
            'Свинг-трейдинг',
            'Начальный уровень',
            'Старт автоматизации',
        ],
    },

    'Cloud Forex 2': {
        sortOrder: 2,
        specs: '3 TRM · 5 RAM · 35 NVMe · 1000 Mbps',
        terminalCount: 3,
        chartIconCount: 3,
        features: [
            'Диверсификация торговых стратегий',
            'Работа простых роботов и советников',
            'Мониторинг со стандартными индикаторами',
        ],
        tags: [
            'Среднесрочные стратегии',
            'Интрадей-трейдинг',
            'Мультиаккаунтинг',
            'Автоторговля',
            'Контроль рисков',
        ],
    },

    'Cloud Forex 3': {
        sortOrder: 3,
        specs: '4 TRM · 5 RAM · 35 NVMe · 1000 Mbps',
        terminalCount: 4,
        chartIconCount: 4,
        isBestChoice: true,
        features: [
            'Мгновенный отклик и исполнение',
            'Комфортный бэктестинг и оптимизация',
            'Работа с продвинутыми индикаторами',
        ],
        tags: [
            'Оптимизация роботов',
            'Тех анализ',
            'Тестирование стратегий',
            'Алгоритмическая торговля',
        ],
    },

    'Cloud Forex 4': {
        sortOrder: 4,
        specs: '5 TRM · 5 RAM · 35 NVMe · 1000 Mbps',
        terminalCount: 6,
        chartIconCount: 6,
        features: [
            'Профессиональное управление капиталом',
            'Запуск сложных систем и алгоритмов',
            'Обработка больших архивов данных',
        ],
        tags: [
            'Интенсивный трейдинг',
            'Копирование сделок',
            'Увеличенная нагрузка',
        ],
    },
};

export function getTariffContentByTitle(
    title: string,
): TariffStaticContent | null {
    return TARIFF_CONTENT_BY_TITLE[title] ?? null;
}
const CURRENCY_SYMBOLS: Record<string, string> = {
    EUR: '€',
};

export function formatPrice(price: number, currency = 'EUR'): string {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    const currencySymbol = CURRENCY_SYMBOLS[currency] ?? currency;

    return `${currencySymbol} ${formattedPrice}`;
}
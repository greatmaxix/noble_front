export function currencyFormatter() {
    return new Intl.NumberFormat('en-US', {
        currency: 'KZT',
        maximumFractionDigits: 0
    });
}
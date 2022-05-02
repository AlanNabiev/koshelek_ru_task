function formatAmountBySymbol(amount: number, symbol: string) {
  switch (symbol) {
    case 'btcusdt':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 6,
        maximumFractionDigits: 6
      }).format(amount)
    case 'bnbbtc':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
      }).format(amount)
    case 'ethbtc':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(amount)
    default:
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 6
      }).format(amount)
  }
}

function formatPriceBySymbol(price: number, symbol: string) {
  switch (symbol) {
    case 'btcusdt':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      }).format(price)
    case 'bnbbtc':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 5,
        maximumFractionDigits: 7
      }).format(price)
    case 'ethbtc':
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 5
      }).format(price)
    default:
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7
      }).format(price)
  }
}
function formatTotal(total: number) {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  }).format(total)
}

export { formatAmountBySymbol, formatPriceBySymbol, formatTotal }

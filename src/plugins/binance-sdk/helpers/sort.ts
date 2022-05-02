import {
  formatAmountBySymbol,
  formatPriceBySymbol,
  formatTotal
} from './filters'

export type Order = {
  price: string | number
  amount: string | number
  total: string | number
  _id: number
}

export function transformOrders(
  array: [string, string][],
  symbol: string
): Order[] {
  return array.map((e: [string, string]) => {
    const price = formatPriceBySymbol(parseFloat(e[0]), symbol)
    const amount = formatAmountBySymbol(parseFloat(e[1]), symbol)
    const total = formatTotal(parseFloat(e[0]) * parseFloat(e[1]))
    const _id = (Math.random() * parseFloat(e[0])) / Math.random()
    const formated = {
      price,
      amount,
      total,
      _id
    }
    return formated
  })
}

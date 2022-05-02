import { axiosGet } from './controllers/httpClient'

const END_POINT = '/depth'

function getOrders(symbol: string): Promise<any> {
  const params = { symbol: symbol.toUpperCase(), limit: 500 }
  return axiosGet(END_POINT, params)
}

export { getOrders }

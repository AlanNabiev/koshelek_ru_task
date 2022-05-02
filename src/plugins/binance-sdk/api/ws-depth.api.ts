import { wsClient } from './controllers/wsClient'
export const subscribeToOrders = (symbol: string): WebSocket => {
  const END_POINT = `/${symbol.toLowerCase()}@depth`
  return wsClient(END_POINT)
}

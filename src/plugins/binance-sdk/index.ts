import { App } from 'vue'
import { getOrders } from './api/depth.api'
import { subscribeToOrders } from './api/ws-depth.api'
import { transformOrders, Order } from './helpers/sort'
export default {
  install(app: App): void {
    app.config.globalProperties.$binanceSdk = {
      httpService: {},
      webSocketService: {},
      utils: {}
    }
    app.config.globalProperties.$binanceSdk.httpService.getOrders = async (
      symbol = 'btcusdt'
    ) => {
      interface Response {
        asks: Order[]
        bids: Order[]
        lastUpdateId: number
      }
      const res: Response = {
        asks: [],
        bids: [],
        lastUpdateId: 0
      }
      try {
        const data = await getOrders(symbol)
        const { asks, bids, lastUpdateId } = data.data
        res.asks = transformOrders(asks, symbol)
        res.bids = transformOrders(bids, symbol)
        res.lastUpdateId = lastUpdateId
      } catch (err) {
        console.log(err)
      }
      return res
    }
    app.config.globalProperties.$binanceSdk.webSocketService = {
      connect(symbol = 'btcusdt') {
        this.$ws = subscribeToOrders(symbol)
      },
      stop() {
        this.$ws.close(1000)
      }
    }
    app.config.globalProperties.$binanceSdk.utils.transformOrders =
      transformOrders
  }
}

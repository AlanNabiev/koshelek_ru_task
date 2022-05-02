import { App } from 'vue'
import eventbus from './eventbus'
import binanceSdk from './binance-sdk'

export default {
  install: (app: App): void => {
    app.use(eventbus)
    app.use(binanceSdk)
  }
}

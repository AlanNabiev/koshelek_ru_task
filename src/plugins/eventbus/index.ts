import { App } from 'vue'
import mitt from 'mitt'
export default {
  install(app: App): void {
    app.config.globalProperties.$eventbus = mitt()
  }
}

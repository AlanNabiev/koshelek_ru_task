import { getCurrentInstance } from 'vue'
import { computed } from 'vue'
export default function useCore() {
  const app = getCurrentInstance()
  const prototype = app?.appContext.config.globalProperties
  const binanceSdk = prototype?.$binanceSdk
  const eventbus = prototype?.$eventbus

  return {
    binanceSdk: computed(() => binanceSdk),
    eventbus: computed(() => eventbus)
  }
}

<script setup lang="ts">
import { ref, reactive, onBeforeUnmount } from 'vue'
import Table from '@/components/Table.vue'
import Loader from '@/components/Loader.vue'
import useCore from '@/composables/useCore'
import { symbols } from '@/constants/app'
import { Order } from '@/types'

const { binanceSdk, eventbus } = useCore()
const loading = ref(false)
const symbol = ref(symbols[0])
const orders = reactive<{
  bids: Order[]
  asks: Order[]
  lastUpdateId: number
}>({
  bids: [],
  asks: [],
  lastUpdateId: 0
})

async function getOrders() {
  loading.value = true
  const { asks, bids, lastUpdateId } =
    await binanceSdk.value.httpService.getOrders(symbol.value)
  orders.asks = asks
  orders.bids = bids
  orders.lastUpdateId = lastUpdateId
  loading.value = false
}
function subscribeToOrders() {
  binanceSdk.value.webSocketService.connect(symbol.value)
  binanceSdk.value.webSocketService.$ws.onmessage = (event: any) => {
    const { u, U, a, b } = JSON.parse(event.data)
    if (U <= orders.lastUpdateId + 1 || u >= orders.lastUpdateId + 1) {
      const filteredAsks = a.filter(
        (item: [string, string]) => parseFloat(item[1]) != 0
      )
      const filteredBids = b.filter(
        (item: [string, string]) => parseFloat(item[1]) != 0
      )
      const transformedAsks =
        binanceSdk.value.utils.transformOrders(filteredAsks)
      const transformedBids =
        binanceSdk.value.utils.transformOrders(filteredBids)

      orders.asks = [
        ...transformedAsks,
        ...orders.asks.slice(0, orders.asks.length - transformedAsks.length)
      ]

      orders.bids = [
        ...transformedBids,
        ...orders.bids.slice(0, orders.bids.length - transformedBids.length)
      ]

      eventbus.value.emit('update:Diff', {
        newAsk: transformedAsks[0] as Order,
        newBid: transformedBids[0] as Order
      })
    }
  }
}
function unsubscribeFromOrders() {
  binanceSdk.value.webSocketService.stop()
}
subscribeToOrders()
getOrders()
eventbus.value.on('update:Symbol', async (sym: string) => {
  symbol.value = sym
  unsubscribeFromOrders()
  subscribeToOrders()
  getOrders()
})

onBeforeUnmount(() => {
  eventbus.value.all.clear()
})
</script>

<template>
  <div class="home">
    <Loader v-if="loading" class="home-loader"></Loader>
    <div v-else>
      <h1 class="home-header">{{ symbol }}</h1>
      <div class="home-container">
        <Table title="Bid" :ordersList="orders.bids"></Table>
        <Table title="Ask" :ordersList="orders.asks"></Table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-header {
  font-size: 40px;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
}
.home-container {
  display: flex;
}
.home-loader {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 768px) {
  .home-loader {
    left: 40%;
  }
}
</style>

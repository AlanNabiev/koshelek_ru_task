<script setup lang="ts">
import { defineProps } from 'vue'
import { Order } from '@/types'

defineProps<{
  orders: { bid: Order; ask: Order }[]
}>()
</script>

<template>
  <div v-if="orders.length" class="orders-container">
    <h1 class="orders-header">Hot</h1>
    <ul class="orders-list">
      <li v-for="order in orders" :key="order.bid._id">
        <hr class="order-line" />

        <p>
          New Bid: <span class="order-info">{{ order.bid.price }}</span>
        </p>
        <hr class="order-line" />

        <p>
          New Ask: <span class="order-info">{{ order.ask.price }}</span>
        </p>
        <hr class="order-line" />
      </li>
    </ul>
  </div>
</template>

<style>
.orders-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(80vh - 185px);
  overflow-y: auto;
  border: 1px solid #666;
  padding: 0 12px;
}
.order-info {
  color: var(--secondary-blue);
  font-weight: 600;
  font-size: 16px;
}
.order-line {
  margin: 5px 0;
}
.orders-header {
  text-align: center;
}
.orders-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

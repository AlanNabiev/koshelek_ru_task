<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title?: string
  ordersList: any[]
}>()
</script>

<template>
  <table>
    <caption>
      {{
        title
      }}
    </caption>
    <thead>
      <tr>
        <th>Amount</th>
        <th>Price</th>
        <th class="mobile__hidden">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in ordersList" :key="order._id">
        <td>{{ order.amount }}</td>
        <td>{{ order.price }}</td>
        <td class="mobile__hidden">{{ order.total }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  background-color: #f6f6f6;
  width: 100%;
}
td,
th {
  border: 1px solid #999;
  padding: 10px;
  text-align: center;
  width: 100%;
}
th {
  background: var(--primary-blue);
  color: white;
  border-radius: 0;
}
tr {
  display: flex;
  justify-content: space-between;
}
tr:hover {
  background-color: var(--secondary-blue);
}
tbody {
  display: block;
  height: calc(100vh - 220px);
  overflow: auto;
  overflow-y: overlay;
}
table:hover > tbody::-webkit-scrollbar-thumb {
  background-color: #ccc;
}
table:hover > tbody::-webkit-scrollbar {
  -webkit-appearance: none;
}

table:hover > tbody::-webkit-scrollbar:horizontal {
  height: 13px;
}

table:hover > tbody::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: var(--primary-blue);
}

table:hover > tbody::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--secondary-blue);
}

caption {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  background-color: var(--primary-blue);
  border: 1px solid #999;
  color: white;
}

@media (max-width: 768px) {
  .mobile__hidden {
    display: none;
  }
  table {
    font-size: 12px;
  }
  caption {
    font-size: 20px;
  }
  td,
  th {
    padding: 7px;
  }
  tbody {
    height: calc(100vh - 185px);
  }
  table:hover > tbody::-webkit-scrollbar {
    width: 8px;
  }
}
</style>

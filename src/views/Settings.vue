<script setup lang="ts">
import { ref, watch } from 'vue'
import useCore from '@/composables/useCore'
import Select from '@/components/Select.vue'
import { symbols } from '@/constants/app'

const { eventbus } = useCore()
const selectedSymbol = ref('')

watch(selectedSymbol, (newValue) => {
  eventbus.value.emit('update:Symbol', newValue)
})
</script>

<template>
  <div class="settings">
    <div class="settings-main">
      <Select
        label="Select pair"
        v-model="selectedSymbol"
        :options="symbols"
      ></Select>
      <router-link to="/" class="settings-button">Go to order book</router-link>
    </div>
    <div class="settings-info">
      Select a pair from the pop-up in the list. After your selection, the data
      will be automatically updated. There will be unsubscriptions from the
      previous pair and subscriptions to the current one. Then you can return to
      the main tab by navigating in the header or by clicking on the "Go to
      order book" button
    </div>
  </div>
</template>
<style scoped>
.settings {
  height: 100vh;
  padding: 24px 36px;
  display: flex;
  column-gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
}
.settings-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.settings-info {
  padding: 20px;
  border-radius: 20px;
  background-color: var(--primary-blue);
  color: #fff;
  flex-basis: 40%;
}
.settings-button {
  background-color: var(--primary-blue);
  padding: 16px 32px;
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  align-self: center;
  text-align: center;
  font-weight: 600;
}
.settings-button:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .settings {
    flex-direction: column-reverse;
    justify-content: start;
    column-gap: 0;
    row-gap: 24px;
  }
  .settings-button {
    align-self: stretch;
  }
  .settings-info {
    flex-basis: content;
  }
}
</style>

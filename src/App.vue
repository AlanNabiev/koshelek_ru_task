<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <Component :is="Component"></Component>
      </keep-alive>
    </router-view>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
body,
html {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}
:root {
  --primary-blue: #1b5f9d;
  --secondary-blue: #8fb4d7;
}
.app-container {
  padding: 0 90px;
}
@media (max-width: 768px) {
  .app-container {
    padding: 0 24px;
  }
}
</style>

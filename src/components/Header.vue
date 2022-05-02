<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/settings">Manage</router-link>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.nav {
  padding: 20px;
  background-color: #0f2b48;
  display: flex;
  column-gap: 8px;
}

.nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-blue);
}

.nav a.router-link-exact-active {
  color: var(--secondary-blue);
  text-decoration: underline;
}
</style>

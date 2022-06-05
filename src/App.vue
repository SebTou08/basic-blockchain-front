<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Dashboard from "./pages/Dashboard.vue";</script>
<template>
  <Suspense>
    <template #default>
      <Dashboard/>
    </template>
    <template #fallback>
      <h2>Cargando</h2>
    </template>
  </Suspense>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

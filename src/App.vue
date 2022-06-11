<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, watch } from "vue";
import Dashboard from "./pages/Dashboard.vue";
import router from "./plugins/router";

const tab = ref("blockchain");
watch(tab, (val) => {
  location.reload();
  router.push(tab.value);
});
</script>
<template>
  <div class="toolbar">
    <q-toolbar class="text-white shadow-2 rounded-borders toolbarcolor">
      <q-btn flat label="Mi blockchainero" />
      <q-space />
      <q-tabs v-model="tab" shrink>
        <router-link :to="{ name: 'dashboard' }">
          <q-tab name="dashboard" label="Blockchain" />
        </router-link>
        <router-link :to="{ name: 'newblock' }">
          <q-tab name="newblock" label="New Block" />
        </router-link>
      </q-tabs>
    </q-toolbar>
    <br />
  </div>
  <router-view v-slot="{ Component }">
    <Suspense>
      <template #default>
        <transition
          enter-active-class="animate__animated animate__lightSpeedInLeft"
          leave-active-class="animate__animated animate__zoomOutDown"
        >
          <Component :is="Component" style="margin-top: 70px" />
        </transition>
      </template>
      <template #fallback> </template>
    </Suspense>
  </router-view>
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

:root {
  --animate-duration: 4s;
  --animate-delay: 10.9s;
  background: #16222a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.toolbar {
  position: fixed;
  top: 0;
  min-width: 100vw;
}
.toolbarcolor {
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>

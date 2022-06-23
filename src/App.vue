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
  color: #1d1f21;
  margin-top: 60px;
}

:root {
  --animate-duration: 4s;
  --animate-delay: 10.9s;
  background-image: radial-gradient(
    circle,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
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

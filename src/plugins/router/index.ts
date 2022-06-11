import NewBlockVue from "../../pages/newBlock/NewBlock.vue";
import { createWebHistory, createRouter } from "vue-router";
import DashboardVue from "../../pages/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardVue,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardVue,
  },
  {
    path: "/newblock",
    name: "newblock",
    component: NewBlockVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

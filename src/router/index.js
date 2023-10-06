import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageAbout from "../views/PresidentView.vue";
import LegisterView from "../views/LegisterView.vue";
import Beef from "../views/Beef.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/president",
      name: "president",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageAbout,
    },
    {
      path: "/Legislator",
      name: "Legislator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LegisterView,
    },
    {
      path: "/Policy",
      name: "Beef",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Beef,
    },
  ],
});

export default router;

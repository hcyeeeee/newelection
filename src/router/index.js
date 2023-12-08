import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageAbout from "../views/PresidentView.vue";
import LegisterView from "../views/LegisterView.vue";
import Beef from "../views/Policy.vue";
import Question from "../views/Question.vue";
import infographics from "../views/infographics.vue";
import videos from "../views/Videos.vue";
import test from "../views/test.vue";
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
      component: PageAbout,
    },
    {
      path: "/Legislator",
      name: "Legislator",
      component: LegisterView,
    },
    {
      path: "/Policy",
      name: "Beef",
      component: Beef,
      meta: {
        title: "最新》2024總統大選政策懶人包、候選人政見一次看 ｜民視新聞網",
      },
    },
    {
      path: "/Question",
      name: "Question",
      component: Question,
    },
    {
      path: "/infographics",
      name: "infographics",
      component: infographics,
    },
    {
      path: "/videos",
      name: "videos",
      component: videos,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;

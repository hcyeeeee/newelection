import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageAbout from "../views/PresidentView.vue";
import LegisterView from "../views/LegisterView.vue";
import Beef from "../views/Policy.vue";
import Question from "../views/Question.vue";
import infographics from "../views/infographics.vue";
import videos from "../views/Videos.vue";
import game from "../views/game.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "最新》2024台灣總統、立委大選開票結果專區｜民視新聞網",
      },
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
      meta: {
        title: "最新》2024立委、不分區立委名單一次看｜民視新聞網",
      },
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
      meta: {
        title: "2024誰當家》投票帶什麼？投票QA懶人包　一次看！ ｜民視新聞網",
      },
    },
    {
      path: "/infographics",
      name: "infographics",
      component: infographics,
      meta: {
        title:
          "2024誰當家》歷屆正副總統得票數、立委席次變化圖表一次看 ｜民視新聞網",
      },
    },
    {
      path: "/videos",
      name: "videos",
      component: videos,
    },
    {
      path: "/game",
      name: "game",
      component: game,
      meta: {
        title:
          "2024誰當家》選舉測驗－您的理念最接近哪位總統候選人？｜民視新聞網",
      },
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

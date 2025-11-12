<template>
  <TheHeader />
  <TheMarquee />
  <div class="all">
    <TheSidebar />
    <router-view>
    </router-view>
    <TheCalender />
  </div>
  <ScrollUp />
  <div class="footer">Copyright © 2023 民視新聞網路部 社群中心</div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheCalender from './components/TheCalender.vue'
import TheSidebar from './components/TheSidebar.vue'
import ScrollUp from './components/ScrollUp.vue'
import TheMarquee from './components/TheMarquee.vue'

export default {
  components: {
    TheHeader,
    TheCalender,
    TheSidebar,
    ScrollUp,
    TheMarquee,
  },
  created() {
    AOS.init();
  },
}
</script>


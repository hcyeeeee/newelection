<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />
    <LegislatorTab />
    <LegislatorList />
    <LegislatorNews />


  </div>
</template>

<script >

import 'animate.css'
import TheBanner from '../components/TheBanner.vue'
import LegislatorTab from '../components/LegislatorTab.vue'
import LegislatorList from '../components/LegislatorList.vue'
import LegislatorNews from '../components/LegislatorNews.vue'
import TheMarquee from '../components/TheMarquee.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default {
  components: {
    TheMarquee,
    TheBanner,
    LegislatorNews,
    LegislatorTab,
    LegislatorList,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  created() {

    !function (e, n, i, s) { var d = "InfogramEmbeds"; var o = e.getElementsByTagName(n)[0]; if (window[d] && window[d].initialized) window[d].process && window[d].process(); else if (!e.getElementById(i)) { var r = e.createElement(n); r.async = 1, r.id = i, r.src = s, o.parentNode.insertBefore(r, o) } }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");

  },
}
</script>
<style></style>



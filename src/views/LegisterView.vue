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
import TheBanner from '../components/TheBanner.vue'
import LegislatorTab from '../components/LegislatorTab.vue'
import LegislatorList from '../components/LegislatorList.vue'
import LegislatorNews from '../components/LegislatorNews.vue'
import TheMarquee from '../components/TheMarquee.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
}
</script>
<style></style>



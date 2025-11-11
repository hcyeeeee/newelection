<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <!-- <LegislatorTab /> -->
    <VoteLegis />
    <VoteLegisMb />
    <LegislatorNews />


  </div>
</template>

<script >
import TheBanner from '../components/VoteBanner.vue'
// import LegislatorTab from '../components/LegislatorTab.vue'
import LegislatorList from '../components/LegislatorList.vue'
import VoteLegis from '../components/VoteLegis.vue'
import VoteLegisMb from '../components/VoteLegisMb.vue'
import LegislatorNews from '../components/LegislatorNews.vue'
import TheMarquee from '../components/VoteMarquee.vue'
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
    // LegislatorTab,
    LegislatorList,
    VoteLegis,
    VoteLegisMb,
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



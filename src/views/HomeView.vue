<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <MobileCalender />
    <HomeLegis />
    <!-- <div data-aos="zoom-in">
      <HomePresi />
    </div> -->
    <HomePresi />
    <HomeVideo />
  </div>
</template>


<script>
import sectionBanner from '../components/TheBanner.vue'
import MobileCalender from '../components/MobileCalender.vue'
import TheMarquee from '../components/TheMarquee.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'

export default {
  components: {
    sectionBanner,
    MobileCalender,
    TheMarquee,
    HomeLegis,
    HomePresi,
    HomeVideo,
  }
};

</script>


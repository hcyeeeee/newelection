<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <HomeLegis />
    <HomePresi />
    <HomeVideo />
  </div>
</template>


<script>
import sectionBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'

export default {
  components: {

    sectionBanner,
    TheMarquee,
    HomeLegis,
    HomePresi,
    HomeVideo,
  },
};

</script>


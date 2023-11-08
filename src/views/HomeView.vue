<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <TheMarqueeMB />
    <!-- <VotePresi /> -->
    <HomeLegis />
    <HomePresi />
    <HomeVideo />
  </div>
</template>
<script>
import sectionBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
// import VotePresi from '../components/VotePresi.vue'
import TheMarqueeMB from '../components/TheMarqueeMb.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'

export default {
  components: {
    sectionBanner,
    TheMarquee,
    // VotePresi,
    TheMarqueeMB,
    HomeLegis,
    HomePresi,
    HomeVideo,
  }
};

</script>


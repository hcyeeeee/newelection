<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <VotePresi />
    <VoteLegis />
    <HomePresi />
    <HomeLegis />
  </div>
</template>
<script>
import sectionBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
import VotePresi from '../components/VotePresi.vue'
import VoteLegis from '../components/VoteLegis.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'

export default {
  components: {
    sectionBanner,
    TheMarquee,
    VotePresi,
    VoteLegis,
    HomeLegis,
    HomePresi,
    HomeVideo,

  }
};

</script>


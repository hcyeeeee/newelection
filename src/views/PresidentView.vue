<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <VotePresi />
    <!-- <PresidentInfo /> -->
    <PresidentNews />
  </div>
</template>
<script>
import TheBanner from '../components/VoteBanner.vue'
import VotePresi from '../components/VotePresi.vue'
// import PresidentInfo from '../components/PresidentInfo.vue'
import PresidentNews from '../components/PresidentNews.vue'
import TheHeader from '../components/TheHeader.vue'
import TheMarquee from '../components/VoteMarquee.vue'
export default {
  components: {
    TheMarquee,
    TheBanner,
    TheHeader,
    VotePresi,
    // PresidentInfo,
    PresidentNews
  }
}
</script>

<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <PresidentInfo />
    <PresidentNews />
  </div>
</template>
<script >
import TheBanner from '../components/TheBanner.vue'
import PresidentInfo from '../components/PresidentInfo.vue'
import PresidentNews from '../components/PresidentNews.vue'
import TheHeader from '../components/TheHeader.vue'
import TheMarquee from '../components/TheMarquee.vue'
export default {
  components: {
    TheMarquee,
    TheBanner,
    TheHeader,
    PresidentInfo,
    PresidentNews
  }
}
</script>



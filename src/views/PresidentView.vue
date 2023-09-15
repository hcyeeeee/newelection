<template>
  <div class="about">
    <TheBanner />
    <PresidentInfo />
    <PresidentNews />
  </div>
</template>
<script >
import 'animate.css'
import TheBanner from '../components/TheBanner.vue'
import PresidentInfo from '../components/PresidentInfo.vue'
import PresidentNews from '../components/PresidentNews.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {
    TheBanner,
    TheHeader,
    PresidentInfo,
    PresidentNews
  }
}
</script>
<style></style>



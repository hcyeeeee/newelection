<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <VotePresi />
    <PresidentNews />
  </div>
</template>
<script setup>
import TheBanner from '../components/VoteBanner.vue'
import VotePresi from '../components/VotePresi.vue'
import PresidentNews from '../components/PresidentNews.vue'
import TheHeader from '../components/TheHeader.vue'
import TheMarquee from '../components/VoteMarquee.vue'
</script>

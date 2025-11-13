<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <VotePresi />
    <VoteLegis />
    <VoteLegisMb />
  </div>
</template>

<script setup>
import sectionBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
import VotePresi from '../components/VotePresi.vue'
import VoteLegis from '../components/VoteLegis.vue'
import VoteLegisMb from '../components/VoteLegisMb.vue'
</script>

<style lang="scss" scoped>
.game {
  width: 110px;
  height: 60px;
  position: fixed;
  z-index: 999;
  bottom: 4rem;
  left: 0;
  margin: auto;
  background: transparent;

}

#live {
  position: absolute;
  width: 200px;
  height: 30px;

}

.pc {
  display: none;

  @include pad {
    display: block;
  }
}
</style>

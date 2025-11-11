<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <VotePresi />
    <VoteLegis />
    <VoteLegisMb />
  </div>
</template>
<script>
import sectionBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
import VotePresi from '../components/VotePresi.vue'
import VoteLegis from '../components/VoteLegis.vue'
import VoteLegisMb from '../components/VoteLegisMb.vue'


export default {
  components: {
    sectionBanner,
    TheMarquee,
    VotePresi,
    VoteLegis,
    VoteLegisMb,
  }
};

</script>
<style lang="scss" scoped>
@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

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

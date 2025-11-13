<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <VoteLegis />
    <VoteLegisMb />
    <LegislatorNews />
  </div>
</template>

<script setup>
import TheBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
import LegislatorList from '../components/LegislatorList.vue'
import VoteLegis from '../components/VoteLegis.vue'
import VoteLegisMb from '../components/VoteLegisMb.vue'
import LegislatorNews from '../components/LegislatorNews.vue'


import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]
</script>

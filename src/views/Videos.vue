<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img loading="lazy" src="@/assets/video.png" alt="">
        <h2>影音專區</h2>
      </div>

      <div class="videolayout">
        <!-- Tabs -->
        <ul class="tabs navtab" style="margin-bottom: 1rem;">
          <li v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
            :class="{ active: index === currentTab }">
            <h3>{{ tab.title }}</h3>
          </li>
        </ul>

        <!-- Video -->
        <div class="video-container">
          <iframe width="100%" height="100%"
            :src="`https://www.youtube.com/embed/videoseries?si=${tabs[currentTab].si}&list=${tabs[currentTab].list}`"
            title="YouTube video player" frameborder="0" name="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
      <div style="display: flex; align-items: center; margin: .5rem auto;">
        <img loading="lazy" src="@/assets/bell.png" alt="" style="width: 35px;">
        {{ tabs[currentTab].content }}
      </div>
    </div>
    <homevideo />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TheBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
import homevideo from '../components/HomeVideo.vue'

const currentTab = ref(0)

const tabs = ref([
  {
    title: "台灣最前線",
    content: "讓《台灣最前線》的許仲江，與來賓共同為您精闢分析每天時事！",
    si: '_jz4fTxV5-60kG2s',
    list: 'PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K'
  },
  {
    title: "台灣向前行",
    content: "讓《台灣向前行》的張孟琦，與來賓共同為您精闢分析每天時事！",
    si: 'vTWIskNPFvGW_bl6',
    list: 'PLf2VRok0uRO0px2iZrtznovVe10LfcfJO'
  },
  {
    title: "全國第一勇",
    content: "讓《全國第一勇》的徐國勇，與來賓共同為您精闢分析每天時事！",
    si: '04hEzUmcBl7J8bUW',
    list: 'PLBXFGXTYyFgAmbYv9Bgq9cxcWcwW6qgJA'
  },
  {
    title: "民視佮你講",
    content: "時事政治、生活氣象、熱門話題，我們通通佮你講！網友們，快點一起跟主持人聊天吧！",
    si: 'yNoxUNLhcledJ-AJ',
    list: 'PLf2VRok0uRO340tZz8twmmwT8k-36Z2O5'
  }
])
</script>


<style lang="scss" scoped>
ul {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;

  li {
    cursor: pointer;
    list-style: none;
    padding: 0.4rem 1rem !important;
    border-radius: 5px;
    transition: 0.3s;
    background-color: #fee2c1;
    color: #0f0f0f !important;

    &:active,
    &:hover {
      background-color: #fee2c1;
      background-color: #f08308;
      color: #fff !important;
    }
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
</style>

<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img loading="lazy" srcset="../assets/video.png" alt="">
        <h2>影音專區</h2>
      </div>
      <div class="videolayout">
        <ul class="tabs navtab" style="margin-bottom: 1rem;">
          <li v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
            :class="{ active: index === currentTab }">
            <h3>{{ tab.title }}</h3>
          </li>
        </ul>
        <div class="video-container">
          <iframe width="100%" height="100%"
            :src="'https://www.youtube.com/embed/videoseries?si=' + tabs[currentTab].si + '&amp;list=' + tabs[currentTab].list"
            title="YouTube video player" frameborder="0" name="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
      <div style="display: flex; align-items: center; margin: .5rem auto;">
        <img loading="lazy" srcset="../assets/bell.png" alt="" style="width: 35px;"> {{ tabs[currentTab].content }}
      </div>
    </div>
    <homevideo />
  </div>
</template>
<script>
import TheBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
import homevideo from '../components/HomeVideo.vue'
export default {
  components: {
    TheMarquee,
    TheBanner,
    homevideo,
  },
  data() {
    return {
      activeTab: 0,
      currentTab: 0,
      tabs: [
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
      ]
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index;
    },
  }
};
</script>
<style lang="scss" scoped>
@mixin phone {
  @media (min-width: 500px) {
    @content;
  }
}

ul {
  flex-direction: row;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10%;
  margin: auto;
  display: flex;
  cursor: pointer;

  @include phone {
    width: 90%;
    gap: 1rem;
  }

  li {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #d9d9d9;
    padding: 0.1rem 0;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid #ffa500;
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

// s
</style>



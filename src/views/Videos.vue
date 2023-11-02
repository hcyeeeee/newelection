<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img src="../assets/policy.png" alt="">
        <h2>影音專區</h2>
      </div>
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }">
          <a :href="'https://www.youtube.com/embed/videoseries?si=' + tab.si + '&amp;list=' + tab.list"
            target="video-frame">
            {{ tab.label }}
          </a>
        </li>
      </ul>
      <br>
      <div class="tab-content video-container">
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
          <iframe width="100%" height="100%"
            :src="'https://www.youtube.com/embed/videoseries?si=' + tab.si + '&amp;list=' + tab.list"
            title="YouTube video player" frameborder="0" name="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          {{ tab.content }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'

export default {
  components: {
    TheMarquee,
    TheBanner,
  },
  data() {
    return {
      tabs: [
        { label: '台灣最前線', si: '_jz4fTxV5-60kG2s', list: 'PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K', content: '讓《台灣最前線》的許仲江，與來賓共同為您精闢分析每天時事！' },
        { label: '台灣向前行', si: 'vTWIskNPFvGW_bl6', list: 'PLf2VRok0uRO0px2iZrtznovVe10LfcfJO', content: '讓《台灣向前行》的張孟琦，與來賓共同為您精闢分析每天時事！' },
        { label: '全國第一勇', si: '04hEzUmcBl7J8bUW', list: 'PLBXFGXTYyFgAmbYv9Bgq9cxcWcwW6qgJA', content: '讓《全國第一勇》的徐國勇，與來賓共同為您精闢分析每天時事！' },
        { label: '民視佮你講', si: 'yNoxUNLhcledJ-AJ', list: 'PLf2VRok0uRO340tZz8twmmwT8k-36Z2O5', content: '時事政治、生活氣象、熱門話題，我們通通佮你講！網友們，快點一起跟主持人聊天吧！' },
      ],
      activeTab: 0,
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index; // 点击选项卡时设置选中的选项卡索引
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
  gap: 6px;
  margin: auto;
  display: flex;
  cursor: pointer;

  @include phone {
    gap: 1rem;
  }

  li {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #d9d9d9;

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
</style>



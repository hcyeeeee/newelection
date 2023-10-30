<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img src="../assets/map.png" alt="">
        <h2>歷屆總統副總統選舉得票數</h2>
      </div>
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)"
          :class="{ active: activeTab === index }">
          {{ tab.label }}</li>
      </ul>

      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <div class="infogram-embed" :data-id="tab.link" data-type="interactive" :data-title="'2024大選-' + tab.label">
        </div>
      </div>

    </div>
    <div class="layout">
      <div class="icontitle">
        <img src="../assets/HomeLegis.png" alt="">
        <h2>歷屆立委席次變化</h2>
      </div>
      <div class="flourish-embed flourish-parliament" :data-src=flourishSrc>
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
        { label: '2012年', link: '4c8f7092-a088-4e47-ba62-1856495110b8' },
        { label: '2016年', link: '0ee18735-d808-4d4e-b00c-bca4b906ce8a' },
        { label: '2020年', link: '0ed95ff8-d441-4d6a-b74f-3f5f05f9b76e' },
      ],
      flourishSrc: "visualisation/14873406",
      activeTab: 0,
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index; // 点击选项卡时设置选中的选项卡索引
    },
    loadFlourishScript() {
      const script = document.createElement("script");
      script.src = "https://public.flourish.studio/resources/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  },
  created() {
    this.activateTab(0);
    // Infogram 脚本加载
    // Infogram 脚本加载
    !function (e, n, i, s) {
      var d = "InfogramEmbeds";
      var o = e.getElementsByTagName(n)[0];
      if (window[d] && window[d].initialized) {
        window[d].process && window[d].process();
      } else if (!e.getElementById(i)) {
        var r = e.createElement(n);
        r.async = 1;
        r.id = i;
        r.src = s;
        o.parentNode.insertBefore(r, o);
      }
    }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
  },
  mounted() {
    this.loadFlourishScript();
  },
  watch: {
    $route(to, from) {
      // Infogram 脚本加载
      !function (e, n, i, s) {
        var d = "InfogramEmbeds";
        var o = e.getElementsByTagName(n)[0];
        if (window[d] && window[d].initialized) {
          window[d].process && window[d].process();
        } else if (!e.getElementById(i)) {
          var r = e.createElement(n);
          r.async = 1;
          r.id = i;
          r.src = s;
          o.parentNode.insertBefore(r, o);
        }
      }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
    }
  }

};
</script>
<style lang="scss" scoped>
ul {
  flex-direction: row;
  width: 90%;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  display: flex;
  cursor: pointer;

  li {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding: 0.2rem;
    border-bottom: 2px solid #d9d9d9;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid #ffa500;
    }
  }
}
</style>



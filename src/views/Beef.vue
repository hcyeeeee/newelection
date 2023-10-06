<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <h2><i class="fa-solid fa-fire"></i> 政策牛肉</h2>
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)"
          :class="{ active: activeTab === index }">{{ tab.label }}</li>
      </ul>
      <div class="tab-content">
        <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
          <div class="infogram-embed" :data-id="tab.link" data-type="interactive" :data-title="'2024大選-' + tab.label">
          </div>
          <div
            style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
            <a :href="tab.link" style="color:#989898!important;text-decoration:none!important;" target="_blank">2024大選- {{
              tab.label }}</a><br><a href="https://infogram.com"
              style="color:#989898!important;text-decoration:none!important;" target="_blank" rel="nofollow">Infogram</a>
          </div>
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
        { label: '生育政策', content: '这是生育政策的内容', link: '64eaf169-8845-4648-925f-d4d0fa9d80bf' },
        { label: '長照政策', content: '这是長照政策的内容', link: '8a53b893-70f0-4915-87e5-2467a83a8a02' },
        // 添加更多选项卡以及它们的内容
      ],
      activeTab: 0, 
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index; // 点击选项卡时设置选中的选项卡索引
    },
  },
  created() {
    this.activateTab(0);
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



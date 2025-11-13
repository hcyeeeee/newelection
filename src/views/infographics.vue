<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img loading="lazy" src="../assets/map.png" alt="">
        <h2>各縣市總統得票數</h2>
      </div>
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ active: activeTab === index }">
          <h3>{{ tab.label }}</h3>
        </li>
      </ul>
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <div class="infogram-embed" :data-id="tab.link" data-type="interactive" :data-title="'2024大選-' + tab.label"></div>
      </div>
    </div>
    <div class="layout">
      <div class="icontitle">
        <img loading="lazy" src="../assets/HomeLegis.png" alt="">
        <h2>歷屆立委席次變化</h2>
      </div>
      <div class="flourish-embed flourish-parliament" :data-src="flourishSrc"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import TheBanner from "../components/VoteBanner.vue";
import TheMarquee from "../components/VoteMarquee.vue";

const route = useRoute();
const tabs = ref([
  { label: "2024年", link: "25e7c20b-854a-4e37-99de-f8423d9b93f8" },
  { label: "2020年", link: "0ed95ff8-d441-4d6a-b74f-3f5f05f9b76e" },
  { label: "2016年", link: "0ee18735-d808-4d4e-b00c-bca4b906ce8a" },
  { label: "2012年", link: "4c8f7092-a088-4e47-ba62-1856495110b8" },
]);

const activeTab = ref(0);
const flourishSrc = "visualisation/14873406";
const loadInfogramScript = () => {
  (function (d, s, id, src) {
    const name = "InfogramEmbeds";
    const firstScript = d.getElementsByTagName(s)[0];

    if (window[name] && window[name].initialized) {
      window[name].process && window[name].process();
    } else if (!d.getElementById(id)) {
      const js = d.createElement(s);
      js.async = 1;
      js.id = id;
      js.src = src;
      firstScript.parentNode.insertBefore(js, firstScript);
    }
  })(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
};

//  FlourishScript
const loadFlourishScript = () => {
  const script = document.createElement("script");
  script.src = "https://public.flourish.studio/resources/embed.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

onMounted(() => {
  loadInfogramScript();
  loadFlourishScript();
});

watch(
  () => route.fullPath,
  () => {
    loadInfogramScript();
  }
);
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

.active {
  background: rgba(255, 122, 0, 0.20);
  border-bottom: 2px solid #f08308 !important;
}
</style>



<template>
  <TheHeader />
  <div class="all">
    <TheSidebar />
    <router-view />
    <TheCalender />
  </div>
  <ScrollUp />
  <div class="footer">
    Copyright © 2023 民視新聞網路部 社群中心
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import TheHeader from "./components/TheHeader.vue";
import TheCalender from "./components/TheCalender.vue";
import TheSidebar from "./components/TheSidebar.vue";
import ScrollUp from "./components/ScrollUp.vue";
import { useNewsStore } from "@/stores/news.js";
const store = useNewsStore();
onMounted(() => {
  store.fetchAll()
  AOS.init({
    duration: 1000,
    once: false,
  });
});
</script>

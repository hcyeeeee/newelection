<template>
    <div class="home-Legis layout">
        <div class="icontitle">
            <img loading="lazy" src="../assets/HomeLegis.png" alt="">
            <h2>立委激戰區</h2>
        </div>

        <div class="out">
            <div v-for="item in store.legislator" :key="item.ID" class="news">
                <a class="link"
                    :href="`https://www.ftvnews.com.tw/news/detail/${item.ID}?utm_source=2024election&utm_medium=homepage`"
                    target="_blank">
                    <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">

                    <div class="inner">
                        <h3 class="title">
                            {{ item.Title.replace('快新聞／', '') }}
                        </h3>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>

        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/立委選戰">
                看更多相關新聞
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </a>
        </div>
    </div>
</template>
  
<script setup>

import { useNewsStore } from "@/stores/news.js";
const store = useNewsStore();

</script>
<style>
.swiper-pagination {
    margin: 2rem auto !important;
}
</style>
  
  
  
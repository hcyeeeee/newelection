<template>
    <div class="president-relatednews layout">
        <div class="icontitle">
            <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
            <h2>總統大選焦點新聞</h2>
        </div>

        <div class="out">
            <div v-for="item in store.president" :key="item.ID" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <a class="link"
                    :href="`https://www.ftvnews.com.tw/news/detail/${item.ID}?utm_source=2024election&utm_medium=president`"
                    target="_blank">
                    <img loading="lazy" :src="item.Image" class="img" :alt="item.Title">
                    <div class="inner">
                        <h3 class="title">{{ item.Title }}</h3>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>

        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/總統大選">
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

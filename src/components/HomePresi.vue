<template>
    <div class="layout" style="border-radius: 0 0 1.25rem 1.25rem;">
        <div>
            <div class="icontitle">
                <img loading="lazy" src="../assets/HomePresi.png" alt="">
                <h2>總統激戰區</h2>
            </div>
            <router-link to="/president">
                <img loading="lazy" src="../assets/HomePresi.jpeg" alt="總統激戰區">
            </router-link>
        </div>

        <!-- PC版 Swiper -->
        <div class="pc">
            <swiper :spaceBetween="20" :autoplay="{ delay: 4000, disableOnInteraction: false }"
                :breakpoints="{ '1024': { slidesPerView: 3 } }" :pagination="{ clickable: true }"
                :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :modules="modules"
                :loop="true" class="mySwiper">
                <swiper-slide class="out" v-for="item in store.president" :key="item.ID">
                    <a class="link" :href="`https://www.ftvnews.com.tw/news/detail/${item.ID}`" target="_blank">
                        <img loading="lazy" :src="item.Image" :alt="item.ID" />
                        <div class="inner">
                            <h3 class="title">{{ item.Title.replace('快新聞／', '') }}</h3>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>

            <div class="arrow">
                <div class="swiper-button-next">
                    <font-awesome-icon icon="fa-solid fa-arrow-right" style="width: 15px;" />
                </div>
                <div class="swiper-button-prev">
                    <font-awesome-icon icon="fa-solid fa-arrow-left" style="width: 15px;" />
                </div>
            </div>
        </div>

        <!-- 手機版列表 -->
        <div class="mb">
            <div v-for="item in store.president" :key="item.ID" class="news">
                <a class="link2"
                    :href="`https://www.ftvnews.com.tw/news/detail/${item.ID}?utm_source=2024election&utm_medium=homepage`"
                    target="_blank">
                    <img loading="lazy" :src="item.Image" class="img" alt="新聞照片" />
                    <div class="inner">
                        <h3 class="title">{{ item.Title.replace('快新聞／', '') }}</h3>
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

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const store = useNewsStore();
const modules = [Autoplay, Pagination, Navigation];
</script>
  

<style lang="scss" scoped>
.news {
    display: flex;
    gap: 1rem;
    margin: 1rem 0.5rem;

    @include pad {
        gap: 0.5rem;
    }
}
</style>


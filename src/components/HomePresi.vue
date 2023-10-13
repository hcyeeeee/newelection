<template>
    <div class="layout ">
        <div class="">
            <div class="icontitle">
                <img src="../assets/HomePresi.png" alt="">
                <h2>總統激戰區</h2>
            </div>
            <router-link to="/president">
                <lottie-player class="mb" src="https://lottie.host/7b471a2b-b906-4b36-b101-d21c1e9e5c00/0JUFnXotpW.json"
                    background="transparent" speed="1.5" style="width: 100%; height: 100%" direction="1" mode="normal" loop
                    autoplay></lottie-player>
                <lottie-player class="pc" src="https://lottie.host/06775d0a-bc01-4177-b00b-16bb0b0321b3/sDR4z9Zc8j.json"
                    background="transparent" speed="1.5" style="width: 100%; height: 100%" direction="1" mode="normal" loop
                    autoplay></lottie-player>
            </router-link>
        </div>
        <div class="pc">
            <swiper :spaceBetween="20" :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }" :breakpoints="{
    '1024': {
        slidesPerView: 3,
    },
}" :pagination="{ clickable: true, }" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}" :modules="modules" class="mySwiper">
                <swiper-slide class="out" v-for="item in news2" :key="item.id">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link">
                        <img loading="lazy" :src="item.Image" :alt="item.ID">
                        <div class="inner">
                            <div class="title">{{ item.Title.replace("快新聞／", " ") }}</div>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
            <div class="arrow">
                <div class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="swiper-button-prev"><i class="fa-solid fa-arrow-left "></i></div>
            </div>
        </div>
        <div class="mb">
            <div v-for="item in news" :key="item.id" class="news" data-aos="fade-up">
                <a class="link2"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                    target="_blank">
                    <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">
                    <div class="inner">
                        <p class="title">
                            {{ item.Title.replace("快新聞／", "") }}
                        </p>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/總統大選">看更多相關新聞<i class="fa-solid fa-angles-right"></i></a>
        </div>

    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import axios from 'axios';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            news2: [],
            news: [],
        };
    },
    methods: {
        getNews() {
            axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=6")
                .then((response) => {
                    this.news2 = response.data.ITEM;

                })
                .catch((error) => {
                    console.log(error);
                });

        },
        getNews2() {
            axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=3")
                .then((response) => {
                    this.news = response.data.ITEM;

                })
                .catch((error) => {
                    console.log(error);
                });

        },
    }, mounted() {
        this.getNews();
        this.getNews2()
    }

}


</script>

<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

.news {
    display: flex;
    gap: 1rem;
    margin: 1rem 0.5rem;

    @include pad {
        gap: 0.5rem;
    }
}
</style>


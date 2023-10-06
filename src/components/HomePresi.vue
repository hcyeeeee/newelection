<template>
    <div class="layout ">
        <div class="">
            <h2><i class="fa-solid fa-message"></i>總統激戰區</h2>
            <router-link to="/president">
                <picture>
                    <source media="(min-width:768px)" srcset="../assets/123.gif">
                    <img loading="lazy" src="../assets/hh.gif" alt="banner" style="width:100%;">
                </picture>
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


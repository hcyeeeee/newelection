<template>
    <div class="layout home-president">
        <div class="">
            <h2><i class="fa-solid fa-message"></i>總統激戰區</h2>
            <router-link to="/about">
                <picture>
                    <source media="(min-width:768px)" srcset="../assets/123.gif">
                    <img src="../assets/1234.gif" alt="banner" style="width:100%;">
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
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link"
                        style="margin-bottom:2rem">
                        <img :src="item.Image" :alt="item.ID">
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
            <swiper :spaceBetween="20" :autoplay="{
                delay: 2500, slidesPerView: 1,
                disableOnInteraction: false,
            }" :breakpoints="{
    '640': {
        slidesPerView: 2,
    },
}" :pagination="{ clickable: true, }" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}" :modules="modules" class="mySwiper">
                <swiper-slide class="out" v-for="item in news" :key="item.id">
                    <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link">
                        <img :src="item.Image" :alt="item.ID">
                        <div class="inner">
                            <div class="title">{{ item.Title.replace("快新聞／", " ") }}</div>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>

                </swiper-slide>
            </swiper>

        </div>
        <a class="more" href="https://www.ftvnews.com.tw/tag/政治">看更多相關新聞<i class="fa-duotone fa-angles-right"></i></a>
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
            axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=5")
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

<style lang="scss">
// @mixin pad {
//     @media (min-width: 700px) {
//         @content;
//     }
// }



// .s {
//     position: relative;
//     width: 100%;
//     margin: auto;
// }

// .swiper-button-next,
// .swiper-button-prev,
// .swiper-pagination {
//     position: absolute;
//     color: orange;
//     font-size: 2rem;
// }

// .swiper-button-prev:after,
// .swiper-button-next:after {
//     content: "";
//     color: orange;
// }

// .swiper-pagination-bullet-active {
//     opacity: var(--swiper-pagination-bullet-opacity, 1);
//     background: orange;
// }

// .ex {
//     position: relative;
//     font-size: 2rem;
// }



// select {
//     background: #fff;
//     padding: 0.5rem 1rem;
//     border-radius: 10px;
//     width: 100%;
//     text-align: center;
//     font-weight: 600;
// }
</style>
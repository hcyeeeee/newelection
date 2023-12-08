<template>
    <div class="home-Legis layout">
        <div class="icontitle">
            <img src="../assets/HomeLegis.png" alt="">
            <h2>立委激戰區</h2>
        </div>
        <swiper :spaceBetween="30" :loop="true"
            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }" :centeredSlides="true"
            :pagination="{ clickable: true, }" :autoplay="{ delay: 5000, disableOnInteraction: false, }" :modules="modules"
            class="mySwiper">

            <swiper-slide> <router-link to="/Legislator">
                    <img src="../assets/fight2.jpg" class="banner" alt="中和選區">
                </router-link>
                <div class="out">
                    <div v-for="item in news2" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                            target="_blank">
                            <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <h3 class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </h3>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/Legislator">
                    <img src="../assets/fight3.jpg" class="banner" alt="中正萬華選區">
                </router-link>
                <div class="out">
                    <div v-for="item in news3" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                            target="_blank">
                            <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <h3 class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </h3>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/Legislator">
                    <img src="../assets/fight4.jpg" class="banner" alt="信義松山選區">
                </router-link>
                <div class="out">
                    <div v-for="item in news4" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                            target="_blank">
                            <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <h3 class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </h3>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/Legislator">
                    <img src="../assets/fight5.jpg" class="banner" alt="南港內湖選區">
                </router-link>
                <div class="out">
                    <div v-for="item in news5" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                            target="_blank">
                            <img loading="lazy" :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <h3 class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </h3>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
        <div class="arrow">
            <div class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="fa-solid fa-arrow-left "></i></div>
        </div>
        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/立委選戰">看更多相關新聞<i class="fa-solid fa-angles-right"></i></a>
        </div>
    </div>
</template>
<script >

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Mousewheel, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Mousewheel, Autoplay, Pagination, Navigation],
            news1: [],
            news2: [],
            news3: [],
            news4: [],
            news5: [],
        }
    },
    methods: {
        getNews1() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=蘇巧慧&Page=1&sp=3")
                .then((response) => {
                    this.news1 = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
        getNews2() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=吳崢&Page=1&sp=3")
                .then((response) => {
                    this.news2 = response.data.ITEM;

                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
        getNews3() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=吳沛憶&Page=1&sp=3")
                .then((response) => {
                    this.news3 = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        }, getNews4() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=許淑華&Page=1&sp=3")
                .then((response) => {
                    this.news4 = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        }, getNews5() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高嘉瑜&Page=1&sp=3")
                .then((response) => {
                    this.news5 = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        }


    }, mounted() {
        this.getNews1(),
            this.getNews2(),
            this.getNews3(),
            this.getNews4(),
            this.getNews5()
    },
}
</script>
<style scoped>
.swiper-pagination {
    margin: 2rem auto !important;
}
</style>
  
  
  
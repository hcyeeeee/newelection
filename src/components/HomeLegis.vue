<template>
    <div class="home-Legis layout">
        <h2>立委激戰區</h2>
        <swiper :spaceBetween="30" :loop="true" :navigation="true" :centeredSlides="true" :pagination="{ clickable: true, }"
            :autoplay="{ delay: 4000, disableOnInteraction: false, }" :modules="modules" class="mySwiper">
            <swiper-slide>
                <router-link to="/Legister"><img src="../assets/fight1.png" class="banner" alt=""></router-link>
                <div class="out">
                    <div v-for="item in news" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=legistorbn'"
                            target="_blank">
                            <img :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <p class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </p>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide> <router-link to="/Legister"><img src="../assets/fight2.png" class="banner" alt=""></router-link>
                <div class="out">
                    <div v-for="item in news1" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=legistorbn'"
                            target="_blank">
                            <img :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <p class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </p>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <router-link to="/Legister"><img src="../assets/fight3.png" class="banner" alt=""></router-link>
                <div class="out">
                    <div v-for="item in news2" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=legistorbn'"
                            target="_blank">
                            <img :src="item.Image" class="img" alt="新聞照片">
                            <div class="inner">
                                <p class="title">
                                    {{ item.Title.replace("快新聞／", "") }}
                                </p>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
        <a href="https://www.ftvnews.com.tw/tag/%E7%AB%8B%E5%A7%94%E9%81%B8%E6%88%B0/" target="_blank"
            class="more">點我看更多新聞>></a>
    </div>
</template>
<script >

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
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
            news: [],
            news1: [],
            news2: [],
        }
    },
    methods: {
        getNews1() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=許淑華&Page=1&sp=3")
                .then((response) => {
                    this.news = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
        getNews2() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=謝佩芬&Page=1&sp=3")
                .then((response) => {
                    this.news1 = response.data.ITEM;

                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
        getNews3() {
            axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高嘉瑜&Page=1&sp=3")
                .then((response) => {
                    this.news2 = response.data.ITEM;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        }
    }, mounted() {
        this.getNews1(),
            this.getNews2(),
            this.getNews3()
    },
}
</script>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
    color: orange !important;
}

.swiper-button-next:after {
    display: block !important;
}

.swiper-button-prev:after {
    display: block !important;
}
</style>
  
  
  
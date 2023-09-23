<template>
    <div class="home-Legis layout">
        <h2>立委激戰區</h2>
        <swiper :spaceBetween="30" :loop="true" :centeredSlides="true"
            :autoplay="{ delay: 5000, disableOnInteraction: false, }" :modules="modules" class="mySwiper">
            <swiper-slide><img src="../assets/fight1.png" class="banner" alt="">
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
            <swiper-slide><img src="../assets/fight2.png" alt="" class="banner">
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
            <swiper-slide>
                <img src="../assets/fight3.png" alt="" class="banner">
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
        </swiper>
        <a href="https://www.ftvnews.com.tw/tag/%E7%AB%8B%E5%A7%94%E9%81%B8%E6%88%B0/" target="_blank"
            class="more">點我看更多>></a>
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
        }
    }, mounted() {
        axios
            .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=3")
            .then((response) => {
                this.news = response.data.ITEM;
                console.log("this", this.news)
            })
            .catch((error) => {
                console.log("error" + error);
            });

    },
}
</script>
<style></style>
  
  
  
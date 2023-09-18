<template>
    <div class="home-Legis layout">
        <h2>立委激戰區</h2>
        <swiper :spaceBetween="30" :centeredSlides="true" :pagination="{ clickable: true, }"
            :autoplay="{ delay: 3000, disableOnInteraction: false, }" :modules="modules" class="mySwiper">
            <swiper-slide><img src="../assets/fight1.png" class="banner" alt="">
                <div class="out">
                    <div v-for="item in news" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
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
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
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
            <swiper-slide><img src="../assets/fight3.png" alt="" class="banner">
                <div class="out">
                    <div v-for="item in news" :key="item.id" class="news">
                        <a class="link"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
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
        <!-- <swiper :slidesPerView="3" :spaceBetween="10" :navigation="true" :pagination="{ clickable: true, }" :autoplay="{
            delay: 2500, disableOnInteraction: false,
        }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in news" :key="item.id" class="news">
                <img :src="item.Image" :alt="item.Title" class="news-img">
                <p class="news-title">{{ item.Title }}</p>
                <p class="news-time">{{ item.CreateDate }}</p>
            </swiper-slide>
        </swiper> -->
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
  
  
  
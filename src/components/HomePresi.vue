<template>
    <div class="layout ">
        <div class="home-president">
            總統
            <router-link to="/about">
                <picture>
                    <source media="(min-width:768px)" srcset="../assets/123.gif">
                    <img src="../assets/1234.gif" alt="banner" style="width:100%;">
                </picture>
            </router-link>
        </div>
        <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :pagination="{ clickable: true, }" :autoplay="{
            delay: 2500, disableOnInteraction: false,
        }" :breakpoints="{
    '768': { slidesPerView: 3, spaceBetween: 20, }, '1024': { slidesPerView: 3, spaceBetween: 20, },
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in news2" :key="index" class="out">
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
            </swiper-slide>
        </swiper>
        <a href="https://www.ftvnews.com.tw/tag/政治">看更多相關新聞></a>
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
        };
    },
    methods: {
        toggleMobileMenu() {
            axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=賴清德&Page=1&sp=6")
                .then((response) => {
                    this.news2 = response.data.ITEM;
                    console.log("aaa", this.news2)// 将获取的新闻数据赋值给Vue实例的news属性
                })
                .catch((error) => {
                    console.log(error);
                });

        },
    }, mounted() {
        this.toggleMobileMenu()
    }

}


</script>

<style lang="scss"></style>
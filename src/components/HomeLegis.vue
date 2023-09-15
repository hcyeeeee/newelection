<template>
    <div class="home-Legis layout">
        <h2>立委激戰區</h2>
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide><img src="../assets/fight1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/fight2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/fight3.png" alt=""></swiper-slide>

        </swiper>
        <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :pagination="{ clickable: true, }" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :breakpoints="{
    '640': {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}" :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in news" :key="item.id">{{ item.Title }}</swiper-slide>

        </swiper>
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
            .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=20")
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
  
  
  
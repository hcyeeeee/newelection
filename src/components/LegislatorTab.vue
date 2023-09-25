<template>
    <div class="layout">
        <div class="Legislator">
            <ul class="navtab">
                <li v-for="candidate in candidates" :key="candidate.index" @click="selectCandidate(candidate)">
                    {{ candidate.name.blue + candidate.name.green + candidate.name.other }}
                </li>
            </ul>
        </div>
        <div>
            <swiper v-if="selectedCandidate" :slidesPerView="1" :spaceBetween="10" :pagination="{ clickable: true, }"
                :breakpoints="{
                    '640': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }" :modules="modules" class="mySwiper">
                <swiper-slide class="out" v-for="item in selectedCandidate.responseData" :key="item.index"> <a
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link">
                        <img :src="item.Image" :alt="item.ID">
                        <p class="title">{{ item.Title.replace("快新聞／", " ") }}</p>
                        <div class="time">{{ item.CreateDate }}</div>
                    </a>
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            candidates: [
                {
                    index: "1",
                    name: {
                        blue: "許淑華",
                        green: " vs 徐巧芯",
                        other: "",
                    },
                    responseData: '', // 为每个 tab 保留回应数据
                },
                {
                    index: "2",
                    name: {
                        blue: "高嘉瑜",
                        green: " vs 李彥秀",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "3",
                    name: {
                        blue: "謝佩芬",
                        green: " vs 王鴻薇",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "4",
                    name: {
                        blue: "吳沛憶",
                        green: " vs 于美人",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "4",
                    name: {
                        blue: "吳沛憶",
                        green: " vs 于美人",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "4",
                    name: {
                        blue: "吳沛憶",
                        green: " vs 于美人",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "4",
                    name: {
                        blue: "吳沛憶",
                        green: " vs 于美人",
                        other: " vs 吳欣岱",
                    },
                    responseData: '',
                },
            ],
            selectedCandidate: null, // 用于存储当前选中的候选人数据
        };
    },
    methods: {
        selectCandidate(candidate) {
            // 根据选中的候选人动态生成 API URL
            const apiUrl = `https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${candidate.name.blue}&Page=1&sp=9`;
            // 使用 axios 发送请求，并将响应数据存储在相应的 candidate.responseData 中
            axios.get(apiUrl)
                .then(response => {
                    // 在这里处理 API 响应数据
                    candidate.responseData = response.data.ITEM;
                    // 更新选中的候选人
                    this.selectedCandidate = candidate;
                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                });
        },
    },
    mounted() {
        const defaultCandidate = this.candidates[0];
        this.selectCandidate(defaultCandidate);
    },
};
</script>
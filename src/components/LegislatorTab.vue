<template>
    <div class="layout Legislator-tab">
        <div class="icontitle">
            <img src="../assets/HomeLegis.png" alt="">
            <h2>立委激戰區</h2>
        </div>
        <div class="Legislator pc">
            <ul class="navtab">
                <li v-for="candidate in candidates" :key="candidate.index" @click="selectCandidate(candidate)"
                    :class="{ 'active': candidate.selected }">
                    {{ candidate.name.blue + candidate.name.green + candidate.name.other }}
                </li>
            </ul>

        </div>
        <div class="Legislator pc">

            <swiper v-if="selectedCandidate" :slidesPerView="3" :loop="true" :spaceBetween="20"
                :pagination="{ clickable: true, }" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }" :modules="modules" class="mySwiper">

                <swiper-slide class="out" v-for="item in selectedCandidate.responseData" :key="item.index"> <a
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link">
                        <img loading="lazy" :src="item.Image" :alt="item.ID">
                        <p class="title">{{ item.Title.replace("快新聞／", " ") }}</p>
                    </a>
                </swiper-slide>

            </swiper>
            <div class="arrow">
                <div class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></div>
                <div class="swiper-button-prev"><i class="fa-solid fa-arrow-left "></i></div>
            </div>
        </div>
        <div class="mb">
            <select class="mySelect custom-select" v-model="selectedCandidate" @change="selectCandidate(selectedCandidate)">
                <option value="">請選擇候選人</option>
                <option v-for="(candidate, index) in candidates" :key="index" :value="candidate">{{ candidate.name.blue +
                    candidate.name.green + candidate.name.other }}</option>
            </select>
            <div class="Legislator">
                <div v-if="selectedCandidate">
                    <div class="out">
                        <a v-for="(item, index) in selectedCandidate.responseData" :key="index" data-aos="fade-up"
                            :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="_blank" class="link2">
                            <img loading="lazy" :src="item.Image" :alt="item.ID">
                            <div class="inner">
                                <p class="title">{{ item.Title.replace("快新聞／", " ") }}</p>
                                <div class="time">{{ item.CreateDate }}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
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
                        blue: "蘇巧慧",
                        green: " vs 洪佳君",
                        other: "",
                    },
                    responseData: '',
                },
                {
                    index: "2",
                    name: {
                        blue: "吳崢",
                        green: " vs 張智倫",
                        other: " vs 邱臣遠",
                    },
                    responseData: '',
                },
                {
                    index: "3",
                    name: {
                        blue: "吳沛憶",
                        green: " vs 鍾小平",
                        other: " vs 于美人",
                    },
                    responseData: '',
                },
                {
                    index: "4",
                    name: {
                        blue: "許淑華",
                        green: " vs 徐巧芯",
                        other: "",
                    },
                    responseData: '',
                },
                {
                    index: "5",
                    name: {
                        blue: "高嘉瑜",
                        green: " vs 李彥秀",
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
            let apiUrl = `https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${candidate.name.blue}&Page=1&sp=6`;

            if (window.matchMedia("(min-width: 768px)").matches) {
                apiUrl = `https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${candidate.name.blue}&Page=1&sp=6`;
            }

            axios.get(apiUrl)
                .then(response => {
                    candidate.responseData = response.data.ITEM;
                    this.selectedCandidate = candidate;
                })
                .catch(error => {
                    console.error(error);
                });
            this.candidates.forEach((c) => {
                c.selected = (c === candidate);
            });
        },
    },
    mounted() {
        const defaultCandidate = this.candidates[0];
        this.selectCandidate(defaultCandidate);
    },
};
</script>

<style scoped>
.swiper-pagination {
    margin: 0rem auto !important;
}

.arrow {
    margin: 1.6rem auto !important;
}

.swiper-pagination {
    margin: -0.5rem auto !important;
}

.swiper-pagination {
    margin: -0.5rem auto;
}

.active {
    border-bottom: 2px solid #f08308 !important;
}
</style>

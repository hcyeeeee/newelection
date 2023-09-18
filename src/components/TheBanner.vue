<template>
    <div class="banner">
        <div>
            <picture>
                <source media="(min-width:768px)" srcset="../assets/banner_mb.png">
                <img src="../assets/banner_mb.png" alt="banner" style="width:100%;">
            </picture>
            <div class="count">
                <p class="countdown"> {{ countdown }}</p>
            </div>
        </div>
        <div class="calender-mb">
            <div class="title">行事曆 </div>
            <swiper class="calender_content mySwiper" swiper :spaceBetween="1" :slidesPerView="2" :centeredSlides="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" :modules="modules">

                <swiper-slide v-for="item in calender" :key="item.id" class=" animate__animated animate__fadeInRight">
                    <div>{{ item.startDate }}{{ item.endDate }}</div>
                    <div>{{ item.DayEvent }}</div>
                </swiper-slide>
            </swiper>
        </div>

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ylYJSBUgaMA?si=GDtC43iZq4uLNHqf"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>
<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            countdown: "", news: [],
            calender: [
                { startDate: "2023/09/19", endDate: "-11/02", DayEvent: "受理總統、副總統選舉連署書件" },
                { startDate: "2023/11/07", endDate: "", DayEvent: "發布立法委員選舉公告" },
                { startDate: "2023/11/14前", endDate: "", DayEvent: "公告總統、副總統選舉連署結果" },
                { startDate: "2023/11/20", endDate: "11/24", DayEvent: "受理總統、副總統與立法委員選舉候選人登記之申請" },
                { startDate: "2023/12/05前", endDate: "", DayEvent: "審定總統、副總統選舉候選人名單，並通知抽籤" },
                { startDate: "2023/12/11", endDate: "", DayEvent: "總統、副總統選舉候選人抽籤決定號次" },
                { startDate: "2023/12/15", endDate: "", DayEvent: "公告總統、副總統選舉候選人名單" },
                { startDate: "2024/01/02", endDate: "", DayEvent: "公告立法委員選舉候選人名單" },
                { startDate: "2024/01/13", endDate: "", DayEvent: "投票、開票" },
                { startDate: "2024/01/19前", endDate: "", DayEvent: "公告總統、副總統與立法委員選舉當選人名單" },
            ],
            modules: [Autoplay],
        }
    },
    methods: {
        startCountdown() {
            const targetDate = new Date("2024/1/13 16:00").getTime();
            const countdownInterval = setTimeout(() => {
                const now = new Date().getTime();
                const timeDifference = targetDate - now;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    this.countdown = "1/13 到了！";
                } else {
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                    this.countdown = `選戰倒數${days} 天 ${hours} 時 ${minutes} 分 `;
                }
            }, 10000);
        }
    }, created() {
        this.startCountdown();
    },
};
</script>
<style lang="scss" scoped></style>
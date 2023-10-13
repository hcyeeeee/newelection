<template>
    <div class="banner">
        <div>
            <div class="h1title">
                <h1>
                    <span>決戰2024</span>
                    <br>
                    總統大選 | 立委選戰
                </h1>
            </div>
            <div class="count">
                <p class="www">選戰倒數 </p>
                <p class="sss"> {{ day }}</p>
                <p class="wwww">天</p>
                <p class="sss"> {{ hours }}</p>
                <p class="wwww">時</p>
                <p class="sss"> {{ mins }}</p>
                <p class="wwww">分</p>
                <p class="sss"> {{ secs }}</p>
                <p class="wwww">秒</p>
            </div>
        </div>
        <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/ylYJSBUgaMA?autoplay=1&mute=1&si=GDtC43iZq4uLNHqf"
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
            countdown: "",
            day: "",
            hours: "",
            mins: "",
            secs: "",
            news: [],
            calender: [
                { startDate: "2023/09/19", endDate: "-11/02", DayEvent: "受理總統、副總統選舉連署書件" },
                { startDate: "2023/11/07", endDate: "", DayEvent: "發布立法委員選舉公告" },
                { startDate: "2023/11/14前", endDate: "", DayEvent: "公告總統、副總統選舉連署結果" },
                { startDate: "2023/11/20", endDate: "-11/24", DayEvent: "受理正副總統與立法委員選舉候選人登記之申請" },
                { startDate: "2023/12/05前", endDate: "", DayEvent: "審定總統、副總統選舉候選人名單，並通知抽籤" },
                { startDate: "2023/12/11", endDate: "", DayEvent: "正副總統選舉候選人抽籤決定號次" },
                { startDate: "2023/12/15", endDate: "", DayEvent: "公告總統、副總統選舉候選人名單" },
                { startDate: "2024/01/02", endDate: "", DayEvent: "公告立法委員選舉候選人名單" },
                { startDate: "2024/01/13", endDate: "", DayEvent: "投票及開票日" },
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
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                    this.day = `${days} `;
                    this.hours = `${hours} `;
                    this.mins = `${minutes} `;
                    this.secs = `${seconds} `;

                }
            }, 1000);
        }
    }, created() {
        setInterval(() => {
            this.startCountdown();
        }, 900);
    }, mounted() {
        setTimeout(() => {
            this.startCountdown();
        }, 800);
    },
};
</script>
<style lang="scss" scoped>
.swiper-slide-prev,
.swiper-slide-next {
    opacity: .8;
}


</style>
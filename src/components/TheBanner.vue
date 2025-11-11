<template>
    <div class="banner">
        <div>
            <div class="layout-h1">
                <h1>
                    <span>決戰2024</span>
                    <br>
                    總統大選 | 立委選戰
                </h1>
            </div>
            <div class="count">
                <p class="count-title">選戰倒數 </p>
                <span>{{ day }}</span>
                <p class="count-text">天</p>
                <span>{{ hours }}</span>
                <p class="count-text">時</p>
                <span> {{ mins }}</span>
                <p class="count-text">分</p>
            </div>
            <div class="count">
                <span> {{ countdown }}</span>
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
export default {
    data() {
        return {
            countdown: "",
            day: "",
            hours: "",
            mins: "",
        }
    },
    methods: {
        startCountdown() {
            //檢查
            const targetDate = new Date("2024/1/13 08:00").getTime();
            const countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const timeDifference = targetDate - now;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    this.countdown = "！現正開票中！";
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
    },
    created() {
        setInterval(() => {
            this.startCountdown();
        }, 10000);
        setTimeout(() => {
            this.startCountdown()
        }, 1000);
    }
};
</script>

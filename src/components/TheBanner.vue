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
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ylYJSBUgaMA?si=GDtC43iZq4uLNHqf"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>
<script>
export default {

    data() {
        return {
            countdown: "", news: [],
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
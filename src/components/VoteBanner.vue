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
                <span>開票結束</span>
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
            secs: "",
        }
    },
    methods: {
        startCountdown() {
            //檢查
            const targetDate = new Date("2024/1/13 16:00").getTime();
            const countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const timeDifference = targetDate - now;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    this.countdown = "1";
                    this.day = "";
                    this.hours = "";
                    this.mins = "";
                } else {
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                    this.day = `${days} `;
                    this.hours = `${hours} `;
                    this.mins = `${minutes} `;
                    this.secs = `${seconds} `;
                    this.countdown = `${hours}時 ` + `${minutes}分 ` + `${seconds}秒 `;
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
<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 800px) {
        @content;
    }
}

.count {
    display: flex !important;
    gap: 1rem;
    align-items: center;
    margin-top: .5rem;
    background: linear-gradient(115deg, #F07708 30.73%, #FF9823 32.81%, #F04E08 100%);
    padding: 0.5rem;
    border-radius: 1.25rem 1.25rem 0 0;

    @include pad {
        display: flex;
        animation: taadaa 1.5s infinite;
        background: linear-gradient(115deg, #F07708 30.73%, #FF9823 32.81%, #F04E08 100%);

    }
}

.count-title,
.count-text {
    display: flex !important;
    color: white;

    @include pad {
        color: rgb(0, 0, 0)
    }
}

.layout-h1 {
    margin-bottom: 0px !important;
    margin-top: .5rem !important;

    @include pad {
        margin-top: -1px;
    }
}

@keyframes taadaa {


    33% {
        opacity: 1;
    }

    66% {
        opacity: 0.8;
    }

    99% {
        opacity: 1;
    }

}

.count span {
    color: #ffffff;
    letter-spacing: 1rem;

    @include pad {
        color: #ffffff;
        letter-spacing: 1rem;
    }
}

.countstyle1 {
    padding: 0rem;
}
</style>
<template>
    <div class="layout ">
        <div class="">
            <div class="icontitle">
                <img src="../assets/HomePresi.png" alt="">
                <h2>總統即時開票區</h2>
            </div>
            <div v-for="item in candidates" :key="item.id" class="vote-list">

                <div class="vote-pic">
                    <div class="party">
                        <img loading="lazy"
                            :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.party + '.png'" />
                    </div>
                    <div class="pic">
                        <img loading="lazy" :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.name + '.png'" />

                    </div>
                    <div class="pic2">
                        <img loading="lazy" :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.sub + '.png'" />
                    </div>
                </div>
                <div class="vote-num">
                    <div class="vote-num-inner">
                        <div class="up">
                            <div class="num"> {{ item.num }}</div>
                            <div class="name"> {{ item.name }}/{{ item.sub }}</div>
                            <div class="tickets">{{ item.tickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') }}</div>
                        </div>
                    </div>
                    <div style="width: 100%">
                        <LvProgressBar :value="item.tickets / 80000" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LvProgressBar from 'lightvue/progress-bar';
export default {
    data() {
        return {
            news: [], candidates: [
                {
                    num: "1",
                    party: "民進黨",
                    name: "賴清德",
                    sub: "賴清德",
                    tickets: "122113",
                },
                {
                    num: "2",
                    party: "國民黨",
                    name: "侯友宜",
                    sub: "賴清德",
                    tickets: "321222",
                },
                {
                    num: "3",
                    party: "民眾黨",
                    name: "柯文哲",
                    sub: "賴清德",
                    tickets: "622212",
                },
                {
                    num: "4",
                    party: "無黨籍",
                    name: "郭台銘",
                    sub: "賴清德",
                    tickets: "902100",
                }
            ],
            value: 0,
        };
    },
    interval: null,
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    newValue = 0;
                }
                this.value = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        },
    },
    mounted() {
        this.startProgress();
    },
    beforeDestroy() {
        this.endProgress();
    },
    components: {
        LvProgressBar: LvProgressBar,
    },
    watch: {
        test: {

        }
    }
};
</script>

<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

.vote-list {
    display: grid;
    grid-template-columns: 1fr 4fr;
    position: relative;
    gap: 1rem;
    height: 140px;
    height: 120px;

    img {
        position: absolute;
        border-radius: 1000px;
        width: 80px;
        fill: #FFF;
        border: 3px solid white;
        filter: drop-shadow(1.9500000476837158px 1.9500000476837158px 2.5999999046325684px rgba(0, 0, 0, 0.15));
    }
}

.vote-pic {
    display: flex;
    padding-right: 2rem;
    width: 100px;
}

.vote-num {
    padding-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1rem
}

.party {

    img {
        width: 30px;
        z-index: 4;
    }
}

.pic {
    position: absolute;
    left: 1rem;


    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        z-index: 3;
    }
}

.pic2 {
    position: absolute;
    left: 5rem;
    top: 1rem;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
}

.num {
    border-radius: 100px;
    border: 2px solid;
    width: fit-content;
    padding: 0rem .5rem;
    color: orange;
}

.name {
    font-size: 1.4rem;

}

.vote-num {}

.up {
    display: flex;
    gap: 10px;
}

.tickets {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: end;
}
</style>


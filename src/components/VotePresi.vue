<template>
    <div class="layout ">
        <div class="">
            <div class="icontitle">
                <img src="../assets/HomePresi.png" alt="">
                <h2>總統即時開票區</h2>
            </div>
            <div v-for="item in news3.tickets" :key="item.id" ref="" class="vote-list">
                <div class="vote-pic">
                    <div class="party">
                        <img class="vote-pic-img" loading="lazy"
                            :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + item.party + '.jpg'" />
                    </div>
                    <div class="pic">
                        <img class="vote-pic-img" loading="lazy"
                            :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.candName + '.jpg'" />

                    </div>
                    <div class="pic2">
                        <img loading="lazy"
                            :src="'https://www.ftvnews.com.tw/topics/2024election/images/candidates/' + item.candName + '2.jpg'" />
                    </div>
                </div>
                <div class="vote-num">
                    <div class="vote-num-inner">
                        <div class="up">
                            <div class="num"> {{ item.candNo }}</div>
                            <div class="name"> {{ item.candName }}/ {{ item.candName }}</div>

                            <div class="tickets" :style="{ color: ticketColor }">{{
                                item.ticket.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') }}
                            </div>
                            <img v-if="item.winner == '*'" src="../assets/pass.png" alt="pass" class="pass"
                                style="z-index: 99999;">
                        </div>
                    </div>
                    <div style="width: 100%">
                        <LvProgressBar :value="item.ticket / 10000" :showValue="showValue" />
                        {{ item.ticket }}

                    </div>
                    <hr>
                </div>
            </div>
            <!-- <h3>a的值是:{{ numbers.a }}</h3>
            <button @click="numbers.a++">點我+1</button>
            <h3>b的值是:{{ numbers.b }}</h3>
            <button @click="numbers = { a: 111, b: 555 }">點我+1</button> -->

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import LvProgressBar from 'lightvue/progress-bar';
export default {
    data() {
        return {
            ticketColor: 'black', // Default color
            news3: [],
            value: 0,
            all: 2000000,
            showValue: false,
            numbers: {
                a: 1,
                b: 1
            },
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
            }, 5000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }, getPresi() {
            axios
                .get("/ftvelect.json")
                .then((response) => {
                    this.news3 = response.data.T1;
                    console.log(this.news3)
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
    },
    mounted() {
        this.getPresi();
        this.startProgress();
        setInterval(() => {
            this.getPresi()
        }, 10000);
    },
    beforeDestroy() {
        this.endProgress();
    },
    components: {
        LvProgressBar: LvProgressBar,
    },
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
    grid-template-columns: 2fr 3fr;
    gap: 1rem;
    height: 150px;
    width: 90%;
    margin: auto;

    img {
        position: absolute;
        border-radius: 1000px;
        width: 100px;
        fill: #FFF;
        border: 3px solid white;
        filter: drop-shadow(1.9500000476837158px 1.9500000476837158px 2.5999999046325684px rgba(0, 0, 0, 0.15));
    }
}

.vote-pic {
    display: flex;
    width: 100%;
    justify-content: start;
}

.vote-num {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin: auto;
}

.party {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin: auto;
        width: 50px;
        z-index: 4;

    }
}

.pic {
    position: relative;
    left: 5%;


    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        z-index: 3;
    }
}

.pic2 {
    position: relative;
    left: 45%;
    top: 1rem;

    img {
        width: 100px;
        height: 100px;
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

.pass {
    width: 30px !important;
    height: 30px;
    position: relative !important;
    border-radius: 1000px;
    fill: none;
    border: none;
    filter: none;

    @include pad {
        width: 40px !important;
        height: 40px;
    }
}
</style>


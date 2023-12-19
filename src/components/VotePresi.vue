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
                            <div class="name">{{ item.candName }}/{{ item.candName.replace(/柯文哲/g, '吳欣盈').replace(/賴清德/g,
                                '蕭美琴').replace(/侯友宜/g, '趙少康') }}</div>

                            <div class="tickets" :style="{ color: ticketColor }">
                                <count-up :end-val="item.ticket" :options="options"></count-up>票
                            </div>

                            <img v-if="item.winner == '*'" src="../assets/pass.png" alt="pass" class="pass"
                                style="z-index: 999;">

                        </div>
                    </div>

                    <div class="ticketspc" :style="{ color: ticketColor }"> <count-up :end-val="item.ticket"
                            :options="options"></count-up>票
                    </div>
                    <div style="width: 100%">
                        <LvProgressBar :value="item.ticket / 10000" :showValue="false" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CountUp from "vue-countup-v3";
import axios from 'axios';
import LvProgressBar from 'lightvue/progress-bar';
export default {
    data() {
        return {
            ticketColor: 'black', // Default color
            news3: [],
            value: 0,
            showValue: false,
            options: {
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: ",",
                prefix: "",
                suffix: "",
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
                .get("./ftvelect.json")
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
        CountUp,
    }
};
</script>

<style lang="scss" scoped>
@mixin phone {
    @media (min-width: 550px) {
        @content;
    }
}

@mixin pad {
    @media (min-width: 821px) {
        @content;
    }
}


@mixin web {
    @media (min-width: 1000px) {
        @content;
    }
}

@mixin big {
    @media (min-width: 1400px) {
        @content;
    }
}

.vote-list {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 0rem;
    height: 120px;
    width: 100%;
    margin: auto;

    @include phone {
        grid-template-columns: 1fr 2fr;
        width: 95%;
        gap: 1rem;
        height: 150px;
    }

    @include pad {
        grid-template-columns: 1fr 1.5fr;
        width: 95%;
        gap: 1rem;
        height: 150px;
    }


    @include web {
        grid-template-columns: 1fr 2fr;

    }

    @include big {
        grid-template-columns: 1fr 3fr;
    }


}



.vote-pic {
    position: relative;
    display: flex;

    img {
        position: absolute;
        border-radius: 1000px;
        width: 100px;
        fill: #FFF;
        border: 3px solid white;
        filter: drop-shadow(1.9500000476837158px 1.9500000476837158px 2.5999999046325684px rgba(0, 0, 0, 0.15));
    }
}

.vote-num {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    position: relative;

    @include pad {
        gap: 1rem;
        top: 1rem;
    }
}

.party {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    img {
        margin: auto;
        width: 30px;
        z-index: 4;
        position: absolute;
        top: 1rem;
        left: -1%;
        z-index: 10;

        @include phone {
            width: 50px;

        }
    }
}

.pic {
    position: absolute;
    left: 5%;
    filter: drop-shadow(1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15));
    z-index: 9;

    img {
        width: 80px;
        height: 80px;
        top: 1rem;
        object-fit: cover;
        z-index: 3;

        @include phone {
            width: 100px;
            height: 100px;
        }

        @include pad {
            width: 120px;
            height: 120px;
            left: 10%;
        }

    }
}

.pic2 {
    position: absolute;
    left: 50%;
    top: 2rem;

    filter: drop-shadow(1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15));



    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        z-index: 3;

        @include phone {
            width: 80px;
            height: 80px;
        }

        @include pad {
            width: 100px;
            height: 100px;
        }
    }
}

.num {
    border-radius: 100px;
    border: 2px solid;
    width: fit-content;
    color: #FF7A00;
    font-weight: 500;
    width: 25px;
    height: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1.4rem;
}

.name {
    font-size: 1.2rem;
    margin: auto;

    @include phone {
        font-size: 1.5rem;
    }
}


.up {
    display: flex;
    gap: 10px;
}

.tickets {
    font-style: normal;
    font-weight: 500;
    justify-content: end;
    display: none;
    margin: auto;

    @include phone {
        display: flex;
        font-size: 1.5rem;
    }
}

.ticketspc {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: end;

    @include phone {
        display: none;
    }
}

.pass {
    width: 30px !important;
    height: 30px;
    border-radius: 100px;
    right: 10px;

    @include pad {
        width: 30px !important;
        height: 30px;
    }
}

.vote-list {
    border-bottom: 2px solid rgba(255, 122, 0, 0.25);
    background: #FFF;

}

.vote-list {
    border-bottom: 2px solid rgba(255, 122, 0, 0.25);
    background: #FFF;

}
</style>


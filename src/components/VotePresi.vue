<template>
    <div class="layout ">
        <div class="">
            <div style="display: flex;justify-content: space-between;">
                <div class=" icontitle">
                    <img srcset="../assets/fight.png" alt="">
                    <h2>總統開票結果</h2>
                </div>

            </div>
            <div v-for="item in news3.tickets" :key="item.id" ref="" class="vote-list">
                <div class="vote-pic">
                    <div class="party">
                        <img class="vote-pic-img"
                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + item.party + '.jpg'" />
                    </div>
                    <div class="pic">
                        <img class="vote-pic-img"
                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/' + item.candName + '.jpg'" />

                    </div>
                    <div class="pic2">
                        <img
                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/candidates/' + item.candName + '2.jpg'" />
                    </div>
                </div>
                <div class="vote-num">
                    <div class="vote-num-inner">
                        <div class="up">
                            <div class="num"> {{ item.candNo }}</div>
                            <div class="name">{{ item.candName }} / {{ item.candName.replace(/柯文哲/g, '吳欣盈').replace(/賴清德/g,
                                '蕭美琴').replace(/侯友宜/g, '趙少康') }}</div>
                            <div class="tickets" :style="{ color: ticketColor }">
                                <count-up :end-val="item.ticket" :options="options"></count-up>票
                            </div>
                            <img loading="lazy" v-if="item.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                class="pass pc" style="z-index: 9;">
                        </div>
                    </div>
                    <div class="ticketspc" :style="{ color: ticketColor }">
                        <count-up :end-val="item.ticket" :options="options"></count-up>票
                        <img loading="lazy" v-if="item.winner == '*'" srcset="../assets/pass.png" alt="pass" class="pass"
                            style="z-index: 9; margin-left:1rem;">
                    </div>
                    <div style="width: 100%">
                        <LvProgressBar :value="item.ticket / 100000" :showValue="false" />
                    </div>
                </div>
            </div>
            <br>
            <div>
                <div style="display: flex;justify-content: space-between;">
                    <div class=" icontitle">
                        <img srcset="../assets/map.png" alt="" style="margin-left: 5px;">
                        <h2> 2024總統選舉政黨版圖</h2>

                    </div>
                </div>
                <div class="infogram-embed" data-id="25e7c20b-854a-4e37-99de-f8423d9b93f8" data-type="interactive"
                    data-title="'2024大選-'">
                </div>
            </div>
        </div>
        <div class="president-relatednews ">
            <div class="out">
                <div v-for="(item, index) in news" :key="index" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a class="link"
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
                        target="_blank">
                        <img loading="lazy" :src="item.Image" class="img" :alt="item.Title">
                        <div class="inner">
                            <h3 class="title">
                                {{ item.Title.replace("快新聞／", "") }}
                            </h3>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="more">
                <a href="https://www.ftvnews.com.tw/tag/總統大選">看更多相關新聞<i class="fa-solid fa-angles-right"></i></a>
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
            activateTab: 0,
            tabs: [
                { label: '2024年', link: '25e7c20b-854a-4e37-99de-f8423d9b93f8' },
            ],
            nowtime: "",
            ticketColor: 'black', // Default color
            news3: [],
            news: [],
            value: 0,
            showValue: false,
            options: {
                duration: 0,
                useEasing: true,
                useGrouping: true,
                separator: "萬",
                decimal: ",",
                prefix: "",
                suffix: "",
                formattingFn: (n) => {
                    if (n >= 10000) {
                        var formattedNumber = Math.trunc(n / 10000) + '萬';
                        var lastFourDigits = n.toString().slice(-4);
                        return formattedNumber + lastFourDigits;
                    } else {
                        return n;
                    }
                },
            },
        };
    },
    interval: null,
    methods: {

        Nowtime() {
            var time = new Date();
            this.nowtime = time.toLocaleTimeString("en-GB");
        },
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
                //檢查
                .get("https://www.ftvnews.com.tw/topics/2024election/election.json")
                .then((response) => {
                    this.news3 = response.data.T1;
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
    },
    mounted() {
        this.Nowtime();
        this.getPresi();
        this.startProgress();
    },
    beforeDestroy() {
        this.endProgress();
    },
    components: {
        LvProgressBar: LvProgressBar,
        CountUp,
    }, created() {
        // Infogram 脚本加载
        !function (e, n, i, s) {
            var d = "InfogramEmbeds";
            var o = e.getElementsByTagName(n)[0];
            if (window[d] && window[d].initialized) {
                window[d].process && window[d].process();
            } else if (!e.getElementById(i)) {
                var r = e.createElement(n);
                r.async = 1;
                r.id = i;
                r.src = s;
                o.parentNode.insertBefore(r, o);
            }
        }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
    }, watch: {
        $route(to, from) {
            // Infogram 脚本加载
            !function (e, n, i, s) {
                var d = "InfogramEmbeds";
                var o = e.getElementsByTagName(n)[0];
                if (window[d] && window[d].initialized) {
                    window[d].process && window[d].process();
                } else if (!e.getElementById(i)) {
                    var r = e.createElement(n);
                    r.async = 1;
                    r.id = i;
                    r.src = s;
                    o.parentNode.insertBefore(r, o);
                }
            }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin small {
    @media (min-width: 390px) {
        @content;
    }
}

@mixin phone {
    @media (min-width: 550px) {
        @content;
    }
}

@mixin Npad {
    @media (min-width: 786px) {
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
        grid-template-columns: 1fr 2.5fr;
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

    @include big {
        left: 13%;
    }

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

    @include big {
        left: 55%;
    }


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
    width: 20px;
    height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    margin: auto;
}

.name {
    font-size: 1.2rem;
    margin: auto;

    @include phone {
        font-size: 1.5rem;

    }

    @include big {
        font-size: 1.6rem;

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


    @include pad {
        display: flex;
        font-size: 1.8rem;
    }

    @include big {
        display: flex;
        font-size: 2rem;
    }
}

.ticketspc {
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: end;

    @include small {
        font-size: 1.5rem;
    }

    @include phone {
        font-size: 1.8rem;
    }

    @include pad {
        display: none;
    }
}

.pass {
    width: 25px !important;
    height: 25px;
    border-radius: 100px;
    right: 10px;

    @include pad {
        width: 30px !important;
        height: 30px;
    }
}

.vote-list {
    border-bottom: 1px solid rgba(255, 122, 0, 0.25);
    background: #FFF;

    &:last-child {
        border-bottom: transparent;
    }

}

.nowtime {
    font-size: .8rem;

    @include phone {
        font-size: 1rem;
        width: fit-content;

    }
}


.layout {
    border-radius: 0 0 1.25rem 1.25rem;
    padding-bottom: 0rem;

    @include pad {
        border-radius: 1.25rem;
        padding-bottom: 0.5rem;
    }
}

.pc {

    @include pad {
        display: block !important;
    }
}
</style>

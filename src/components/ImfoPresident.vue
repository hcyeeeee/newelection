<template>
    <div class="layout-president">
        <ul class="president-navtab">
            <li v-for="(candidate, index) in candidates" :key="index" @click="showCandidate(index)">
                {{ candidate.party }} {{ candidate.main.name }}/{{ candidate.sub.name }}</li>
        </ul>
        <div class="president" v-for="(candidate, index) in candidates" :key="index"
            v-show="selectedCandidateIndex === index">
            <div class="president-info">
                <div class="up">
                    <div class="president-info-pic">
                        <img src="../assets/william2024.webp" />
                    </div>

                </div>
                <div class="president-exp">
                    <ul class="president-exp-tab">
                        <li @click="activeTab = 'main'"> {{ candidate.main.name }} 學經歷</li>
                        <li @click="activeTab = 'sub'"> {{ candidate.sub.name }} 學經歷</li>
                    </ul>
                    <ul class="president-exp-tab-content" v-for="(list, index) in candidate.main.Exp" :key="index">
                        <li v-if="activeTab === 'main'"> {{ list }}</li>
                    </ul>
                    <ul class="president-exp-tab-content" v-for="(list, index) in candidate.sub.Exp" :key="index">
                        <li v-if="activeTab === 'sub'"> {{ list }}</li>
                    </ul>
                </div>
            </div>
            <div class="president-news">
                <div class="president-news-title">相關新聞</div>
                <div class="president-news-inner">
                    <img src="" alt="">
                    <div class="hot_news2">
                        <div v-for="(item, index) in news" :key="index">
                            <a class="hot_news_out"
                                :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                                target="_blank">
                                <img :src="item.Image" class="cand_news_img" alt="新聞照片">
                                <div>
                                    <p class="hot_news_title">
                                        <i class="fa-duotone fa-play"></i>&nbsp;&nbsp;{{ item.Title.replace("快新聞／", "") }}
                                    </p>
                                    <div class="time">{{ item.CreateDate }}</div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <p> 新聞新聞新聞</p>
                    <p> time</p>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
import axios from 'axios';
export default {
    computed: {
        assetsImg() {
            return '/1.png'
        },
    },
    data() {
        return {
            news: [],
            activeTab: 'main',
            selectedCandidateIndex: null,
            candidates: [
                {
                    num: "1",
                    party: "民主進步黨",
                    main: {
                        name: "賴清德",
                        age: "63",
                        Exp: [
                            "賴清德立法委員",
                            "第二行"
                        ],
                    },
                    sub: {
                        name: "副總統",
                        Exp: [
                            "立法院第9、10屆立法委員",
                            "萬澤外國法事務律師事務所主持律師"
                        ],
                        age: "65",
                    },
                },
                {
                    num: "2",
                    party: "中國國民黨",
                    main: {
                        name: "侯友宜",
                        age: "3",
                        Exp: [
                            "警察",
                            "侯友宜律師"
                        ],
                    },
                    sub: {
                        name: "副總統",
                        Exp: [
                            "立法警察",
                            "萬澤警察"
                        ],
                        age: "65",
                    },
                },
                {
                    num: "3",
                    party: "台灣民眾黨",
                    main: {
                        name: "柯文哲",
                        age: "3",
                        Exp: [
                            "台北市長",
                            "台大醫院"
                        ],
                    },
                    sub: {
                        name: "副總統",
                        Exp: [
                            "立法院第9、10屆立法委員",
                            "萬澤外國法事務律師事務所主持律師"
                        ],
                        age: "65",
                    },
                },
                {
                    num: "4",
                    party: "無黨籍",
                    main: {
                        name: "郭台民",
                        age: "59",
                        Exp: [
                            "鴻海",
                            "台大醫院"
                        ],
                    },
                    sub: {
                        name: "副總統",
                        Exp: [
                            "立法院第9、10屆立法委員",
                            "萬澤外國法事務律師事務所主持律師"
                        ],
                        age: "65",
                    },
                }
            ],
        };
    }, methods: {
        showCandidate(index) {
            this.selectedCandidateIndex = index;
        }
    },
    created() {
        this.showCandidate(0);

    },
    mounted() {
        axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=賴清德&高虹安&Page=1&sp=4")
            .then((response) => {
                this.news = response.data.ITEM; // 将获取的新闻数据赋值给Vue实例的news属性
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

</script>

<style lang="scss">
.layout-president {
    .president-navtab {
        flex-direction: row;
        width: 90%;
        justify-content: space-around;
        margin: auto;
        display: flex;
        padding: 1rem;
    }

    .president {
        display: flex;

        .president-info {
            display: flex;
            flex-direction: column;


            .up {
                display: flex;
            }

            .president-info-pic {
                width: 200px;

                img {
                    width: 100%;
                }
            }
        }

        .president-exp {
            .president-exp-tab {
                display: flex;
                gap: 1rem
            }
        }

        .president-news {}
    }

}
</style>
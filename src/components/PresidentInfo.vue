<template>
    <div class="layout-president layout">
        <ul class="president-navtab">
            <li v-for="(candidate, index) in candidates" :key="index" @click="showCandidate(index)">
                {{ candidate.party }} {{ candidate.main.name }}/{{ candidate.sub.name }}</li>
        </ul>
        <div class="president" v-for="(candidate, index) in candidates" :key="index"
            v-show="selectedCandidateIndex === index">
            <div class="president-info">
                <div class="up">
                    <div class="president-info-pic">
                        <img src="../assets/lai.png" />
                    </div>
                </div>
                <div class="president-exp">
                    <ul class="tab">
                        <li @click="activeTab = 'main'"> {{ candidate.main.name }} 學經歷</li>
                        <li @click="activeTab = 'sub'"> {{ candidate.sub.name }} 學經歷</li>
                    </ul>
                    <ul class="content" v-for="(list, index) in candidate.main.Exp" :key="index">
                        <li v-if="activeTab === 'main'"> {{ list }}</li>
                    </ul>
                    <ul class="content" v-for="(list, index) in candidate.sub.Exp" :key="index">
                        <li v-if="activeTab === 'sub'"> {{ list }}</li>
                    </ul>
                </div>
            </div>
            <div class="president-news">
                <h2 class="title">相關新聞</h2>
                <div v-for="(item, index) in news" :key="index" class="out">
                    <a class="link"
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
                        target="_blank">
                        <img :src="item.Image" class="img" alt="新聞照片">
                        <div class="inner">
                            <p class="title">
                                {{ item.Title.replace("快新聞／", "") }}
                            </p>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </div>
                <a href="https://www.ftvnews.com.tw/tag/政治">看更多相關新聞</a>
            </div>
            <div class="president-policy">
                <h2 class="">政見</h2>
                <p>{{ candidate.main.policy }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    computed: {
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
                        policy: "賴清德曾在記者會上表示，2024大選的總目標為，總統高票當選、國會單獨過半來穩定的民主力量，實踐「民主團結」、「民主治理」、「民主和平」三大民主行動，來推動國家希望工程，達到「民主」、「繁榮」、「和平」的目標。",
                        Exp: [
                            "賴清德立法委員",
                            "第二行",
                            "立法院第9、10屆立法委員",
                            "萬澤外國法事務律師事務所主持律師",
                            "美國WSGR律師事務所執業律師",
                            "賓夕法尼亞大學法律博士",
                            "立法院第9、10屆立法委員",
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
                        policy: "2賴清德曾在記者會上表示，2024大選的總目標為，總統高票當選、國會單獨過半來穩定的民主力量，實踐「民主團結」、「民主治理」、「民主和平」三大民主行動，來推動國家希望工程，達到「民主」、「繁榮」、「和平」的目標。",
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
                        policy: "3賴清德曾在記者會上表示，2024大選的總目標為，總統高票當選、國會單獨過半來穩定的民主力量，實踐「民主團結」、「民主治理」、「民主和平」三大民主行動，來推動國家希望工程，達到「民主」、「繁榮」、「和平」的目標。",
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
                        policy: "4賴清德曾在記者會上表示，2024大選的總目標為，總統高票當選、國會單獨過半來穩定的民主力量，實踐「民主團結」、「民主治理」、「民主和平」三大民主行動，來推動國家希望工程，達到「民主」、「繁榮」、「和平」的目標。",
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
        axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=賴清德&高虹安&Page=1&sp=6")
            .then((response) => {
                this.news = response.data.ITEM; // 将获取的新闻数据赋值给Vue实例的news属性
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

</script>

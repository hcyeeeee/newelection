<template>
    <div class="layout-president layout">
        <ul class="president-navtab pc">
            <li class="pc" v-for="(candidate, index) in candidates" :key="index" @click="showCandidate(index)">
                {{ candidate.party }} {{ candidate.main.name }}/{{ candidate.sub.name }}</li>
        </ul>

        <select @change="onCandidateSelect" v-model="selectedCandidate" class="mb">

            <option value="none" selected disabled hidden>民進黨 賴清德</option>
            <option v-for="(candidate, index) in candidates" :key="index" :value="candidate">
                {{ candidate.party }} {{ candidate.main.name }}/{{ candidate.sub.name }}
            </option>
        </select>

        <div class="president" v-for="(candidate, index) in  candidates " :key="index"
            v-show="selectedCandidateIndex === index">
            <div class="president-info">
                <div class="up">
                    <div class="president-info-pic">
                        <img :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.main.name + '.png'" />
                    </div>
                </div>
                <div class="president-exp">
                    <ul class="tab">
                        <li @click="activeTab = 'main'"> {{ candidate.main.name }} 學經歷</li>
                        <li @click="activeTab = 'sub'"> {{ candidate.sub.name }} 學經歷</li>
                    </ul>
                    <ul class="content" v-for="( list, index ) in  candidate.main.Exp " :key="index">
                        <li v-if="activeTab === 'main'"> {{ list }}</li>
                    </ul>
                    <ul class="content" v-for="( list, index ) in  candidate.sub.Exp " :key="index">
                        <li v-if="activeTab === 'sub'"> {{ list }}</li>
                    </ul>
                </div>
            </div>
            <div class="president-news">
                <h2 class="title"><i class="fa-solid fa-message"></i>&nbsp;相關新聞</h2>
                <div v-for="( item, index ) in  news " :key="index" class="out">
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

        </div>
        <div class="president-policy " v-for="(candidate, index) in  candidates " :key="index"
            v-show="selectedCandidateIndex === index">
            <h2 class=""><i class="fa-solid fa-book-open"></i>&nbsp;政見</h2>
            <p class="animate__animated animate__fadeInRight">{{ candidate.main.policy }}</p>
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
            candidates: [
                {
                    num: "1",
                    party: "民進黨",
                    main: {
                        name: "賴清德",
                        age: "63",
                        policy: "賴清德曾在記者會上表示，2024大選的總目標為，總統高票當選、國會單獨過半來穩定的民主力量，實踐「民主團結」、「民主治理」、「民主和平」三大民主行動，來推動國家希望工程，達到「民主」、「繁榮」、「和平」的目標。",
                        Exp: [
                            "國立台灣大學復健醫學系學士",
                            "國立成功大學學士後醫學系",
                            "哈佛大學公共衛生學院碩士",
                            "台南成大醫院主治醫師",
                            "新樓醫院主治醫師",
                            "1996年　當選台南市選區的第三屆國民大會代表",
                            "1998年　當選台南市選區立法委員",
                            "2010年　改制直轄市後的第一屆台南市市長",
                            "2014年　連任台南市市長",
                            "2020年　當選副總統",
                            "2023年　成為民進黨主席",

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
                    party: "國民黨",
                    main: {
                        name: "侯友宜",
                        age: "3",
                        policy: "侯友宜今年初參與活動時曾喊出「社會公平、兩岸和平、國家泰平、人民安心、社會安定、國家安全」三平三安的口號。侯友宜指出，中央地方合作應該朝這個方向進行，只要解決里鄰大小事並充分與人民溝通，最後做出正確的決定就可以讓人民安心。",
                        Exp: [
                            "中央警察大學犯罪防治研究所法學博士",
                            "台北市政府警察局刑事警察大隊分隊長",
                            "桃園縣政府警察局局長",
                            "內政部警政署刑事警察局局長",
                            "內政部警政署署長",
                            "中央警察大學校長",
                            "2010年　擔任新北市副市長",
                            "2018年　當選新北市長",
                            "2022年　連任新北市長",
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
                    party: "民眾黨",
                    main: {
                        name: "柯文哲",
                        age: "3",
                        policy: "柯文哲20日召開政見會。主題將講述「社會和諧、政黨和解、兩岸和平」，以宣揚理念為主。",
                        Exp: [
                            "台灣大學醫學院臨床醫學研究所博士",
                            "台大醫院急診部醫師",
                            "台大醫院創傷醫學部主任",
                            "台大醫學院教授",
                            "1994年　擔任陳水扁競選台北市長的醫界後援會幹部",
                            "2000年　擔任陳水扁競選總統台大醫院後援會召集人",
                            "2012年6月　擔任陳水扁民間醫療小組召集人",
                            "2013年擔任小英之友會常任理事",
                            "2014年當選台北市長",
                            "2018年連任台北市長",
                            "2019年被推舉為民眾黨首任黨主席",
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
                        name: "郭台銘",
                        age: "59",
                        policy: "郭台銘在參選總統聲明中表示，「台灣未來的總統，需要具有對產業發展的洞察力、對世界經濟局勢的理解力，更需要有帶領人民走出困局的執行力。這是台灣未來總統迫切需要的領導力，「企業家治國」的時代來臨了。」",
                        Exp: [
                            "中國海事專科學校（今臺北海洋科技大學）航運管理科",
                            "1970年　加入中國國民黨",
                            "1974年　創立鴻海集團",
                            "2019年　改任鴻海集團董事",
                            "2019年　參加國民黨總統初選但未獲提名",
                            "2000年　退出中國國民黨",
                            "2019年4-9月　短暫入中國國民黨又退出",
                            "2023年　參加國民黨總統初選但未獲提名",
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
            selectedCandidate: 0,// 存储所选的候选人
            selectedCandidateIndex: 0, // 存储所选候选人的索引

        };
    }, methods: {
        onCandidateSelect() {
            // 当用户选择候选人时，更新索引
            this.selectedCandidateIndex = this.candidates.indexOf(this.selectedCandidate);
        },
        showCandidate(index) {
            this.selectedCandidateIndex = index;
            this.fetchNews();
        }, fetchNews() {
            if (this.selectedCandidateIndex !== null) {
                const candidateName = this.candidates[this.selectedCandidateIndex].main.name;
                const url = `https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${candidateName}&Page=1&sp=6`;
                axios
                    .get(url)
                    .then((response) => {
                        this.news = response.data.ITEM;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        },
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

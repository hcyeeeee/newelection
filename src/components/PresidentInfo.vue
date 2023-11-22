<template>
    <div class="layout-president layout">
        <div class="icontitle">
            <img src="../assets/HomePresi.png" alt="">
            <h2>總統候選人</h2>
        </div>
        <ul class="president-navtab pc">
            <li class="pc " :class="{ 'active': index === selectedCandidateIndex }" v-for="(candidate, index) in candidates"
                :key="index" @click="showCandidate(index)">
                <h2>{{ candidate.party }} {{ candidate.main.name }}{{ candidate.sub.name }}</h2>
            </li>
            <!-- /{{ candidate.sub.name }}</li> -->
        </ul>

        <select @change="onCandidateSelect" v-model="selectedCandidate" class="mb custom-select form-control info-select ">
            <option value="" disabled>請選擇候選人</option>
            <option v-for="(candidate, index) in candidates" :key="index" :value="candidate">
                {{ candidate.party }} {{ candidate.main.name }}
                <!-- /{{ candidate.sub.name }} -->
            </option>
        </select>

        <div class="president" v-for="(candidate, index) in  candidates " :key="index"
            v-show="selectedCandidateIndex === index">
            <div class="president-info">
                <div class="up">
                    <div class="president-info-pic">
                        <img loading="lazy"
                            :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.main.name + '.png'" />
                    </div>
                </div>
                <div class="president-exp">
                    <ul class="tab">
                        <li @click="activeTab = 'main'" :class="{ 'fo': activeTab === 'main' }"> {{ candidate.main.name }}
                            學經歷</li>
                        <li @click="activeTab = 'sub'" :class="{ 'fo': activeTab === 'sub' }"
                            v-if="candidate.sub.name == '/蕭美琴'">
                            {{ candidate.sub.name.replace("/", "") }} 學經歷
                        </li>
                    </ul>
                    <ul :class="{ 'content': activeTab === 'main' }" v-for="( list, index ) in  candidate.main.Exp "
                        :key="index">
                        <li v-if="activeTab === 'main'"> {{ list }}</li>
                    </ul>
                    <ul :class="{ 'content': activeTab === 'sub' }" v-for="( list, index ) in  candidate.sub.Exp "
                        :key="index">
                        <li v-if="activeTab === 'sub'"> {{ list }}</li>
                    </ul>
                    <div class="president-policy " v-for="(candidate, index) in  candidates " :key="index"
                        v-show="selectedCandidateIndex === index">
                        <div class="icontitle">
                            <img src="../assets/policy.png" alt="">
                            <h2>政見</h2>
                        </div>
                        <h3 class="">{{ candidate.main.policy }}</h3>
                    </div>
                </div>

            </div>

            <div class="president-news">
                <div class="icontitle">
                    <img src="../assets/News.png" alt="">
                    <h2>{{ candidate.main.name }}相關新聞</h2>
                </div>
                <div v-for="( item, index ) in  news " :key="index" class="out" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
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
                <div class="more">
                    <a :href="'https://www.ftvnews.com.tw/tag/' + candidate.main.name">看更多相關新聞<i
                            class="fa-solid fa-angles-right"></i></a>
                </div>
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
            activeIndex: 0, // 默认选项的索引
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
                            "1996年當選台南市選區的第三屆國民大會代表",
                            "1998年當選台南市選區立法委員",
                            "2010年改制直轄市後的第一屆台南市市長",
                            "2014年連任台南市市長",
                            "2020年當選副總統",
                            "2023年成為民進黨主席",

                        ],

                    },
                    sub: {
                        name: "/蕭美琴",
                        Exp: [
                            "紐澤西州蒙特克萊爾高中",
                            "美國歐柏林學院東亞研究學士",
                            "美國哥倫比亞大學政治學碩士學位",
                            "民主進步黨中央黨部國際事務部副主任",
                            "民主進步黨中央黨部國際事務部主任（歷任五任）",
                            "第5、6、8、9屆立法院委員",
                            "中華民國第15任駐美國代表（對內官銜為駐美國大使）"
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
                            "2010年擔任新北市副市長",
                            "2018年當選新北市長",
                            "2022年連任新北市長",
                        ],
                    },
                    sub: {
                        name: "",
                        Exp: [
                            "中央警察大學犯罪防治研究所法學博士",
                            "台北市政府警察局刑事警察大隊分隊長",
                            "桃園縣政府警察局局長",
                            "內政部警政署刑事警察局局長",
                            "內政部警政署署長",
                            "中央警察大學校長",
                            "2010年擔任新北市副市長",
                            "2018年當選新北市長",
                            "2022年連任新北市長",
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
                            "1994年擔任陳水扁競選台北市長的醫界後援會幹部",
                            "2000年擔任陳水扁競選總統台大醫院後援會召集人",
                            "2012年6月擔任陳水扁民間醫療小組召集人",
                            "2013年擔任小英之友會常任理事",
                            "2014年當選台北市長",
                            "2018年連任台北市長",
                            "2019年被推舉為民眾黨首任黨主席",
                        ],
                    },
                    sub: {
                        name: "",
                        Exp: [
                            "台灣大學醫學院臨床醫學研究所博士",
                            "台大醫院急診部醫師",
                            "台大醫院創傷醫學部主任",
                            "台大醫學院教授",
                            "1994年擔任陳水扁競選台北市長的醫界後援會幹部",
                            "2000年擔任陳水扁競選總統台大醫院後援會召集人",
                            "2012年6月擔任陳水扁民間醫療小組召集人",
                            "2013年擔任小英之友會常任理事",
                            "2014年當選台北市長",
                            "2018年連任台北市長",
                            "2019年被推舉為民眾黨首任黨主席",
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
                            "1970年加入中國國民黨",
                            "1974年創立鴻海集團",
                            "2019年改任鴻海集團董事",
                            "2019年參加國民黨總統初選但未獲提名",
                            "2000年退出中國國民黨",
                            "2019年4-9月短暫入中國國民黨又退出",
                            "2023年參加國民黨總統初選但未獲提名",
                        ],
                    },
                    sub: {
                        name: "",
                        Exp: [
                            "中國海事專科學校（今臺北海洋科技大學）航運管理科",
                            "1970年加入中國國民黨",
                            "1974年創立鴻海集團",
                            "2019年改任鴻海集團董事",
                            "2019年參加國民黨總統初選但未獲提名",
                            "2000年退出中國國民黨",
                            "2019年4-9月短暫入中國國民黨又退出",
                            "2023年參加國民黨總統初選但未獲提名",
                        ],
                        age: "65",
                    },
                }
            ],
            selectedCandidate: "",// 存储所选的候选人
            selectedCandidateIndex: 0, // 存储所选候选人的索引

        };
    }, methods: {
        showCandidate(index) {
            // 在点击时更新 activeIndex
            this.activeIndex = index;
            // 执行其他相关操作
        },
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
    }, mounted() {
        if (this.candidates.length > 0) {
            this.selectedCandidate = this.candidates[0];
        }
    },
}

</script>
<style scoped lang="scss">
.active {
    background: rgba(255, 122, 0, 0.20);
    border-bottom: 2px solid #f08308 !important;
}

li {
    h2 {
        font-size: 1.1rem;
        margin: 0;
        color: black;
        white-space: nowrap;
    }

}

.layout-president .president-navtab {
    gap: 1rem;
}
</style>
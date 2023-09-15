<template>
    <div class="layout-president layout">
        <!-- <ul class="president-navtab">
            <li v-for="(candidate, index) in candidates" :key="index" @click="showCandidate(index)">
                {{ candidate.main.name }}/{{ candidate.sub.name }}</li>
        </ul>
        <div class="president" v-for="(candidate, index) in candidates" :key="index"
            v-show="selectedCandidateIndex === index">
            <div class="president-info">
                <div class="president-exp">
                    <ul class="content" v-for="(list, index) in candidate.main.Exp" :key="index">
                        <li v-if="activeTab === 'main'"> {{ list }}</li>
                    </ul>
                    <ul class="content" v-for="(list, index) in candidate.sub.Exp" :key="index">
                        <li v-if="activeTab === 'sub'"> {{ list }}</li>
                    </ul>
                </div>
            </div>
        </div> -->
        <table border="1">
            <thead>
                <tr>
                    <th>Area</th>
                    <th>City</th>
                    <th>Zone</th>
                    <th>Name</th>
                    <th>Party</th>
                </tr>
            </thead>
            <tbody>
                <!-- 使用Vue循环来动态渲染表格 -->
                <tr v-for="(candidate, index) in candidates" :key="index">
                    <td>{{ candidate.area }}</td>
                    <td>{{ candidate.city }}</td>
                    <td>{{ candidate.zone }}</td>
                    <td>{{ candidate.name }}</td>
                    <td>{{ candidate.party }}</td>
                </tr>
            </tbody>
        </table>
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

<style lang="scss"></style>
<template>
    <div>
        <button @click="selectedRegion = '北部地區'">北部地區</button>
        <button @click="selectedRegion = '中部地區'">中部地區</button>
        <button @click="selectedRegion = '南部地區'">南部地區</button>

        <div v-if="selectedRegion">
            <button v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName"
                @click="showCandidates(cityName)" :class="{ 'active': selectedCity === cityName }">
                {{ cityName }}
            </button>
        </div>
        <div v-if="selectedCity">
            <h2>{{ selectedCity }}</h2>
            <ul>
                <li v-for="(candidate, index) in electionData[selectedRegion][selectedCity]" :key="index">
                    {{ candidate.name }} ({{ candidate.party }})
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        assetsImg() {
            return '/1.png'
        },
    },
    data() {
        return {
            selectedRegion: '北部地區',
            selectedCity: '', // 不再设置默认值
            showCities: false,
            selectedCandidateIndex: null,
            electionData: {
                "北部地區": {
                    "Taipei": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "吳思瑤"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "張斯綱"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "王世堅"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "游淑慧"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "謝佩芬"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "王鴻薇"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "高嘉瑜"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "李彥秀"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "吳沛憶"
                        },
                        {
                            "distrist": 6,
                            "party": "社民黨",
                            "name": "苗博雅"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "羅智強"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "許淑華"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "徐巧芯"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "王閔生"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "賴士葆"
                        },
                        {
                            "distrist": 8,
                            "party": "民眾黨",
                            "name": "張其祿"
                        }
                    ],
                    "NewTaipei": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "何博文"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "洪孟楷"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "林淑芬"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "李坤城"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "蔡明堂"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "吳秉叡"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "蔡欣璋"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "蘇巧慧"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "洪佳君"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "張宏陸"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "林國春"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "羅致政"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "葉元之"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "吳崢"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "張智倫"
                        },
                        {
                            "distrist": 8,
                            "party": "民眾黨",
                            "name": "邱臣遠"
                        },
                        {
                            "distrist": 9,
                            "party": "民進黨",
                            "name": "莊銘淵"
                        },
                        {
                            "distrist": 9,
                            "party": "國民黨",
                            "name": "林德福"
                        },
                        {
                            "distrist": 10,
                            "party": "民進黨",
                            "name": "吳琪銘"
                        },
                        {
                            "distrist": 10,
                            "party": "國民黨",
                            "name": "林金結"
                        },
                        {
                            "distrist": 11,
                            "party": "民進黨",
                            "name": "曾柏瑜"
                        },
                        {
                            "distrist": 11,
                            "party": "國民黨",
                            "name": "羅明才"
                        },
                        {
                            "distrist": 12,
                            "party": "民進黨",
                            "name": "賴品妤"
                        },
                        {
                            "distrist": 12,
                            "party": "國民黨",
                            "name": "廖先翔"
                        }
                    ],
                    "NewTaipei": [

                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "鄭運鵬"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "牛煦庭"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "黃世杰"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "涂權吉"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "彭俊豪"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "魯明哲"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "范綱祥"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "萬美玲"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "劉仁照"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "呂玉玲"
                        },
                        {
                            "distrist": 5,
                            "party": "民眾黨",
                            "name": "賴香伶"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "邱若華"
                        },
                        {
                            "distrist": 6,
                            "party": "無黨",
                            "name": "趙正宇"
                        }

                    ],
                    "基隆": [

                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "鄭文婷"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "林沛祥"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨",
                            "name": "王醒之"
                        }

                    ],
                    "宜蘭": [

                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "陳俊宇"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "黃琤婷"
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "陳琬惠"
                        },
                        {
                            "distrist": 1,
                            "party": "基進黨",
                            "name": "林意評"
                        }

                    ]
                },
                "中部地區": {
                    "台中": [

                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "蔡其昌"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "劉燈鐘"
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "蔡壁如"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "林靜儀"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "顏寬恒"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "謝子涵"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "楊瓊瓔"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "張廖萬堅"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "廖偉翔"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "莊競程"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "黃健豪"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "江肇國"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "羅廷瑋"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "何欣純"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "林家興"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "謝志忠"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "江啟臣"
                        }

                    ]
                },
                "南部地區": {
                    "台男": [

                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "蔡其昌"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "劉燈鐘"
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "蔡壁如"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "林靜儀"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "顏寬恒"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "謝子涵"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "楊瓊瓔"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "張廖萬堅"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "廖偉翔"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "莊競程"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "黃健豪"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "江肇國"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "羅廷瑋"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "何欣純"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "林家興"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "謝志忠"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "江啟臣"
                        }

                    ]
                }
            }
        };
    }, methods: {
        showCandidates(cityName) {
            this.selectedCity = cityName;
        },
        getDefaultCity(region) {
            // 返回指定地區的第一个縣市的名稱
            const cities = Object.keys(this.electionData[region]);
            const defaultCity = cities[0]; // 獲取第一个城市
            console.log(`getDefaultCity(${region}) => ${defaultCity}`);
            return defaultCity;
        },
    },
    created() {


    },
    mounted() {
        this.selectedRegion = '北部地區';
        this.selectedCity = 'Taipei';
    }

}

</script>

<style lang="scss">
img {
    width: 10px;
}
</style>
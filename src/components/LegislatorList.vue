<template>
    <div class="layout">
        <div class="icontitle">
            <img src="../assets/LegisList.png" alt="">
            <h2>{{ selectedCity }}立委參選名單</h2>
        </div>
        <div class="Region-navtab">
            <li @click="selectRegion('北部地區')" :class="{ 'active': selectedRegion === '北部地區' }">北部地區</li>
            <li @click="selectRegion('中部地區')" :class="{ 'active': selectedRegion === '中部地區' }">中部地區</li>
            <li @click="selectRegion('南部地區')" :class="{ 'active': selectedRegion === '南部地區' }">南部地區</li>
            <li @click="selectRegion('東部地區')" :class="{ 'active': selectedRegion === '東部地區' }">東部地區</li>
            <li @click="selectRegion('離島地區')" :class="{ 'active': selectedRegion === '離島地區' }">離島地區</li>
            <li @click="selectRegion('原住民地區')" :class="{ 'active': selectedRegion === '原住民地區' }">平地/山地原住民</li>
        </div>

        <div class="List_mb">
            <div class="Region-navtab_mb">
                <select v-model="selectedRegion" class="custom-select ">
                    <option value="北部地區">北部地區</option>
                    <option value="中部地區">中部地區</option>
                    <option value="南部地區">南部地區</option>
                    <option value="東部地區">東部地區</option>
                    <option value="離島地區">離島地區</option>
                    <option value="原住民地區">原住民</option>
                </select>
            </div>

            <select v-model="selectedCity" class="custom-select select_mb">
                <option v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName">{{ cityName }}</option>
            </select>
        </div>
        <div v-if="selectedRegion">
            <div class="Region">
                <div v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName" @click="selectCity(cityName)"
                    :class="{ 'active': selectedCity === cityName }" class="Regionbtn">
                    {{ cityName }}
                </div>
            </div>

            <div class="tablelayout_pc">
                <table>
                    <thead>
                        <tr>
                            <th>選區</th>
                            <th>政黨</th>
                            <th>姓名</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(candidate, index) in electionData[selectedRegion][selectedCity]" :key="index">
                            <td v-if="index % 2 === 0">{{ candidate.distrist }}</td>
                            <td v-if="index % 2 === 0"> <img class="partyicon"
                                    :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                    :alt="candidate.party">{{
                                        candidate.party }}</td>
                            <td v-if="index % 2 === 0">{{ candidate.name }}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>選區</th>
                            <th>政黨</th>
                            <th>姓名</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(candidate, index) in electionData[selectedRegion][selectedCity]" :key="index">
                            <td v-if="index % 2 === 1">{{ candidate.distrist }}</td>
                            <td v-if="index % 2 === 1">
                                <img class="partyicon" loading="lazy"
                                    :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                    alt="">
                                {{ candidate.party }}
                            </td>
                            <td v-if="index % 2 === 1">{{ candidate.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class=" tablelayout_mb">
                <table>
                    <thead>
                        <tr>
                            <th>選區</th>
                            <th>政黨</th>
                            <th>姓名</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(candidate, index) in electionData[selectedRegion][selectedCity]" :key="index">
                            <td>{{ candidate.distrist }}</td>
                            <td> <img class="partyicon"
                                    :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                    :alt="candidate.party">{{
                                        candidate.party }}</td>
                            <td>{{ candidate.name }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            selectedRegion: null,
            selectedCity: null,
            electionData: {
                "北部地區": {
                    "台北市": [
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
                    "新北市": [
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
                    "基隆市": [
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
                            "party": "無黨籍",
                            "name": "王醒之"
                        }
                    ],
                    "桃園市": [
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
                            "party": "無黨籍",
                            "name": "趙正宇"
                        }
                    ],
                    "新竹市": [
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "鄭正鈐"
                        },
                        {
                            "distrist": 1,
                            "party": "時代力量",
                            "name": "邱顯智"
                        },
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "林志潔"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "柯美蘭"
                        }
                    ],
                    "新竹縣": [
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "徐欣瑩"
                        },
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "詹紀緹"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "林思銘"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "曾聖凱"
                        },
                        {
                            "distrist": 2,
                            "party": "時代力量",
                            "name": "王婉諭"
                        }
                    ],
                    "宜蘭縣": [
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
                    "臺中市": [
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
                    ],
                    "苗栗縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "康世明"
                        },
                        {
                            "distrist": 2,
                            "party": "無黨籍",
                            "name": "陳超明"
                        },
                        {
                            "distrist": 2,
                            "party": "無黨籍",
                            "name": "曾玟學"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "邱鎮軍"
                        }
                    ],
                    "彰化縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "陳秀寳"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "阮厚爵"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "黃秀芳"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "陽曜聰"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "吳音寧"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "謝衣鳯"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "陳素月"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "鄭俊雄"
                        }
                    ],
                    "南投縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "蔡銘軒"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "馬文君"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "蔡培慧"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "游顥"
                        }
                    ],
                    "雲林縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "蘇治芬"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "丁學忠"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "劉建國"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "邱良閱"
                        }
                    ]
                },
                "南部地區": {
                    "高雄市": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "邱議瑩"
                        },
                        {
                            "distrist": 1,
                            "party": "公民黨",
                            "name": "江嘉盛"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "邱志偉"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "曹桓榮"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "李柏毅"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "李眉蓁"
                        },
                        {
                            "distrist": 3,
                            "party": "台灣麻將最大黨",
                            "name": "郭璽"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "林岱樺"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "陳若翠"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "李昆澤"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "黃柏霖"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "趙天麟"
                        },
                        {
                            "distrist": 6,
                            "party": "喜樂島聯盟",
                            "name": "郭倍宏"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "陳美雅"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "許智傑"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "鍾易仲"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "賴瑞隆"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "李明璇"
                        }
                    ],
                    "臺南市": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "賴惠員"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "周宏昌"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "郭國文"
                        },
                        {
                            "distrist": 2,
                            "party": "無黨籍",
                            "name": "陳昆和"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "陳亭妃"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "姚正玉"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "林宜瑾"
                        },
                        {
                            "distrist": 4,
                            "party": "無黨籍",
                            "name": "李全教"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "林俊憲"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "王家貞"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "王定宇"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "陳以信"
                        }
                    ],
                    "嘉義市": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "王美惠"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "張秀華"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "蔡松益"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "簡明廉"
                        }
                    ],
                    "嘉義縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "蔡易餘"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "詹琬蓁"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "陳冠廷"
                        },
                        {
                            "distrist": 2,
                            "party": "無黨籍",
                            "name": "林國慶"
                        }
                    ],
                    "屏東縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "鍾佳濱"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "黃明賢"
                        },
                        {
                            "distrist": 2,
                            "party": "無黨籍",
                            "name": "蘇孟淳"
                        }
                    ],
                    "澎湖縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "楊曜"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "吳政杰"
                        }
                    ]
                },
                "東部地區": {
                    "花蓮縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "張美慧"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "傅崐萁"
                        }
                    ],
                    "臺東縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "賴坤成"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "黃建賓"
                        }
                    ]
                },
                "離島地區": {
                    "金門縣": [
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "陳玉珍"
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "尚文凱"
                        },
                        {
                            "distrist": 1,
                            "party": "基進黨",
                            "name": "楊佩樺"
                        }
                    ],
                    "連江縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "李問"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "陳雪生"
                        }
                    ]
                },
                "原住民地區": {
                    "平地原住民": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "陳瑩"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "鄭天財"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "黃仁"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "陳政宗"
                        }
                    ],
                    "山地原住民": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "伍麗華"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "孔文吉"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "盧縣一"
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "胡黃慶文"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "高金素梅"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "撒丰安·瓦林及那"
                        }
                    ]
                }
            }
        };
    }, methods: {
        selectCity(cityName) {
            // 当选择城市时更新selectedCity
            this.selectedCity = cityName;
        },
        getDefaultCity(region) {
            // 返回指定地區的第一个縣市的名稱
            const cities = Object.keys(this.electionData[region]);
            const defaultCity = cities[0]; // 獲取第一个城市
            console.log(`getDefaultCity(${region}) => ${defaultCity}`);
            return defaultCity;
        }, selectRegion(region) {
            this.selectedRegion = region;
        }
    }, watch: {
        selectedRegion(newRegion) {
            // 在selectedRegion更改时，选择该地区的第一个城市
            const cities = this.electionData[newRegion];
            if (cities) {
                const firstCity = Object.keys(cities)[0];
                this.selectedCity = firstCity;
            }
        },
    },
    mounted() {
        this.selectedRegion = '北部地區',
            this.selectedCity = 'Taipei'
    }

}

</script>

<style lang="scss" scoped>
.partyicon {
    width: 30px !important;
    border-radius: 100px;
    margin-right: 1rem;
}
</style>
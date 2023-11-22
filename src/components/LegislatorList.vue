<template>
    <div class="layout">
        <div class="icontitle">
            <img src="../assets/LegisList.png" alt="">
            <h2
                v-if="selectedRegion == '北部地區' || selectedRegion == '中部地區' || selectedRegion == '南部地區' || selectedRegion == '東部地區' || selectedRegion == '離島地區' || selectedRegion == '原住民地區'">
                {{ selectedCity }}立委參選名單</h2>
            <h2 v-if="selectedRegion == '不分區'">
                {{ selectedCity }}不分區立委參選名單</h2>

        </div>

        <div class="dddd">
            <div class="Region-navtab pc">
                <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                <li @click="selectRegion('北部地區')" :class="{ 'active': selectedRegion === '北部地區' }">北部地區</li>
                <li @click="selectRegion('中部地區')" :class="{ 'active': selectedRegion === '中部地區' }">中部地區</li>
                <li @click="selectRegion('南部地區')" :class="{ 'active': selectedRegion === '南部地區' }">南部地區</li>
                <li @click="selectRegion('東部地區')" :class="{ 'active': selectedRegion === '東部地區' }">東部地區</li>
                <li @click="selectRegion('離島地區')" :class="{ 'active': selectedRegion === '離島地區' }">離島地區</li>
                <li @click="selectRegion('原住民地區')" :class="{ 'active': selectedRegion === '原住民地區' }">平地/山地原住民</li>
                <li @click="selectRegion('不分區')" :class="{ 'active': selectedRegion === '不分區' }">不分區立委</li>
            </div>
            <div v-if="selectedRegion == '北部地區' || selectedRegion == '中部地區' || selectedRegion == '南部地區' || selectedRegion == '東部地區' || selectedRegion == '離島地區' || selectedRegion == '原住民地區'"
                style="margin-top: 1.5rem;">
                <div class=" Region">
                    <div v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName"
                        @click="selectCity(cityName)" :class="{ 'active': selectedCity === cityName }" class="Regionbtn">
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
                                <td v-if="index < 14">{{ candidate.distrist }}</td>
                                <td v-if="index < 14"> <img class="partyicon"
                                        :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                        :alt="candidate.party">
                                    <h3>{{ candidate.party }}</h3>
                                </td>
                                <td v-if="index < 14">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table v-if="selectedCity == '台北市' || selectedCity == '新北市'">
                        <thead>
                            <tr>
                                <th>選區</th>
                                <th>政黨</th>
                                <th>姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="( candidate, index ) in  electionData[selectedRegion][selectedCity] " :key="index">
                                <td v-if="index >= 14">{{ candidate.distrist }}</td>
                                <td v-if="index >= 14"> <img class="partyicon"
                                        :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                        :alt="candidate.party">
                                    <h3>{{ candidate.party }}</h3>
                                </td>
                                <td v-if="index >= 14">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-if="selectedRegion == '不分區'" style="margin-top: 1.5rem;">
                <div class="Region">
                    <div v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName"
                        @click="selectCity(cityName)" :class="{ 'active': selectedCity === cityName }" class="Regionbtn">
                        <img class="partyicon" :src="'https://www.ftvnews.com.tw/topics/2024election/' + cityName + '.png'"
                            :alt="cityName">
                        {{ cityName.replace("公民黨", "公民黨＋台灣工黨") }}
                    </div>
                </div>
                <div class="tablelayout_pc">
                    <table>
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="( candidate, index ) in  electionData[selectedRegion][selectedCity] " :key="index">
                                <td v-if="candidate.distrist <= 17">{{ candidate.distrist }}</td>
                                <td v-if="candidate.distrist <= 17">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table v-if="selectedCity == '民進黨' || selectedCity == '國民黨'">
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="( candidate, index ) in  electionData[selectedRegion][selectedCity] " :key="index">
                                <td v-if="candidate.distrist > 17">{{ candidate.distrist }}</td>
                                <td v-if="candidate.distrist > 17">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="List_mb">
            <div class="Region-navtab_mb">
                <select v-model="selectedRegion" class="custom-select">
                    <option value="北部地區">北部地區</option>
                    <option value="中部地區">中部地區</option>
                    <option value="南部地區">南部地區</option>
                    <option value="東部地區">東部地區</option>
                    <option value="離島地區">離島地區</option>
                    <option value="原住民地區">原住民</option>
                    <option value="不分區">不分區</option>
                </select>
            </div>
            <select v-model="selectedCity" class="custom-select select_mb">
                <option v-for="(city, cityName) in electionData[selectedRegion]" :key="cityName">{{
                    cityName }}</option>
            </select>
        </div>
        <div
            v-if="selectedRegion == '北部地區' || selectedRegion == '中部地區' || selectedRegion == '南部地區' || selectedRegion == '東部地區' || selectedRegion == '離島地區' || selectedRegion == '原住民地區'">
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
                        <tr v-for="( candidate, index ) in  electionData[selectedRegion][selectedCity] " :key="index">
                            <td>{{ candidate.distrist }}</td>
                            <td> <img class="partyicon"
                                    :src="'https://www.ftvnews.com.tw/topics/2024election/' + candidate.party + '.png'"
                                    :alt="candidate.party">
                                <h3>{{ candidate.party }}</h3>
                            </td>
                            <td>{{ candidate.name }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="selectedRegion == '不分區'">
            <div class=" tablelayout_mb">
                <table>
                    <thead>
                        <tr>
                            <th>排序</th>
                            <th>姓名</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="( candidate, index ) in  electionData[selectedRegion][selectedCity] " :key="index">
                            <td>{{ candidate.distrist }}</td>
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
                        }, {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "侯漢廷"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "王世堅"
                        },
                        {
                            "distrist": 2,
                            "party": "台灣麻將最大黨",
                            "name": "謝尚衡"
                        }, {
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
                            "distrist": 4,
                            "party": "基進黨",
                            "name": "吳欣岱"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "吳沛憶"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "鍾小平"
                        },
                        {
                            "distrist": 5,
                            "party": "無黨籍",
                            "name": "于美人"
                        },
                        {
                            "distrist": 5,
                            "party": "台灣麻將最大黨",
                            "name": "張華特"
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
                            "distrist": 7,
                            "party": "台灣麻將最大黨",
                            "name": "方定瑜"
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
                            "distrist": 2,
                            "party": "民眾黨",
                            "name": "李有宜"
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
                            "name": "蔣欣璋"
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
                            "distrist": 10,
                            "party": "台灣麻將最大黨",
                            "name": "張哲源"
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
                        },
                        {
                            "distrist": 1,
                            "party": "台灣麻將最大黨",
                            "name": "張世昌"
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
                            "distrist": 1,
                            "party": "時代力量",
                            "name": "徐鈺雯"
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
                            "distrist": 4,
                            "party": "公民黨",
                            "name": "甘乃迪"
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
                        },
                        {
                            "distrist": 6,
                            "party": "民眾黨",
                            "name": "李慕妍"
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
                            "distrist": 1,
                            "party": "綠黨",
                            "name": "余筱菁"
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
                            "party": "無黨籍",
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
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "陳超明"
                        },
                        {
                            "distrist": 1,
                            "party": "台灣麻將最大黨",
                            "name": "洪鈺翔"
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
                            "distrist": 2,
                            "party": "台灣麻將最大黨",
                            "name": "鄒伊忠"
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
                            "distrist": 1,
                            "party": "勞動黨",
                            "name": "許文忠"
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
                            "distrist": 1,
                            "party": "台灣革命黨",
                            "name": "李昭儀"
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
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "曾尹儷"
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
                            "party": "喜樂島聯盟",
                            "name": "郭倍宏"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "陳美雅"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "黃捷"
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
                        }, {
                            "distrist": 7,
                            "party": "無黨籍",
                            "name": "洪啟修 "
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
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "魏耀乾"
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
                            "distrist": 4,
                            "party": "台灣麻將最大黨",
                            "name": "何力弘"
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
                        },
                        {
                            "distrist": 6,
                            "party": "無黨籍",
                            "name": "陳永和"
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
                            "party": "公民黨",
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
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "徐富癸"
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
                    "台東縣": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "賴坤成"
                        },
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "黃建賓"
                        },
                        {
                            "distrist": 1,
                            "party": "無黨籍",
                            "name": "劉櫂豪"
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
                        },
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "曹爾凱"
                        },
                        {
                            "distrist": 1,
                            "party": "公民黨",
                            "name": "李克焜"
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
                        },
                        {
                            "distrist": 1,
                            "party": "台灣麻將最大黨",
                            "name": "潘彥睿"
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
                },
                "不分區": {
                    "民進黨": [
                        {
                            "distrist": 1,
                            "party": "民進黨",
                            "name": "林月琴"
                        },
                        {
                            "distrist": 2,
                            "party": "民進黨",
                            "name": "沈伯洋"
                        },
                        {
                            "distrist": 3,
                            "party": "民進黨",
                            "name": "張雅琳"
                        },
                        {
                            "distrist": 4,
                            "party": "民進黨",
                            "name": "洪申翰"
                        },
                        {
                            "distrist": 5,
                            "party": "民進黨",
                            "name": "羅美玲"
                        },
                        {
                            "distrist": 6,
                            "party": "民進黨",
                            "name": "游錫堃"
                        },
                        {
                            "distrist": 7,
                            "party": "民進黨",
                            "name": "范雲"
                        },
                        {
                            "distrist": 8,
                            "party": "民進黨",
                            "name": "柯建銘"
                        },
                        {
                            "distrist": 9,
                            "party": "民進黨",
                            "name": "沈發惠"
                        },
                        {
                            "distrist": 10,
                            "party": "民進黨",
                            "name": "莊瑞雄"
                        },
                        {
                            "distrist": 11,
                            "party": "民進黨",
                            "name": "林楚茵"
                        },
                        {
                            "distrist": 12,
                            "party": "民進黨",
                            "name": "郭昱晴"
                        },
                        {
                            "distrist": 13,
                            "party": "民進黨",
                            "name": "王正旭"
                        },
                        {
                            "distrist": 14,
                            "party": "民進黨",
                            "name": "王義川"
                        },
                        {
                            "distrist": 15,
                            "party": "民進黨",
                            "name": "陳培瑜"
                        },
                        {
                            "distrist": 16,
                            "party": "民進黨",
                            "name": "陳俊翰"
                        },
                        {
                            "distrist": 17,
                            "party": "民進黨",
                            "name": "張秀君"
                        },
                        {
                            "distrist": 18,
                            "party": "民進黨",
                            "name": "黃奕睿"
                        },
                        {
                            "distrist": 19,
                            "party": "民進黨",
                            "name": "孫一信"
                        },
                        {
                            "distrist": 20,
                            "party": "民進黨",
                            "name": "吳祥榮"
                        },
                        {
                            "distrist": 21,
                            "party": "民進黨",
                            "name": "陳慧君"
                        },
                        {
                            "distrist": 22,
                            "party": "民進黨",
                            "name": "柯富揚"
                        },
                        {
                            "distrist": 23,
                            "party": "民進黨",
                            "name": "劉柏君"
                        },
                        {
                            "distrist": 24,
                            "party": "民進黨",
                            "name": "石明謹"
                        },
                        {
                            "distrist": 25,
                            "party": "民進黨",
                            "name": "曾美玲"
                        },
                        {
                            "distrist": 26,
                            "party": "民進黨",
                            "name": "黃真瑋"
                        },
                        {
                            "distrist": 27,
                            "party": "民進黨",
                            "name": "曾湘樺"
                        },
                        {
                            "distrist": 28,
                            "party": "民進黨",
                            "name": "鄭力嘉"
                        },
                        {
                            "distrist": 29,
                            "party": "民進黨",
                            "name": "陳右欣"
                        },
                        {
                            "distrist": 30,
                            "party": "民進黨",
                            "name": "余宛如"
                        },
                        {
                            "distrist": 31,
                            "party": "民進黨",
                            "name": "許菡芸"
                        },
                        {
                            "distrist": 32,
                            "party": "民進黨",
                            "name": "周威佑"
                        },
                        {
                            "distrist": 33,
                            "party": "民進黨",
                            "name": "廖韶吟"
                        },
                        {
                            "distrist": 34,
                            "party": "民進黨",
                            "name": "蔡宜文"
                        },
                    ],
                    "國民黨": [
                        {
                            "distrist": 1,
                            "party": "國民黨",
                            "name": "韓國瑜"
                        },
                        {
                            "distrist": 2,
                            "party": "國民黨",
                            "name": "柯志恩"
                        },
                        {
                            "distrist": 3,
                            "party": "國民黨",
                            "name": "葛如鈞"
                        },
                        {
                            "distrist": 4,
                            "party": "國民黨",
                            "name": "翁曉玲"
                        },
                        {
                            "distrist": 5,
                            "party": "國民黨",
                            "name": "陳菁徽"
                        },
                        {
                            "distrist": 6,
                            "party": "國民黨",
                            "name": "吳宗憲"
                        },
                        {
                            "distrist": 7,
                            "party": "國民黨",
                            "name": "林倩綺"
                        },
                        {
                            "distrist": 8,
                            "party": "國民黨",
                            "name": "陳永康"
                        },
                        {
                            "distrist": 9,
                            "party": "國民黨",
                            "name": "許宇甄"
                        },
                        {
                            "distrist": 10,
                            "party": "國民黨",
                            "name": "謝龍介"
                        },
                        {
                            "distrist": 11,
                            "party": "國民黨",
                            "name": "蘇清泉"
                        },
                        {
                            "distrist": 12,
                            "party": "國民黨",
                            "name": "張嘉郡"
                        },
                        {
                            "distrist": 13,
                            "party": "國民黨",
                            "name": "王育敏"
                        },
                        {
                            "distrist": 14,
                            "party": "國民黨",
                            "name": "蔡明忠"
                        },
                        {
                            "distrist": 15,
                            "party": "國民黨",
                            "name": "吳亮儀"
                        },
                        {
                            "distrist": 16,
                            "party": "國民黨",
                            "name": "李玉嬋"
                        },
                        {
                            "distrist": 17,
                            "party": "國民黨",
                            "name": "李霞"
                        },
                        {
                            "distrist": 18,
                            "party": "國民黨",
                            "name": "楊應超"
                        },
                        {
                            "distrist": 19,
                            "party": "國民黨",
                            "name": "徐弘庭"
                        },
                        {
                            "distrist": 20,
                            "party": "國民黨",
                            "name": "鍾沛君"
                        },
                        {
                            "distrist": 21,
                            "party": "國民黨",
                            "name": "江怡臻"
                        },
                        {
                            "distrist": 22,
                            "party": "國民黨",
                            "name": "簡榮宗"
                        },
                        {
                            "distrist": 23,
                            "party": "國民黨",
                            "name": "田長沛"
                        },
                        {
                            "distrist": 24,
                            "party": "國民黨",
                            "name": "沈采穎"
                        },
                        {
                            "distrist": 25,
                            "party": "國民黨",
                            "name": "林瓊嘉"
                        },
                        {
                            "distrist": 26,
                            "party": "國民黨",
                            "name": "陳克威"
                        },
                        {
                            "distrist": 27,
                            "party": "國民黨",
                            "name": "邱一峰"
                        },
                        {
                            "distrist": 28,
                            "party": "國民黨",
                            "name": "廖怡琇"
                        },
                        {
                            "distrist": 29,
                            "party": "國民黨",
                            "name": "李縉穎"
                        },
                        {
                            "distrist": 30,
                            "party": "國民黨",
                            "name": "李茂芊"
                        },
                        {
                            "distrist": 31,
                            "party": "國民黨",
                            "name": "丁瑀"
                        },
                        {
                            "distrist": 32,
                            "party": "國民黨",
                            "name": "楊智伃"
                        },
                        {
                            "distrist": 33,
                            "party": "國民黨",
                            "name": "何嘉霖"
                        },
                        {
                            "distrist": 34,
                            "party": "國民黨",
                            "name": "康晉瑜"
                        },
                    ], "民眾黨": [
                        {
                            "distrist": 1,
                            "party": "民眾黨",
                            "name": "黃珊珊"
                        },
                        {
                            "distrist": 2,
                            "party": "民眾黨",
                            "name": "黃國昌"
                        },
                        {
                            "distrist": 3,
                            "party": "民眾黨",
                            "name": "陳昭姿"
                        },
                        {
                            "distrist": 4,
                            "party": "民眾黨",
                            "name": "麥玉珍"
                        },
                        {
                            "distrist": 5,
                            "party": "民眾黨",
                            "name": "林憶君"
                        },
                        {
                            "distrist": 6,
                            "party": "民眾黨",
                            "name": "吳春城"
                        },
                        {
                            "distrist": 7,
                            "party": "民眾黨",
                            "name": "林國城"
                        },
                        {
                            "distrist": 8,
                            "party": "民眾黨",
                            "name": "張啟楷"
                        },
                        {
                            "distrist": 9,
                            "party": "民眾黨",
                            "name": "賴淑芬"
                        },
                        {
                            "distrist": 10,
                            "party": "民眾黨",
                            "name": "蔡春綢"
                        },
                        {
                            "distrist": 11,
                            "party": "民眾黨",
                            "name": "劉書彬"
                        },
                        {
                            "distrist": 12,
                            "party": "民眾黨",
                            "name": "李貞秀"
                        },
                        {
                            "distrist": 13,
                            "party": "民眾黨",
                            "name": "洪毓祥"
                        },
                        {
                            "distrist": 14,
                            "party": "民眾黨",
                            "name": "王安祥"
                        },
                        {
                            "distrist": 15,
                            "party": "民眾黨",
                            "name": "陳清龍"
                        },
                        {
                            "distrist": 16,
                            "party": "民眾黨",
                            "name": "許忠信"
                        }
                    ], "親民黨": [
                        {
                            "distrist": "",
                            "party": "目前無資料！",
                            "name": "尚未公布名單"
                        },
                    ],
                    "基進黨": [
                        {
                            "distrist": 1,
                            "party": "基進黨",
                            "name": "史惟筑"
                        },
                        {
                            "distrist": 2,
                            "party": "基進黨",
                            "name": "陳奕齊"
                        },
                        {
                            "distrist": 3,
                            "party": "基進黨",
                            "name": "黃楓茹"
                        },
                        {
                            "distrist": 4,
                            "party": "基進黨",
                            "name": "陳君愷"
                        },
                        {
                            "distrist": 5,
                            "party": "基進黨",
                            "name": "楊佩樺"
                        },
                        {
                            "distrist": 6,
                            "party": "基進黨",
                            "name": "黃馨瑩"
                        },
                        {
                            "distrist": 7,
                            "party": "基進黨",
                            "name": "徐煊博"
                        }
                    ],
                    "時代力量": [
                        {
                            "distrist": 1,
                            "party": "時代力量",
                            "name": "林依瑩"
                        },
                        {
                            "distrist": 2,
                            "party": "時代力量",
                            "name": "王寶萱"
                        },
                        {
                            "distrist": 3,
                            "party": "時代力量",
                            "name": "宋國鼎"
                        },
                        {
                            "distrist": 4,
                            "party": "時代力量",
                            "name": "江盛"
                        },
                        {
                            "distrist": 5,
                            "party": "時代力量",
                            "name": "陳泰源"
                        },
                        {
                            "distrist": 6,
                            "party": "時代力量",
                            "name": "陳昱安"
                        },
                        {
                            "distrist": 7,
                            "party": "時代力量",
                            "name": "余佳蒨"
                        },
                        {
                            "distrist": 8,
                            "party": "時代力量",
                            "name": "鄭侑青"
                        }
                    ],
                    "公民黨": [
                        {
                            "distrist": 1,
                            "party": "公民黨",
                            "name": "高國慶"
                        },
                        {
                            "distrist": 2,
                            "party": "公民黨",
                            "name": "楊秀蘭"
                        },
                        {
                            "distrist": 3,
                            "party": "公民黨",
                            "name": "錢彙穎"
                        },
                        {
                            "distrist": 4,
                            "party": "公民黨",
                            "name": "高絃騰"
                        },
                        {
                            "distrist": 5,
                            "party": "公民黨",
                            "name": "張心彤"
                        }
                    ],
                    "台灣麻將最大黨": [
                        {
                            "distrist": 1,
                            "party": "台灣麻將最大黨",
                            "name": "盧建璋"
                        },
                        {
                            "distrist": 2,
                            "party": "台灣麻將最大黨",
                            "name": "張嘉玲"
                        },
                        {
                            "distrist": 3,
                            "party": "台灣麻將最大黨",
                            "name": "吳庭萱"
                        }
                    ],
                    "綠黨": [
                        {
                            "distrist": 1,
                            "party": "綠黨",
                            "name": "林莉棻"
                        },
                        {
                            "distrist": 2,
                            "party": "綠黨",
                            "name": "李菁琪"
                        },
                        {
                            "distrist": 3,
                            "party": "綠黨",
                            "name": "吳伊婷"
                        }
                    ]
                }
            }
        };
    }, methods: {
        selectCity(cityName) {
            this.selectedCity = cityName;
        },
        getDefaultCity(region) {
            // 返回指定地區的第一个縣市的名稱
            const cities = Object.keys(this.electionData[region]);
            const defaultCity = cities[0];
            console.log(`getDefaultCity(${region}) => ${defaultCity}`);
            return defaultCity;
        }, selectRegion(region) {
            this.selectedRegion = region;
        }
    }, watch: {
        selectedRegion(newRegion) {
            const cities = this.electionData[newRegion];
            if (cities) {
                const firstCity = Object.keys(cities)[0];
                this.selectedCity = firstCity;
            }
        },
    },
    mounted() {
        this.selectedRegion = '北部地區',
            this.selectedCity = '台北市'
    }

}

</script>

<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 800px) {
        @content;
    }
}

.partyicon {
    width: 30px !important;
    border-radius: 100px;
    margin-right: 1rem;
    height: 30px !important;
}

.dddd {
    display: grid;
    grid-template-columns: 2fr 9fr;

}

.Region-navtab {
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    justify-content: start;
    font-size: 1.4rem;

    margin: auto;
    margin-top: 1rem;

    li {
        background: #f3f3f3;
        font-size: 1.2rem !important;
        padding: .4rem .6rem;
        margin: .4rem;
        border-bottom: 0px solid rgb(201, 201, 201);
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    }

    .active {
        background: linear-gradient(115deg, #f07708 30.73%, #ff9823 32.81%, #f04e08 100%);
        color: white;

    }

}

.Regionbtn {
    background: transparent;
    border-radius: 0;
    box-shadow: none !important;
    font-size: 1.2rem;
    border-bottom: 2px solid #dedede;
    display: flex;

    .active {
        color: black !important;
        border-bottom: 2px solid orange;
        background: rgba(255, 122, 0, 0.20);
    }
}

.Region {
    display: none;

    @include pad {
        display: flex;
        white-space: nowrap;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .active {
        color: black !important;
        border-bottom: 2px solid orange;
        background: rgba(255, 122, 0, 0.20);
    }
}

.pc {
    display: none;

    @include pad {
        display: flex;
    }
}
</style>
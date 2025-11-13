<template>
    <div class="layout">
        <div class="icontitle">
            <img loading="lazy" src="../assets/LegisList.png" alt="">
            <h2 v-if="selectedRegion == '不分區'">
                不分區立委提名名單</h2>
        </div>
        <div>
            <div v-if="selectedRegion == '不分區'" style="margin-top: 0.5rem;">
                <div class="Region">
                    <div v-for="(  city, cityName  ) in   electionData[selectedRegion]  " :key="cityName"
                        @click="selectCity(cityName)" :class="{ 'active1': selectedCity === cityName }" class="Regionbtn">
                        <img loading="lazy" class="partyicon"
                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + cityName + '.jpg'"
                            :alt="cityName">
                        {{ cityName }}
                    </div>
                </div>
                <div class="tablelayout_pc">
                    <table v-if="selectedCity !== '其他政黨'">
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>姓名</th>
                                <!-- <th style="width:20%">選後</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                                :key="index">
                                <td v-if="candidate.distrist <= electionData[selectedRegion][selectedCity].length / 2">{{
                                    candidate.distrist }}</td>
                                <td v-if="candidate.distrist <= electionData[selectedRegion][selectedCity].length / 2">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                                <!-- <td v-if="candidate.distrist <= electionData[selectedRegion][selectedCity].length / 2"
                                    style="width:20%"> 選後</td> -->
                            </tr>
                        </tbody>
                    </table>
                    <table v-if="selectedCity == '民進黨' || selectedCity == '國民黨' || selectedCity == '民眾黨'">
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>姓名</th>
                                <!-- <th style="width:20%">選後</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                                :key="index">
                                <td v-if="candidate.distrist > electionData[selectedRegion][selectedCity].length / 2">{{
                                    candidate.distrist }}</td>
                                <td v-if="candidate.distrist > electionData[selectedRegion][selectedCity].length / 2">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                                <!-- <td style="width:20%"
                                    v-if="candidate.distrist > electionData[selectedRegion][selectedCity].length / 2">
                                    選後
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                    <table v-if="selectedCity == '其他政黨'">
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>政黨</th>
                                <th>姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                                :key="index">
                                <td v-if="index < 37">{{ candidate.distrist }}</td>
                                <td v-if="index < 37"> <img loading="lazy" class="partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + candidate.party + '.jpg'"
                                        :alt="candidate.party">
                                    <h3>{{ candidate.party }}</h3>
                                </td>
                                <td v-if="index < 37">
                                    <h3>{{ candidate.name }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table v-if="selectedCity == '其他政黨'">
                        <thead>
                            <tr>
                                <th>排序</th>
                                <th>政黨</th>
                                <th>姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                                :key="index">
                                <td v-if="index >= 37">{{ candidate.distrist }}</td>
                                <td v-if="index >= 37"><img loading="lazy" class="partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + candidate.party + '.jpg'"
                                        :alt="candidate.party">
                                    <h3>{{ candidate.party }}</h3>
                                </td>
                                <td v-if="index >= 37">
                                    <h3>{{ candidate.name }}</h3>
                                </td>

                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        <div class="List_mb">
            <select v-model="selectedCity" class="custom-select select_mb">
                <option v-for="(  city, cityName  ) in   electionData[selectedRegion]  " :key="cityName">{{
                    cityName }}</option>
            </select>
        </div>
        <div v-if="selectedRegion == '不分區'">
            <div class=" tablelayout_mb">
                <table v-if="selectedCity !== '其他政黨'">
                    <thead>
                        <tr>
                            <th>排序</th>
                            <th>姓名</th>
                            <!-- <th style="width:10%"></th> -->
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                            :key="index">
                            <td v-if="candidate.distrist <= 17">{{ candidate.distrist }}</td>
                            <td v-if="candidate.distrist <= 17">{{ candidate.name }}</td>
                            <!-- <td style="width:10%" v-if="candidate.distrist <= 17">
                                 檢查 
                            </td> -->

                        </tr>
                    </tbody>

                </table>
                <table v-if="selectedCity == '民進黨' || selectedCity == '國民黨' || selectedCity == '民眾黨'">
                    <thead>
                        <tr>
                            <th>排序</th>
                            <th>姓名</th>
                            <!-- 選後
                            <th style="width:10%">
                            
                            </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]   "
                            :key="index">
                            <td v-if="candidate.distrist > 17">{{ candidate.distrist }}</td>
                            <td v-if="candidate.distrist > 17">
                                <h3>{{ candidate.name }}</h3>
                            </td>
                            <!-- 選後 <td style="width:10%" v-if="candidate.distrist > 17">

                            </td> -->
                        </tr>
                    </tbody>
                </table>
                <table v-if="selectedCity == '其他政黨'">
                    <thead>
                        <tr>
                            <th>排序</th>
                            <th>政黨</th>
                            <th>姓名</th>
                            <!-- 選後
                            <th> </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(   candidate, index   ) in    electionData[selectedRegion][selectedCity]  "
                            :key="index">
                            <td>{{ candidate.distrist }}</td>
                            <td>
                                <img loading="lazy" class="partyicon"
                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + candidate.party + '.jpg'"
                                    :alt="candidate.party">
                                <h3>{{ candidate.party }}</h3>
                            </td>
                            <td>
                                <h3>{{ candidate.name }}</h3>
                            </td>
                            <!-- <td>選後
                            </td> -->
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
        <div>
            <br>
            <p style="display:flex;justify-content:end;width: 100%;">資訊來源：中選會</p>
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
                    ],
                    "民眾黨": [
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
                            "name": "吳春城"
                        },
                        {
                            "distrist": 5,
                            "party": "民眾黨",
                            "name": "麥玉珍"
                        },
                        {
                            "distrist": 6,
                            "party": "民眾黨",
                            "name": "林國成"
                        },
                        {
                            "distrist": 7,
                            "party": "民眾黨",
                            "name": "林憶君"
                        },
                        {
                            "distrist": 8,
                            "party": "民眾黨",
                            "name": "張啓楷"
                        },
                        {
                            "distrist": 9,
                            "party": "民眾黨",
                            "name": "劉書彬"
                        },
                        {
                            "distrist": 10,
                            "party": "民眾黨",
                            "name": "洪毓祥"
                        },
                        {
                            "distrist": 11,
                            "party": "民眾黨",
                            "name": "蔡春綢"
                        },
                        {
                            "distrist": 12,
                            "party": "民眾黨",
                            "name": "王安祥"
                        },
                        {
                            "distrist": 13,
                            "party": "民眾黨",
                            "name": "邱慧洳"
                        },
                        {
                            "distrist": 14,
                            "party": "民眾黨",
                            "name": "陳清龍"
                        },
                        {
                            "distrist": 15,
                            "party": "民眾黨",
                            "name": "李貞秀"
                        },
                        {
                            "distrist": 16,
                            "party": "民眾黨",
                            "name": "許忠信"
                        },
                        {
                            "distrist": 17,
                            "party": "民眾黨",
                            "name": "徐瑞希"
                        },
                        {
                            "distrist": 18,
                            "party": "民眾黨",
                            "name": "楊弘意"
                        },
                        {
                            "distrist": 19,
                            "party": "民眾黨",
                            "name": "陳智菡"
                        },
                        {
                            "distrist": 20,
                            "party": "民眾黨",
                            "name": "莊貽量"
                        },
                        {
                            "distrist": 21,
                            "party": "民眾黨",
                            "name": "林筱淇"
                        },
                        {
                            "distrist": 22,
                            "party": "民眾黨",
                            "name": "蔡豐州"
                        },
                        {
                            "distrist": 23,
                            "party": "民眾黨",
                            "name": "張雪如"
                        },
                        {
                            "distrist": 24,
                            "party": "民眾黨",
                            "name": "湯宏正"
                        },
                        {
                            "distrist": 25,
                            "party": "民眾黨",
                            "name": "林淑芬"
                        },
                        {
                            "distrist": 26,
                            "party": "民眾黨",
                            "name": "梁明輝"
                        },
                        {
                            "distrist": 27,
                            "party": "民眾黨",
                            "name": "廖維欣"
                        },
                        {
                            "distrist": 28,
                            "party": "民眾黨",
                            "name": "馮啟彥"
                        },
                        {
                            "distrist": 29,
                            "party": "民眾黨",
                            "name": "林子宇"
                        },
                        {
                            "distrist": 30,
                            "party": "民眾黨",
                            "name": "張清俊"
                        },
                        {
                            "distrist": 31,
                            "party": "民眾黨",
                            "name": "林治華"
                        },
                        {
                            "distrist": 32,
                            "party": "民眾黨",
                            "name": "李家豪"
                        },
                        {
                            "distrist": 33,
                            "party": "民眾黨",
                            "name": "邱于珊"
                        },
                        {
                            "distrist": 34,
                            "party": "民眾黨",
                            "name": "周榆修"
                        },
                    ],
                    "其他政黨": [
                        {
                            "distrist": 1,
                            "party": "小歐盟",
                            "name": "高芸婷"
                        },
                        {
                            "distrist": 2,
                            "party": "小歐盟",
                            "name": "林詩涵"
                        },
                        {
                            "distrist": 3,
                            "party": "小歐盟",
                            "name": "閔柏陵"
                        },
                        {
                            "distrist": 1,
                            "party": "台灣綠黨",
                            "name": "鍾寶珠"
                        },
                        {
                            "distrist": 2,
                            "party": "台灣綠黨",
                            "name": "李菁琪"
                        },
                        {
                            "distrist": 3,
                            "party": "台灣綠黨",
                            "name": "黃柔嘉"
                        },
                        {
                            "distrist": 4,
                            "party": "台灣綠黨",
                            "name": "吳伊婷"
                        },
                        {
                            "distrist": 5,
                            "party": "台灣綠黨",
                            "name": "希婻·瑪飛洑"
                        },
                        {
                            "distrist": 6,
                            "party": "台灣綠黨",
                            "name": "林莉棻"
                        },
                        {
                            "distrist": 7,
                            "party": "台灣綠黨",
                            "name": "黃慧芬"
                        }, {
                            "distrist": 8,
                            "party": "台灣綠黨",
                            "name": "張竹芩"
                        },
                        {
                            "distrist": 1,
                            "party": "臺灣雙語無法黨",
                            "name": "陳亭諭"
                        },
                        {
                            "distrist": 2,
                            "party": "臺灣雙語無法黨",
                            "name": "蕭文乾"
                        }, {
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
                        },
                        {
                            "distrist": 1,
                            "party": "統促黨",
                            "name": "丁炳仁"
                        },
                        {
                            "distrist": 2,
                            "party": "統促黨",
                            "name": "黃妙如"
                        },
                        {
                            "distrist": 3,
                            "party": "統促黨",
                            "name": "肖云霞"
                        },
                        {
                            "distrist": 4,
                            "party": "統促黨",
                            "name": "張安樂"
                        }, {
                            "distrist": 1,
                            "party": "制度救世島",
                            "name": "林麗容"
                        },
                        {
                            "distrist": 2,
                            "party": "制度救世島",
                            "name": "石人仁"
                        },
                        {
                            "distrist": 3,
                            "party": "制度救世島",
                            "name": "張怡菁"
                        },
                        {
                            "distrist": 4,
                            "party": "制度救世島",
                            "name": "古文發"
                        },
                        {
                            "distrist": 5,
                            "party": "制度救世島",
                            "name": "黃千明"
                        },
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
                        },
                        {
                            "distrist": 1,
                            "party": "司法改革黨",
                            "name": "戴翊如"
                        },
                        {
                            "distrist": 2,
                            "party": "司法改革黨",
                            "name": "張靜"
                        },
                        {
                            "distrist": 3,
                            "party": "司法改革黨",
                            "name": "李柏融"
                        },
                        {
                            "distrist": 4,
                            "party": "司法改革黨",
                            "name": "尤瑞敏"
                        },
                        {
                            "distrist": 5,
                            "party": "司法改革黨",
                            "name": "賴伯琦"
                        },
                        {
                            "distrist": 6,
                            "party": "司法改革黨",
                            "name": "吳振橐"
                        },
                        {
                            "distrist": 7,
                            "party": "司法改革黨",
                            "name": "晏揚清"
                        },
                        {
                            "distrist": 8,
                            "party": "司法改革黨",
                            "name": "許韶珍"
                        },
                        {
                            "distrist": 9,
                            "party": "司法改革黨",
                            "name": "楊啓珊"
                        },
                        {
                            "distrist": 1,
                            "party": "新黨",
                            "name": "王建煊"
                        },
                        {
                            "distrist": 2,
                            "party": "新黨",
                            "name": "仉桂美"
                        },
                        {
                            "distrist": 3,
                            "party": "新黨",
                            "name": "吳成典"
                        },
                        {
                            "distrist": 4,
                            "party": "新黨",
                            "name": "賀樺"
                        },
                        {
                            "distrist": 5,
                            "party": "新黨",
                            "name": "林易陞"
                        },
                        {
                            "distrist": 6,
                            "party": "新黨",
                            "name": "陳麗玲"
                        },
                        {
                            "distrist": 7,
                            "party": "新黨",
                            "name": "戴德滿"
                        },
                        {
                            "distrist": 8,
                            "party": "新黨",
                            "name": "王子芩"
                        },
                        {
                            "distrist": 1,
                            "party": "台灣維新",
                            "name": "蘇煥智"
                        },
                        {
                            "distrist": 2,
                            "party": "台灣維新",
                            "name": "劉亦恩"
                        },
                        {
                            "distrist": 3,
                            "party": "台灣維新",
                            "name": "江映瑤"
                        },
                        {
                            "distrist": 1,
                            "party": "親民黨",
                            "name": "李桐豪"
                        },
                        {
                            "distrist": 2,
                            "party": "親民黨",
                            "name": "陳怡潔"
                        },
                        {
                            "distrist": 3,
                            "party": "親民黨",
                            "name": "曲兆祥"
                        },
                        {
                            "distrist": 4,
                            "party": "親民黨",
                            "name": "何偉真"
                        },
                        {
                            "distrist": 5,
                            "party": "親民黨",
                            "name": "簡泰河"
                        },
                        {
                            "distrist": 6,
                            "party": "親民黨",
                            "name": "藍志玟"
                        },
                        {
                            "distrist": 7,
                            "party": "親民黨",
                            "name": "吳建德"
                        },
                        {
                            "distrist": 8,
                            "party": "親民黨",
                            "name": "黎淑慧"
                        },
                        {
                            "distrist": 9,
                            "party": "親民黨",
                            "name": "孫信君"
                        },
                        {
                            "distrist": 10,
                            "party": "親民黨",
                            "name": "黎建南"
                        },

                        {
                            "distrist": 1,
                            "party": "人民最大黨",
                            "name": "林東雄"
                        },
                        {
                            "distrist": 2,
                            "party": "人民最大黨",
                            "name": "賴方靜靜"
                        }, {
                            "distrist": 1,
                            "party": "台聯黨",
                            "name": "周倪安"
                        },
                        {
                            "distrist": 2,
                            "party": "台聯黨",
                            "name": "劉一德"
                        },
                        {
                            "distrist": 3,
                            "party": "台聯黨",
                            "name": "歐陽瑞蓮"
                        },
                        {
                            "distrist": 4,
                            "party": "台聯黨",
                            "name": "王思棠"
                        },
                        {
                            "distrist": 5,
                            "party": "台聯黨",
                            "name": "張登凱"
                        },
                        {
                            "distrist": 6,
                            "party": "台聯黨",
                            "name": "吳家慶"
                        }
                    ],
                }
            }
        };
    }, methods: {
        selectCity(cityName) {
            this.selectedCity = cityName;
        },
        selectRegion(region) {
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
        this.selectedRegion = '不分區',
            this.selectedCity = '民進黨'
    }

}

</script>

<style lang="scss" scoped>
.partyicon {
    width: 30px !important;
    border-radius: 100px;
    margin-right: .5em;
    height: 30px !important;
}

.Region-navtab {
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    justify-content: start;
    font-size: 1.4rem;
    margin: auto;

    li {
        border-radius: 20px;
        background: rgba(255, 122, 0, 0.20);
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }


}

.Regionbtn {
    border-radius: 25px;
    font-size: 1.2rem;
    display: flex;
    border-radius: 20px;
    background: rgba(217, 217, 217, 0.35);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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

}


.Region-navtab {

    display: none;

    @include pad {
        display: flex;
        margin: auto;
        margin-top: 1rem;
        margin-right: .3rem;
    }
}


.Region-navtab_mb {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;

    @include pad {
        display: none;
    }
}

.active1 {
    border-radius: 20px;
    background: rgba(255, 122, 0, 0.20);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}
</style>
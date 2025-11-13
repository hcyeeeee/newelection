<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import CountUp from 'vue-countup-v3'

// 狀態變數
const showList = ref(false)
const showAll = ref(true)
const nowtime = ref('')
const selectedArea = ref('北部地區')
const selectedCity = ref('北市')
const LegisT2 = ref([])
const LegisT3 = ref([])
const LegisT4 = ref([])
const LegisT5 = ref([])
const CityNo = ref(null)
const currentTab = ref('tab1')
const loaded = ref(false)
const flourishSrc = ref('visualisation/16340175')
const cityMap = {
    北市: '台北市',
    新北: '新北市',
    基隆: '基隆市',
    桃園: '桃園市',
    新竹: '新竹市',
    竹縣: '新竹縣',
    宜蘭: '宜蘭縣',
    台中: '台中市',
    雲林: '雲林縣',
    南投: '南投縣',
    苗縣: '苗栗縣',
    彰化: '彰化縣',
    高雄: '高雄市',
    台南: '台南市',
    嘉義: '嘉義市',
    嘉縣: '嘉義縣',
    屏東: '屏東縣',
    澎湖: '澎湖縣',
    花蓮: '花蓮縣',
    台東: '台東縣',
    金門: '金門縣',
    連江: '連江縣',
}


const formattedCity = computed(() => cityMap[selectedCity.value] || selectedCity.value)
const northCities = ['北市', '新北', '基隆', '桃園', '新竹', '竹縣', '宜蘭'];
const southCities = ['嘉義', '嘉縣', '台南', '高雄', '屏東', '澎湖']
const chungCities = ['苗栗', '台中', '彰化', '高雄', '南投', '雲林']
const DongCities = ['花蓮', '台東']
const LiCities = ['金門', '連江', '澎湖']

function formatCity(name) {
    return cityMap[name] || name
}


// CountUp 選項
const options = {
    duration: 0,
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: ',',
    prefix: '',
    suffix: '',
    formattingFn: (n) => {
        if (n >= 10000) {
            const formattedNumber = Math.trunc(n / 10000) + '萬'
            const lastFourDigits = n.toString().slice(-4)
            return formattedNumber + lastFourDigits
        } else {
            return n
        }
    },
}

// 🕒 更新時間
function Nowtime() {
    const time = new Date()
    nowtime.value = time.toLocaleTimeString('en-GB')
}

// 🧭 切換分頁
function handleTabChange(event) {
    showTab(event.target.value)
}

function showTab(tab) {
    currentTab.value = tab
    switch (tab) {
        case 'tab1':
            selectedCity.value = '北市'
            break
        case 'tab2':
            selectedCity.value = '台中'
            break
        case 'tab3':
            selectedCity.value = '高雄'
            break
        case 'tab4':
            selectedCity.value = '花蓮'
            break
        case 'tab5':
            selectedCity.value = '金門'
            break
        default:
            selectedCity.value = '北市'
    }
}

// 📡 抓資料
async function getLegis() {
    try {
        const response = await axios.get('https://www.ftvnews.com.tw/topics/2024election/election.json')
        LegisT2.value = response.data.T2
        LegisT3.value = response.data.T3
        LegisT4.value = response.data.T4
        LegisT5.value = response.data.T5
    } catch (error) {
        console.error('error', error)
    }
}

// 🔘 切換畫面
function toggleList() {
    showList.value = !showList.value
}
function toggleAll() {
    showAll.value = !showAll.value
}
function selectCity(cityName) {
    selectedCity.value = cityName
}
const regionTitle = computed(() => {
    if (currentTab.value === 'tab6') return '平地原住民立委名單'
    if (currentTab.value === 'tab7') return '山地原住民立委名單'
    return `${formattedCity.value}立委名單`
})

//立委名單區域
const tabList = [
    { id: 'tab1', name: '北部地區' },
    { id: 'tab2', name: '中部地區' },
    { id: 'tab3', name: '南部地區' },
    { id: 'tab4', name: '東部地區' },
    { id: 'tab5', name: '離島地區' },
    { id: 'tab6', name: '平地原住民' },
    { id: 'tab7', name: '山地原住民' },
]
const regionMap = {
    tab1: ['北市', '新北', '基隆', '桃園', '新竹', '竹縣', '宜蘭'],
    tab2: ['台中', '苗縣', '彰化', '南投', '雲林'],
    tab3: ['高雄', '台南', '嘉義', '嘉縣', '屏東', '澎湖'],
    tab4: ['花蓮', '台東'],
    tab5: ['金門', '連江']
}
const currentCities = computed(() => {
    return regionMap[currentTab.value] || []
})

// 🌐 插入 Flourish script
function loadFlourishScript() {
    const script = document.createElement('script')
    script.src = 'https://public.flourish.studio/resources/embed.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
}

// ⏱ 初始化
onMounted(() => {
    Nowtime()
    getLegis()
    loadFlourishScript()
    setInterval(getLegis, 5000)
    setInterval(Nowtime, 1000)
})
</script>


<template>
    <!-- 各政黨得票數 -->
    <div class="layout vote pc">
        <div style="display: flex;justify-content: space-between;">
            <div class="icontitle">
                <img loading="lazy" src="../assets/LegisList.png" alt="fight">
                <h2 v-if="showList == true">
                    不分區立委名單</h2>
                <h2 v-if="showList == false">
                    各政黨得票數</h2>
            </div>
            <div @click="toggleList" class="Regionbtn">
                <p v-if="showList == true">點我看各政黨得票數</p>
                <p v-if="showList == false">點我看不分區立委名單</p>
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </div>
        </div>

        <div class="pc">
            <div v-if="showList == false">
                <table>
                    <thead>
                        <tr style="margin-top: 1rem;">
                            <th style="width:50%;">號次</th>
                            <th>政黨</th>
                            <th>票數</th>
                            <th>比例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="items in LegisT5.detail" :key="items.index">
                            <td style="width:50%;">{{ items.partyNo }}</td>
                            <td><img loading="lazy" class="partyicon"
                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.partyName + '.jpg'"
                                    :alt="items.partyName">{{ items.partyName }}</td>
                            <td> <count-up :end-val="items.tickets" :options="options"></count-up>票</td>
                            <td> {{ items.ticketsRate.toFixed(2) }}%</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="showList == true">
                <img src="../assets/list.png" alt="">
            </div>
        </div>
    </div>

    <!--各立委名單-->
    <div class="layout vote pc">
        <div>
            <div style="display: flex;justify-content: space-between;">
                <div class="icontitle">
                    <img loading="lazy" src="../assets/LegisList.png" alt="">
                    <h2>{{ regionTitle }}</h2>
                </div>
                <div @click="toggleAll" class="Regionbtn">
                    <p>{{ showAll ? '點我看完整得票數' : '點我看當選名單' }}</p>
                    <font-awesome-icon icon="fa-solid fa-angles-right" />
                </div>
            </div>
            <div class="pctab pc" v-if="showAll == false">
                <ul class="Region-navtab pc">
                    <ul class="Region-navtab pc">
                        <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                        <li v-for="tab in tabList" :key="tab.id" @click="showTab(tab.id)"
                            :class="{ active: currentTab === tab.id }">
                            {{ tab.name }}
                        </li>
                    </ul>
                </ul>
                <!-- Tab 內容 -->
                <div v-show="regionMap[currentTab]">
                    <ul class="pc">
                        <li v-for="election in LegisT2.detail.filter(e => currentCities.includes(e.cityName))"
                            :key="election.id" @click="selectCity(election.cityName)" style="display: flex;">
                            <h3 :class="{ active1: selectedCity === election.cityName }">
                                {{ formatCity(election.cityName) }}
                            </h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <table v-if="selectedCity === election.cityName">
                            <thead>
                                <tr>
                                    <th>選區</th>
                                    <th>政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody v-for="item in election.areas" :key="item.index">
                                <tr v-for="items in item.tickets" :key="items.index">
                                    <td>{{ item.areaName }}</td>
                                    <td>
                                        <img loading="lazy" class="partyicon"
                                            :srcset="`https://www.ftvnews.com.tw/topics/2024election/images/partyicon/${items.party}.jpg`"
                                            :alt="items.party" />
                                        {{ items.party.replace(/無/g, "無黨籍").replace(/台灣雙語無黨籍法黨/g, "台灣雙語無法黨") }}
                                    </td>
                                    <td>{{ items.candName }}</td>
                                    <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                    <td>
                                        <img v-if="items.winner == '*'" loading="lazy" srcset="../assets/pass.png"
                                            alt="pass" class="pass" />
                                    </td>
                                </tr>
                                <hr />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-show="currentTab === 'tab6'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT3.detail" :key="election.id">
                            <h3 :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName }}</h3>
                        </li>
                    </ul>
                    <div>
                        <table>
                            <thead>
                                <tr style="margin-top: 1rem;">
                                    <th style="width:50%; max-height:fit-content; justify-content:center;">號次</th>
                                    <th>政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th style="width:20%; font-size:1rem; max-height:fit-content; justify-content:center;">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="election in LegisT3.tickets" :key="election.id">
                                    <td style="width:50%; max-height:fit-content; justify-content:center;"> {{
                                        election.candNo }}</td>
                                    <td style="width:50%; max-height:fit-content; justify-content:center;"><img
                                            loading="lazy" class="partyicon"
                                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                            :alt="election.party">{{ election.party.replace(/無/g,
                                                "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                    "台灣雙語無法黨") }}</td>
                                    <td> {{ election.candName }}</td>
                                    <td><count-up :end-val="election.ticket" :options="options"></count-up>票</td>
                                    <td style="width:20%; max-height:fit-content; justify-content: center;"> <img
                                            v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                            style="z-index: 12;" class="pass">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-show="currentTab === 'tab7'">
                    <div>
                        <table>
                            <thead>
                                <tr style="margin-top: 1rem;">
                                    <th style="width:60%; max-height:fit-content; justify-content:center;">號次</th>
                                    <th style="justify-content:center;">政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th style="width:20%; font-size:1rem; max-height:fit-content; justify-content:center;">
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="election in LegisT4.tickets" :key="election.id">
                                    <td style="width:60%; max-height:fit-content; justify-content:center;"> {{
                                        election.candNo }}</td>
                                    <td style="max-height:fit-content; justify-content:start;"><img loading="lazy"
                                            class="partyicon"
                                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                            :alt="election.party">{{ election.party.replace(/無/g,
                                                "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                    "台灣雙語無法黨") }}</td>
                                    <td style="max-height:fit-content; justify-content:center;"> {{ election.candName
                                    }}</td>
                                    <td><count-up :end-val="election.ticket" :options="options"></count-up>票</td>
                                    <td style="width:20%; max-height:fit-content; justify-content: center;"> <img
                                            v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                            style="z-index: 12;" class="pass">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--各完整名單-->
            <div class="pctab pc" v-if="showAll == true">
                <ul class="Region-navtab pc">
                    <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                    <li v-for="tab in tabList" :key="tab.id" @click="showTab(tab.id)"
                        :class="{ active: currentTab === tab.id }">
                        {{ tab.name }}
                    </li>
                </ul>
                <!-- Tab 內容 -->
                <div v-show="currentTab === 'tab1'">
                    <ul class="pc">
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '北市' || election.cityName == '新北' || election.cityName == '基隆'
                                || election.cityName == '桃園' || election.cityName == '新竹' || election.cityName == '竹縣' ||
                                election.cityName == '宜蘭'" :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                                    "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭",
                                        "宜蘭縣")
                                }}
                            </h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <div>
                            <div>

                                <table v-if="selectedCity === election.cityName">
                                    <thead>
                                        <tr>
                                            <th>選區</th>
                                            <th>政黨</th>
                                            <th>姓名</th>
                                            <th>票數</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                            <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td v-if="items.winner == '*'"> {{ items.candName }}</td>
                                            <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                    :options="options"></count-up>票</td>
                                            <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                    srcset="../assets/pass.png" alt="pass" style="z-index: 12;"
                                                    class="pass">
                                            </td>
                                        </tr>
                                        <hr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="currentTab === 'tab2'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '台中' || election.cityName == '苗縣' || election.cityName == '彰化'
                                || election.cityName == '南投' || election.cityName == '雲林'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣") }}
                            </h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <div>
                            <div>
                                <table v-if="selectedCity === election.cityName">
                                    <thead>
                                        <tr>
                                            <th>選區</th>
                                            <th>政黨</th>
                                            <th>姓名</th>
                                            <th>票數</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                            <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td v-if="items.winner == '*'"> {{ items.candName }}</td>
                                            <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                    :options="options"></count-up>票</td>
                                            <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                    srcset="../assets/pass.png" alt="pass" style="z-index: 12;"
                                                    class="pass">
                                            </td>
                                        </tr>
                                        <hr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="currentTab === 'tab3'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '高雄' ||
                                election.cityName == '台南' ||
                                election.cityName == '嘉義' ||
                                election.cityName == '嘉縣' ||
                                election.cityName == '屏東' ||
                                election.cityName == '澎湖'" :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("高雄", "高雄市").replace("台南", "台南市").replace("嘉義",
                                    "嘉義市").replace("嘉縣",
                                        "嘉義縣").replace("屏東", "屏東縣").replace("澎湖", "澎湖縣") }}</h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <div>
                            <div>
                                <table v-if="selectedCity === election.cityName">
                                    <thead>
                                        <tr>
                                            <th>選區</th>
                                            <th>政黨</th>
                                            <th>姓名</th>
                                            <th>票數</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                            <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td v-if="items.winner == '*'"> {{ items.candName }}</td>
                                            <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                    :options="options"></count-up>票</td>
                                            <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                    srcset="../assets/pass.png" alt="pass" style="z-index: 12;"
                                                    class="pass">
                                            </td>
                                        </tr>
                                        <hr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="currentTab === 'tab4'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '花蓮' || election.cityName == '台東'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("花蓮", "花蓮縣").replace("台東", "台東縣") }}</h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <div>
                            <div>
                                <table v-if="selectedCity === election.cityName">
                                    <thead>
                                        <tr>
                                            <th>選區</th>
                                            <th>政黨</th>
                                            <th>姓名</th>
                                            <th>票數</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                            <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td v-if="items.winner == '*'"> {{ items.candName }}</td>
                                            <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                    :options="options"></count-up>票</td>
                                            <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                    srcset="../assets/pass.png" alt="pass" style="z-index: 12;"
                                                    class="pass">
                                            </td>
                                        </tr>
                                        <hr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="currentTab === 'tab5'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '金門' || election.cityName == '連江'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("金門", "金門縣").replace("連江", "連江縣") }}</h3>
                        </li>
                    </ul>
                    <div v-for="election in LegisT2.detail" :key="election.id">
                        <div>
                            <div>
                                <table v-if="selectedCity === election.cityName">
                                    <thead>
                                        <tr>
                                            <th>選區</th>
                                            <th>政黨</th>
                                            <th>姓名</th>
                                            <th>票數</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                            <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td v-if="items.winner == '*'"> {{ items.candName }}</td>
                                            <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                    :options="options"></count-up>票</td>
                                            <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                    srcset="../assets/pass.png" alt="pass" style="z-index: 12;"
                                                    class="pass">
                                            </td>
                                        </tr>
                                        <hr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="currentTab === 'tab6'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in LegisT3.detail" :key="election.id">
                            <h3 :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName }}</h3>
                        </li>
                    </ul>
                    <div>
                        <table>
                            <thead>
                                <tr style="margin-top: 1rem;">
                                    <th style="width:50%; max-height:fit-content; justify-content:center;">號次</th>
                                    <th>政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th style="width:20%; font-size:1rem; max-height:fit-content; justify-content:center;">
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="election in LegisT3.tickets" :key="election.id">
                                    <td v-if="election.winner == '*'"
                                        style="width:50%; max-height:fit-content; justify-content:center;"> {{
                                            election.candNo }}</td>
                                    <td v-if="election.winner == '*'"
                                        style="width:50%; max-height:fit-content; justify-content:center;"><img
                                            loading="lazy" class="partyicon"
                                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                            :alt="election.party">{{ election.party.replace(/無/g,
                                                "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                    "台灣雙語無法黨") }}</td>
                                    <td v-if="election.winner == '*'"> {{ election.candName }}</td>
                                    <td v-if="election.winner == '*'"><count-up :end-val="election.ticket"
                                            :options="options"></count-up>票</td>
                                    <td v-if="election.winner == '*'"
                                        style="width:20%; max-height:fit-content; justify-content: center;"> <img
                                            v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                            style="z-index: 12;" class="pass">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-show="currentTab === 'tab7'">

                    <div>
                        <table>
                            <thead>
                                <tr style="margin-top: 1rem;">
                                    <th style="width:60%; max-height:fit-content; justify-content:center;">號次</th>
                                    <th style="justify-content:center;">政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th style="width:20%; font-size:1rem; max-height:fit-content; justify-content:center;">
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="election in LegisT4.tickets" :key="election.id">
                                    <td v-if="election.winner == '*'"
                                        style="width:60%; max-height:fit-content; justify-content:center;"> {{
                                            election.candNo }}</td>
                                    <td v-if="election.winner == '*'"
                                        style="max-height:fit-content; justify-content:start;"><img loading="lazy"
                                            class="partyicon"
                                            :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                            :alt="election.party">{{ election.party.replace(/無/g,
                                                "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                    "台灣雙語無法黨") }}</td>
                                    <td v-if="election.winner == '*'"
                                        style="max-height:fit-content; justify-content:center;"> {{ election.candName
                                        }}</td>
                                    <td v-if="election.winner == '*'"><count-up :end-val="election.ticket"
                                            :options="options"></count-up>票</td>
                                    <td v-if="election.winner == '*'"
                                        style="width:20%; max-height:fit-content; justify-content: center;"> <img
                                            v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                            style="z-index: 12;" class="pass">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.active {
    color: #fff !important;
    border-bottom: 2px solid orange;
    background: rgba(255, 122, 0, 0.2);
}



.partyicon {
    width: 30px !important;
    border-radius: 100px;
    margin-right: .5rem;
    height: 30px !important;

    @include pad {
        margin-right: .5rem;
    }
}


.Region-navtab {
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    justify-content: start;
    font-size: 1.4rem;
    margin: 0 auto;

    li {
        background: #f3f3f3;
        font-size: 1.2rem !important;
        padding: .4rem .6rem;
        margin: .4rem;
        border-bottom: 0px solid rgb(201, 201, 201);
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    }
}

.Regionbtn {
    background: transparent;
    border-radius: 0;
    box-shadow: none !important;
    font-size: 1.2rem;
    display: flex;
    cursor: pointer;
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



.pass {
    width: 25px;
    height: 25px;

    @include pad {
        width: 30px;
        height: 30px;
    }
}

ul {
    display: flex;
    justify-content: center;

    li {
        h3 {
            margin: 1rem .5rem;
            padding: .5rem;
            border-radius: 20px;
            background: rgba(217, 217, 217, 0.35);
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            cursor: pointer;
            margin-top: 4px;


        }

        .active1 {
            background: orange;
            color: white;
        }
    }
}

.pctab {
    display: none;

    @include pad {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
}




tr {
    max-height: fit-content !important;
    height: fit-content;
    display: flex;

    th {
        &:first-child {
            width: 30%;

            @include pad {
                width: 100%;
            }
        }

        &:nth-child(2) {
            white-space: wrap;

            @include pad {
                width: 100%;
                min-width: 150px;
            }
        }

        &:nth-child(3) {
            @include pad {
                width: 100%;
                min-width: 100px;
            }
        }


        &:nth-child(5) {
            white-space: wrap;
            font-size: .9rem;
            width: 150px;
        }
    }

    td {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        @include pad {}


        &:first-child {
            width: 30%;

            @include pad {
                width: 100%;
            }
        }

        &:nth-child(2) {
            white-space: normal;
            justify-content: center;

            @include pad {
                width: 100%;
                min-width: 150px;
            }
        }

        &:nth-child(3) {
            @include pad {
                width: 100%;
                min-width: 100px;
            }
        }

        &:nth-child(5) {

            @include pad {
                width: 30%;
                max-width: 120px;
            }
        }

    }
}

table {
    margin-top: 1rem;

    @include pad {
        margin-top: 0rem;
    }
}

.Region-navtab_mb {
    gap: 1rem
}

ul {
    flex-wrap: wrap;
}


.Region-navtab {
    .active {
        background: orange;
    }
}
</style>
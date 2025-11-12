<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"
import CountUp from "vue-countup-v3"

// 📊 狀態
const showAll = ref(true)
const currentTab = ref("tab1")
const selectedCity = ref("北市")
const LegisT2 = ref({ detail: [] })

// 🧭 Tab 定義
const tabs = [
    { id: "tab1", name: "北部地區", defaultCity: "北市" },
    { id: "tab2", name: "中部地區", defaultCity: "台中" },
    { id: "tab3", name: "南部地區", defaultCity: "高雄" },
    { id: "tab4", name: "東部地區", defaultCity: "花蓮" },
    { id: "tab5", name: "離島地區", defaultCity: "金門" },
    { id: "tab6", name: "平地原住民" },
    { id: "tab7", name: "山地原住民" },
]

// ⚙️ 數字動畫設定
const options = {
    duration: 0,
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ",",
}

// 🏷️ 地區標題
const regionTitle = computed(() => {
    if (currentTab.value === "tab6") return "平地原住民立委名單"
    if (currentTab.value === "tab7") return "山地原住民立委名單"
    return `${formatCity(selectedCity.value)}立委名單`
})

// 📍 城市名稱正規化
function formatCity(city) {
    return city
        .replace("北市", "台北市")
        .replace("新北", "新北市")
        .replace("基隆", "基隆市")
        .replace("桃園", "桃園市")
        .replace("新竹", "新竹市")
        .replace("竹縣", "新竹縣")
        .replace("宜蘭", "宜蘭縣")
        .replace("台中", "台中市")
        .replace("雲林", "雲林縣")
        .replace("南投", "南投縣")
        .replace("苗縣", "苗栗縣")
        .replace("彰化", "彰化縣")
        .replace("高雄", "高雄市")
        .replace("台南", "台南市")
        .replace("嘉義", "嘉義市")
        .replace("嘉縣", "嘉義縣")
        .replace("屏東", "屏東縣")
        .replace("澎湖", "澎湖縣")
        .replace("花蓮", "花蓮縣")
        .replace("台東", "台東縣")
        .replace("金門", "金門縣")
        .replace("連江", "連江縣")
}

// 🙋‍♂️ 政黨名稱正規化
function normalizeParty(name) {
    return name.replace(/無/g, "無黨籍").replace(/台灣雙語無黨籍法黨/g, "台灣雙語無法黨")
}

// 🧭 切換 tab
function showTab(tabId) {
    currentTab.value = tabId
    const tab = tabs.find((t) => t.id === tabId)
    if (tab?.defaultCity) selectedCity.value = tab.defaultCity
}

// 🔄 切換「完整得票／當選名單」
function toggleAll() {
    showAll.value = !showAll.value
}

// 📡 抓取資料
async function getLegis() {
    try {
        const res = await axios.get("https://www.ftvnews.com.tw/topics/2024election/election.json")
        LegisT2.value = res.data.T2
    } catch (e) {
        console.error(e)
    }
}

onMounted(() => {
    getLegis()
    setInterval(getLegis, 5000)
})
</script>


<template>
    <div class="layout vote pc">
        <div class="header">
            <div class="icontitle">
                <img src="@/assets/LegisList.png" alt="" />
                <h2>
                    {{ regionTitle }}
                </h2>
            </div>

            <div @click="toggleAll" class="Regionbtn">
                <p v-if="!showAll">點我看當選名單</p>
                <p v-else>點我看完整得票數</p>
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </div>
        </div>

        <!-- 地區 Tabs -->
        <ul class="Region-navtab pc">
            <li style="background:transparent;color:#c1c1c1;box-shadow:none">地區/縣市</li>
            <li v-for="tab in tabs" :key="tab.id" :class="{ active: currentTab === tab.id }" @click="showTab(tab.id)">
                {{ tab.name }}
            </li>
        </ul>

        <!-- 各地區內容 -->
        <div v-if="showAll">
            <template v-for="election in LegisT2.detail" :key="election.id">
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

                    <tbody v-for="area in election.areas" :key="area.index">
                        <tr v-for="cand in area.tickets" :key="cand.index">
                            <td>{{ area.areaName }}</td>
                            <td>
                                <img class="partyicon"
                                    :src="`https://www.ftvnews.com.tw/topics/2024election/images/partyicon/${cand.party}.jpg`"
                                    :alt="cand.party" />
                                {{ normalizeParty(cand.party) }}
                            </td>
                            <td>{{ cand.candName }}</td>
                            <td>
                                <CountUp :end-val="cand.ticket" :options="options" />票
                            </td>
                            <td>
                                <img v-if="cand.winner === '*'" src="@/assets/pass.png" alt="pass" class="pass" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>

        <!-- 當選名單模式 -->
        <div v-else>
            <template v-for="election in LegisT2.detail" :key="election.id">
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
                    <tbody v-for="area in election.areas" :key="area.index">
                        <tr v-for="cand in area.tickets" :key="cand.index" v-if="cand.winner === '*'">
                            <td>{{ area.areaName }}</td>
                            <td>
                                <img class="partyicon"
                                    :src="`https://www.ftvnews.com.tw/topics/2024election/images/partyicon/${cand.party}.jpg`"
                                    :alt="cand.party" />
                                {{ normalizeParty(cand.party) }}
                            </td>
                            <td>{{ cand.candName }}</td>
                            <td>
                                <CountUp :end-val="cand.ticket" :options="options" />票
                            </td>
                            <td>
                                <img src="@/assets/pass.png" alt="pass" class="pass" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
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
    display: flex;
    cursor: pointer;



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
    }
}

.active1 {
    border-radius: 20px;
    background: rgba(255, 122, 0, 0.20);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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

.active {
    color: rgb(255, 255, 255) !important;
    border-bottom: 2px solid orange;
    background: rgba(255, 122, 0, 0.20);
}

ul {
    flex-wrap: wrap;
}
</style>
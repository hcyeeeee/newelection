<template>
    <div class="layout">
        <div class="icontitle">
            <img src="../assets/LegisList.png" alt="">
            <h2> {{ selectedCity }}立委即時開票區</h2>
            <h2 v-if="selectedRegion == '不分區'">
                {{ selectedCity }}不分區立委參選名單</h2>
        </div>
        <div style="display: grid;grid: 1fr 1fr;grid-template-columns: 1fr 4fr;">
            <ul class="Region-navtab pc">
                <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                <li @click="showTab('tab1')">北部地區</li>
                <li @click="showTab('tab2')">中部地區</li>
                <li @click="showTab('tab3')">南部地區</li>
                <li @click="showTab('tab4')">東部地區</li>
                <li @click="showTab('tab5')">離島地區</li>
                <li @click="showTab('tab6')">山地原住民</li>
                <li @click="showTab('tab7')">不分區</li>

            </ul>

            <!-- Tab 內容 -->
            <div v-show="currentTab === 'tab1'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '台北市' || election.cityName == '新北市' || election.cityName == '基隆市'
                            || election.cityName == '桃園市' || election.cityName == '新竹市' || election.cityName == '新竹縣' ||
                            election.cityName == '宜蘭縣'" :class="{ 'active1': selectedCity === election.cityName }">{{
        election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>政黨</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.party }}</td>
                                        <td> {{ items.candName }}</td>
                                        <td> {{ items.ticket }}</td>
                                        <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                                style="z-index: 99999; width: 30px;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab2'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '台中市' || election.cityName == '苗栗縣' || election.cityName == '彰化縣'
                            || election.cityName == '南投縣' || election.cityName == '雲林縣'"
                            :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>政黨</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.party }}</td>
                                        <td> {{ items.candName }}</td>
                                        <td> {{ items.ticket }}</td>
                                        <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                                style="z-index: 99999; width: 30px;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab3'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '高雄市' ||
                            election.cityName == '臺南市' ||
                            election.cityName == '嘉義市' ||
                            election.cityName == '嘉義縣' ||
                            election.cityName == '屏東縣' ||
                            election.cityName == '澎湖縣'" :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>

                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>政黨</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.party }}</td>
                                        <td> {{ items.candName }}</td>
                                        <td> {{ items.ticket }}</td>
                                        <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                                style="z-index: 99999; width: 30px;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab4'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '花蓮縣' || election.cityName == '台東縣'"
                            :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>政黨</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.party }}</td>
                                        <td> {{ items.candName }}</td>
                                        <td> {{ items.ticket }}</td>
                                        <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                                style="z-index: 99999; width: 30px;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab5'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '金門縣' || election.cityName == '連江縣'"
                            :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>政黨</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.party }}</td>
                                        <td> {{ items.candName }}</td>
                                        <td> {{ items.ticket }}</td>
                                        <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                                style="z-index: 99999; width: 30px;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab6'">
                <h2>{{ LegisT3.typeName }}</h2>
                <div v-for="election in  LegisT3.detail" :key="election.id">
                    <table>
                        <thead>
                            <tr v-if="election.cityNo == 1">
                                <th>選區</th>
                                <th>政黨</th>
                                <th>姓名</th>
                                <th>票數</th>
                                <th>當選註記</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in election.areas" :key="item.index">
                            <tr v-for="items in item.tickets" :key="items.index">
                                <td> {{ election.cityName }}</td>
                                <td><img class="partyicon"
                                        :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                        :alt="items.party">{{ items.party }}</td>
                                <td> {{ items.candName }}</td>
                                <td> {{ items.ticket }}</td>
                                <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                        style="z-index: 99999; width: 30px;">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="LegisT4.typeName == '山地原住民立委'">
                    <h2>{{ LegisT4.typeName }}</h2>
                    <div v-for="election in  LegisT4.detail" :key="election.id">
                        <table>
                            <thead>
                                <tr v-if="election.cityNo == 1">
                                    <th>選區</th>
                                    <th>政黨</th>
                                    <th>姓名</th>
                                    <th>票數</th>
                                    <th>當選註記</th>
                                </tr>
                            </thead>
                            <tbody v-for="item in election.areas" :key="item.index">
                                <tr v-for="items in item.tickets" :key="items.index">
                                    <td> {{ election.cityName }}</td>
                                    <td><img class="partyicon"
                                            :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                            :alt="items.party">{{ items.party }}</td>
                                    <td> {{ items.candName }}</td>
                                    <td> {{ items.ticket }}</td>
                                    <td> <img v-if="items.winner == '*'" src="../assets/pass.png" alt=""
                                            style="z-index: 99999; width: 30px;">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-show="currentTab === 'tab7'">
                <h2>{{ LegisT5.typeName }}</h2>

                <div v-for=" picdata in LegisT5.detail" :key="picdata.id">
                    {{ picdata }}
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'BarChart',
    data() {
        return {
            selectedArea: null,
            selectedCity: null,
            LegisT2: [],
            LegisT3: [],
            LegisT4: [],
            LegisT5: [],
            CityNo: null,
            currentTab: 'tab1',
            loaded: false,
            chartdata: null
        };
    }, methods: {
        showTab(tab) {
            this.currentTab = tab;
            // Set the default selected city based on the region
            switch (tab) {
                case 'tab1':
                    this.selectedCity = '台北市';
                    break;
                case 'tab2':
                    this.selectedCity = '台中市';
                    break;
                case 'tab3':
                    this.selectedCity = '高雄市';
                    break;
                case 'tab4':
                    this.selectedCity = '花蓮縣';
                    break;
                case 'tab5':
                    this.selectedCity = '連江縣';
                    break;
                // Add cases for other tabs as needed
                default:
                    this.selectedCity = '台北市';
            }
        },
        getLegis() {
            axios
                .get("/ftvelect.json")
                .then((response) => {
                    this.LegisT2 = response.data.T2;
                    this.LegisT3 = response.data.T3;
                    this.LegisT4 = response.data.T4;
                    this.LegisT5 = response.data.T5;
                })
                .catch((error) => {
                    console.log("error" + error);
                });

        },
        selectCity(cityName) {
            this.selectedCity = cityName;
        },
    },
    mounted() {
        this.selectedArea = '北部地區'
        this.selectedCity = '台北市'
        this.getLegis();
        // setInterval(() => {
        //     this.getLegis()
        // }, 8000);
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

.pass {
    width: 30px;
    height: 30px;

    @include pad {
        width: 40px;
        height: 40px;
    }
}

ul {
    display: flex;
    justify-content: center;

    li {

        h3 {
            margin: 1rem;
            padding: .5rem;
            border-radius: 100px;
            background: lightgray;
        }
    }
}

.active1 {
    border-radius: 100px;
    background: rgba(255, 122, 0, 0.20);
}
</style>
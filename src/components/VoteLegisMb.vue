<template >
    <div class="layout mb">
        <div class="mbtab_content mb">
            <div style="display: flex;justify-content: space-between;">
                <div class="icontitle">
                    <img loading="lazy" src="../assets/LegisList.png" alt="fight">
                    <h2 v-if="showList == true">
                        不分區立委名單</h2>
                    <h2 v-if="showList == false">
                        政黨得票數</h2>
                </div>
                <div @click="toggleList">
                    <p v-if="showList == true">政黨得票數 <font-awesome-icon icon="fa-solid fa-angles-right" /></p>
                    <p v-if="showList == false">不分區立委名單 <font-awesome-icon icon="fa-solid fa-angles-right" /></p>
                </div>
            </div>
            <div>
                <div v-if="showList == false">
                    <table>
                        <thead>
                            <tr>
                                <th style="width:30%;">號次</th>
                                <th>政黨</th>
                                <th style="width:70%;">票數</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items in LegisT5.detail" :key="items.index">
                                <td style="width:30%;">{{ items.partyNo }}
                                </td>
                                <td style="justify-content: start;"><img loading="lazy" class="partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.partyName + '.jpg'"
                                        :alt="items.party">{{
                                            items.partyName.replace("小民參政歐巴桑聯盟", "小歐盟").replace("中華統一促進黨", "統促黨") }}</td>
                                <td style="width:70%;"> <count-up :end-val="items.tickets" :options="options"></count-up>票
                                </td>
                                <!-- <td style="width:50%;"> {{ items.ticketsRate.toFixed(2) }}%</td> -->

                            </tr>
                        </tbody>
                        <hr>
                    </table>
                </div>
                <div v-if="showList == true">
                    <img src="../assets/list.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="layout vote mb">
        <div style="display: flex;justify-content: space-between;">
            <div class="icontitle">
                <img loading="lazy" srcset="../assets/LegisList.png" alt="">

                <h2 v-if="showAll == true">立委開票結果</h2>
                <h2 v-if="showAll == false">立委當選名單</h2>

            </div>
            <div @click="toggleAll">
                <p v-if="showAll == false">開票結果<font-awesome-icon icon="fa-solid fa-angles-right" /></p>
                <p v-if="showAll == true">當選名單 <font-awesome-icon icon="fa-solid fa-angles-right" /></p>
            </div>
        </div>
        <div class="mbtab_content mb" v-if="showAll == false">
            <div v-if="currentTab === 'tab1'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1" :class="{ 'active': selectedArea == '北部地區' }">北部地區</option>
                        <option value="tab2" :class="{ 'active': selectedArea == '中部地區' }">中部地區</option>
                        <option value="tab3" :class="{ 'active': selectedArea === '北部地區' }">南部地區</option>
                        <option value="tab4" :class="{ 'active': selectedArea === '北部地區' }">東部地區</option>
                        <option value="tab5" :class="{ 'active': selectedArea === '北部地區' }">離島地區</option>
                        <option value="tab6" :class="{ 'active': selectedArea === '北部地區' }">原住民</option>
                    </select>
                    <div>
                        <select v-model="selectedCity" class=" custom-select select_mb">
                            <template v-for="election in LegisT2.detail">
                                <option :key="election.id" :value="election.cityName"
                                    v-if="['北市', '新北', '基隆', '桃園', '新竹', '竹縣', '宜蘭'].includes(election.cityName)">
                                    {{ election.cityName.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                                        "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭",
                                            "宜蘭縣") }}
                                </option>
                            </template>
                        </select>
                    </div>
                </div>

                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                :options="options"></count-up>票</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                srcset="../assets/pass.png" alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab2'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['台中', '苗縣', '彰化', '南投', '雲林'].includes(election.cityName)">
                                {{ election.cityName.replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                        <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                :options="options"></count-up>票</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                srcset="../assets/pass.png" alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab3'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['高雄', '台南', '嘉義', '嘉縣', '屏東', '澎湖'].includes(election.cityName)">
                                {{ election.cityName.replace("高雄", "高雄市").replace("台南", "台南市").replace("嘉義",
                                    "嘉義市").replace("嘉縣", "嘉義縣").replace("屏東", "屏東縣").replace("澎湖", "澎湖縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                        <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                :options="options"></count-up>票</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                srcset="../assets/pass.png" alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab4'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['花蓮', '台東'].includes(election.cityName)">
                                {{ election.cityName.replace("花蓮", "花蓮縣").replace("台東", "台東縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                        <td v-if="items.winner == '*'"><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                :options="options"></count-up>票</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                srcset="../assets/pass.png" alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab5'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['連江', '金門'].includes(election.cityName)">
                                {{ election.cityName.replace("金門", "金門縣").replace("連江", "連江縣") }}
                            </option>
                        </template>
                    </select>
                </div>

                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">

                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td v-if="items.winner == '*'"> {{ item.areaName }}</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td v-if="items.winner == '*'"><count-up :end-val="items.ticket"
                                                :options="options"></count-up>票</td>
                                        <td v-if="items.winner == '*'"> <img loading="lazy" v-if="items.winner == '*'"
                                                srcset="../assets/pass.png" alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                </tbody>
                                <hr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab6'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                    </select>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style="width:40%; max-height:fit-content; justify-content: center;">號次</th>
                                <th>姓名</th>
                                <th style=" width:60%;justify-content:center;">票數</th>
                                <th style="width:50px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="election in  LegisT3.tickets" :key="election.id">
                                <td v-if="election.winner == '*'" style="width:40%;"> {{ election.candNo }}</td>
                                <td v-if="election.winner == '*'" style=" width:100%;justify-content:start;">
                                    <img loading="lazy" class=" partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                        :alt="election.party">{{ election.candName }}
                                </td>
                                <td v-if="election.winner == '*'" style=" width:60%;justify-content:center;"><count-up
                                        :end-val="election.ticket" :options="options"></count-up>票</td>
                                <td v-if="election.winner == '*'"
                                    style="width:50px; max-height:fit-content; justify-content: center;"> <img
                                        v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                        style="z-index: 12;" class="pass">
                                </td>
                            </tr>
                        </tbody>
                        <hr>
                    </table>
                </div>
            </div>
            <div v-if="currentTab === 'tab7'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab7">原住民</option>
                    </select>
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                    </select>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style="width:40%; max-height:fit-content; justify-content: center;">號次</th>
                                <th>姓名</th>
                                <th style=" width:60%;justify-content:center;">票數</th>
                                <th style="width:50px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="election in  LegisT4.tickets" :key="election.id">
                                <td v-if="election.winner == '*'" style="width:40%;"> {{ election.candNo }}</td>
                                <td v-if="election.winner == '*'" style=" width:100%;justify-content:start;">
                                    <img loading="lazy" class=" partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                        :alt="election.party">{{ election.candName }}
                                </td>
                                <td v-if="election.winner == '*'" style=" width:60%;justify-content:center;"><count-up
                                        :end-val="election.ticket" :options="options"></count-up>票</td>
                                <td v-if="election.winner == '*'"
                                    style="width:50px; max-height:fit-content; justify-content: center;"> <img
                                        v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                        style="z-index: 12;" class="pass">
                                </td>
                            </tr>
                        </tbody>
                        <hr>
                    </table>
                </div>
            </div>
        </div>
        <div class="mbtab_content mb" v-if="showAll == true">
            <div v-if="currentTab === 'tab1'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1" :class="{ 'active': selectedArea == '北部地區' }">北部地區</option>
                        <option value="tab2" :class="{ 'active': selectedArea == '中部地區' }">中部地區</option>
                        <option value="tab3" :class="{ 'active': selectedArea === '北部地區' }">南部地區</option>
                        <option value="tab4" :class="{ 'active': selectedArea === '北部地區' }">東部地區</option>
                        <option value="tab5" :class="{ 'active': selectedArea === '北部地區' }">離島地區</option>
                        <option value="tab6" :class="{ 'active': selectedArea === '北部地區' }">原住民</option>
                    </select>
                    <div>
                        <select v-model="selectedCity" class=" custom-select select_mb">
                            <template v-for="election in LegisT2.detail">
                                <option :key="election.id" :value="election.cityName"
                                    v-if="['北市', '新北', '基隆', '桃園', '新竹', '竹縣', '宜蘭'].includes(election.cityName)">
                                    {{ election.cityName.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                                        "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭",
                                            "宜蘭縣") }}
                                </option>
                            </template>
                        </select>
                    </div>
                </div>

                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaName }}</td>
                                        <td><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                        <td> <img loading="lazy" v-if="items.winner == '*'" srcset="../assets/pass.png"
                                                alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab2'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['台中', '苗縣', '彰化', '南投', '雲林'].includes(election.cityName)">
                                {{ election.cityName.replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for=" election in LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaName }}</td>
                                        <td><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                        <td> <img loading="lazy" v-if="items.winner == '*'" srcset="../assets/pass.png"
                                                alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab3'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['高雄', '台南', '嘉義', '嘉縣', '屏東', '澎湖'].includes(election.cityName)">
                                {{ election.cityName.replace("高雄", "高雄市").replace("台南", "台南市").replace("嘉義",
                                    "嘉義市").replace("嘉縣", "嘉義縣").replace("屏東", "屏東縣").replace("澎湖", "澎湖縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaName }}</td>
                                        <td><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                        <td> <img loading="lazy" v-if="items.winner == '*'" srcset="../assets/pass.png"
                                                alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab4'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['花蓮', '台東'].includes(election.cityName)">
                                {{ election.cityName.replace("花蓮", "花蓮縣").replace("台東", "台東縣") }}
                            </option>
                        </template>
                    </select>
                </div>
                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <!-- <tr>{{ item.areaName }}</tr> -->
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaName }}</td>
                                        <td><img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                        <td> <img loading="lazy" v-if="items.winner == '*'" srcset="../assets/pass.png"
                                                alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                    <hr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab5'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['連江', '金門'].includes(election.cityName)">
                                {{ election.cityName.replace("金門", "金門縣").replace("連江", "連江縣") }}
                            </option>
                        </template>
                    </select>
                </div>

                <div v-for="election in  LegisT2.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">

                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaName }}</td>
                                        <td> <img loading="lazy" class="partyicon"
                                                :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
                                        <td> <img loading="lazy" v-if="items.winner == '*'" srcset="../assets/pass.png"
                                                alt="pass" style="z-index: 12;" class="pass">
                                        </td>
                                    </tr>
                                </tbody>
                                <hr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTab === 'tab6'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">原住民</option>
                    </select>
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                    </select>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style="width:40%; max-height:fit-content; justify-content: center;">號次</th>
                                <th>姓名</th>
                                <th style=" width:60%;justify-content:center;">票數</th>
                                <th style="width:50px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="election in  LegisT3.tickets" :key="election.id">
                                <td style="width:40%;"> {{ election.candNo }}</td>
                                <td style=" width:100%;justify-content:start;">
                                    <img loading="lazy" class=" partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                        :alt="election.party">{{ election.candName }}
                                </td>
                                <td style=" width:60%;justify-content:center;"><count-up :end-val="election.ticket"
                                        :options="options"></count-up>票</td>
                                <td style="width:50px; max-height:fit-content; justify-content: center;"> <img
                                        v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                        style="z-index: 12;" class="pass">
                                </td>
                            </tr>
                        </tbody>
                        <hr>
                    </table>
                </div>
            </div>
            <div v-if="currentTab === 'tab7'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab7">原住民</option>
                    </select>
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                    </select>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th style="width:40%; max-height:fit-content; justify-content: center;">號次</th>
                                <th>姓名</th>
                                <th style=" width:60%;justify-content:center;">票數</th>
                                <th style="width:50px;"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="election in  LegisT4.tickets" :key="election.id">
                                <td style="width:40%;"> {{ election.candNo }}</td>
                                <td style=" width:100%;justify-content:start;">
                                    <img loading="lazy" class=" partyicon"
                                        :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + election.party + '.jpg'"
                                        :alt="election.party">{{ election.candName }}
                                </td>
                                <td style=" width:60%;justify-content:center;"><count-up :end-val="election.ticket"
                                        :options="options"></count-up>票</td>
                                <td style="width:50px; max-height:fit-content; justify-content: center;"> <img
                                        v-if="election.winner == '*'" srcset="../assets/pass.png" alt="pass"
                                        style="z-index: 12;" class="pass">
                                </td>
                            </tr>
                        </tbody>
                        <hr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CountUp from "vue-countup-v3";
export default {
    components: {
        CountUp,
    },
    data() {
        return {
            showAll: false,
            showList: false,
            nowtime: "",
            selectedArea: null,
            selectedCity: '',
            LegisT2: [],
            LegisT3: [],
            LegisT4: [],
            LegisT5: [],
            CityNo: null,
            currentTab: 'tab1',
            loaded: false,
            options: {
                duration: 1,
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: "",
                prefix: "",
                suffix: "",
                formattingFn: (n) => {
                    if (n >= 10000) {
                        var formattedNumber = Math.trunc(n / 10000) + '萬';
                        var lastFourDigits = n.toString().slice(-4);
                        return formattedNumber + lastFourDigits;
                    } else {
                        return n;
                    }
                },
            },
        };
    }, methods: {
        Nowtime() {
            var time = new Date();
            this.nowtime = time.toLocaleTimeString("en-GB");
        },
        handleTabChange(event) {
            const selectedTab = event.target.value;
            this.showTab(selectedTab);
        },
        showTab(tab) {
            this.currentTab = tab;
            switch (tab) {
                case 'tab1':
                    this.selectedCity = '北市';
                    break;
                case 'tab2':
                    this.selectedCity = '台中';
                    break;
                case 'tab3':
                    this.selectedCity = '高雄';
                    break;
                case 'tab4':
                    this.selectedCity = '花蓮';
                    break;
                case 'tab5':
                    this.selectedCity = '金門';
                    break;
                default:
                    this.selectedCity = '北市';
            }
        },
        getLegis() {
            //檢查
            axios
                .get("https://www.ftvnews.com.tw/topics/2024election/election.json")
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
        toggleList() {
            this.showList = !this.showList;
        },
        toggleAll() {
            this.showAll = !this.showAll;
        },
    },
    mounted() {
        this.selectedArea = '北部地區';
        this.selectedCity = '北市';
        this.getLegis();
        this.Nowtime();
        setInterval(() => {
            this.getLegis();
        }, 5000);
        setInterval(() => {
            this.Nowtime();
        }, 1000);
    }
}
</script>

<style lang="scss" scoped>
@mixin phone {
    @media (min-width: 500px) {
        @content;
    }
}

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
    font-size: 1.1rem;
    display: flex;
    cursor: pointer;


    .active {
        color: black !important;
        border-bottom: 2px solid orange;
        background: rgba(255, 122, 0, 0.20);
    }
}



.pass {
    width: 22px;
    height: 22px;

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
            margin: 1rem;
            padding: .5rem;
            border-radius: 20px;
            background: rgba(217, 217, 217, 0.35);
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            cursor: pointer;
            margin-top: 0rem;
        }
    }
}

.active1 {
    border-radius: 20px;
    background: rgba(255, 122, 0, 0.20);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}



.mbtab {
    display: flex;
    width: 100px;
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

table {
    thead {
        tr {
            th {
                font-size: 1.05rem;
                justify-content: center;
                text-align: center;

                &:first-child {
                    width: 70%;
                }

                &:nth-child(2) {
                    display: flex;
                    width: 90%;
                    justify-content: center;
                }

                &:nth-child(3) {
                    width: 80%;
                }

                &:last-child {
                    width: 60px;
                }
            }
        }
    }

    tbody {


        tr {
            td {
                font-size: 1.05rem;

                &:first-child {
                    width: 70%;
                }

                &:nth-child(2) {
                    display: flex;
                    overflow: wrap;
                    white-space: wrap;
                    width: 90%;
                    justify-content: center;
                    height: fit-content;

                }


                &:nth-child(3) {
                    width: 100%;
                }

                &:last-child {
                    width: 60px;
                }
            }
        }
    }
}

.video-container {
    margin-bottom: 1rem;
}
</style>
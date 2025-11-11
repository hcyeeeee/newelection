<template>
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
    <div class="layout vote pc">
        <div>
            <div style="display: flex;justify-content: space-between;">
                <div class="icontitle">
                    <img loading="lazy" src="../assets/LegisList.png" alt="">
                    <h2 v-if="currentTab !== 'tab6' && currentTab !== 'tab7'">
                        {{ selectedCity.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                            "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭",
                                "宜蘭縣").replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣").replace("高雄", "高雄市").replace("台南",
                                        "台南市").replace("嘉義",
                                            "嘉義市").replace("嘉縣", "嘉義縣").replace("屏東", "屏東縣").replace("澎湖", "澎湖縣").replace("花蓮",
                                                "花蓮縣").replace("台東",
                                                    "台東縣") }}立委名單
                    </h2>
                    <h2 v-if="currentTab == 'tab6'">
                        平地原住民立委名單</h2>
                    <h2 v-if="currentTab == 'tab7'">
                        山地原住民立委名單</h2>
                </div>
                <div @click="toggleAll" class="Regionbtn">
                    <p v-if="showAll == false">點我看當選名單</p>
                    <p v-if="showAll == true">點我看完整得票數</p>
                    <font-awesome-icon icon="fa-solid fa-angles-right" />
                </div>
            </div>
            <div class="pctab pc" v-if="showAll == false">
                <ul class="Region-navtab pc">
                    <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                    <li @click="showTab('tab1')" :class="{ 'active': currentTab === 'tab1' }">北部地區</li>
                    <li @click="showTab('tab2')" :class="{ 'active': currentTab === 'tab2' }">中部地區</li>
                    <li @click="showTab('tab3')" :class="{ 'active': currentTab === 'tab3' }">南部地區</li>
                    <li @click="showTab('tab4')" :class="{ 'active': currentTab === 'tab4' }">東部地區</li>
                    <li @click="showTab('tab5')" :class="{ 'active': currentTab === 'tab5' }">離島地區</li>
                    <li @click="showTab('tab6')" :class="{ 'active': currentTab === 'tab6' }">平地原住民</li>
                    <li @click="showTab('tab7')" :class="{ 'active': currentTab === 'tab7' }">山地原住民</li>
                </ul>
                <!-- Tab 內容 -->
                <div v-show="currentTab === 'tab1'">
                    <ul class="pc">
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '北市' || election.cityName == '新北' || election.cityName == '基隆'
                                || election.cityName == '桃園' || election.cityName == '新竹' || election.cityName == '竹縣' ||
                                election.cityName == '宜蘭'" :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                                    "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭", "宜蘭縣")
                                }}
                            </h3>
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
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td> {{ item.areaName }}</td>
                                            <td><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td> {{ items.candName }}</td>
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
                <div v-show="currentTab === 'tab2'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '台中' || election.cityName == '苗縣' || election.cityName == '彰化'
                                || election.cityName == '南投' || election.cityName == '雲林'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣") }}
                            </h3>
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
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td> {{ item.areaName }}</td>
                                            <td><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td> {{ items.candName }}</td>
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
                <div v-show="currentTab === 'tab3'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
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
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td> {{ item.areaName }}</td>
                                            <td><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td> {{ items.candName }}</td>
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
                <div v-show="currentTab === 'tab4'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '花蓮' || election.cityName == '台東'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("花蓮", "花蓮縣").replace("台東", "台東縣") }}</h3>
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
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td> {{ item.areaName }}</td>
                                            <td><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td> {{ items.candName }}</td>
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
                <div v-show="currentTab === 'tab5'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '金門' || election.cityName == '連江'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("金門", "金門縣").replace("連江", "連江縣") }}</h3>
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
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="item in election.areas" :key="item.index">
                                        <tr v-for="items in item.tickets" :key="items.index">
                                            <td> {{ item.areaName }}</td>
                                            <td><img loading="lazy" class="partyicon"
                                                    :srcset="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                    :alt="items.party">{{ items.party.replace(/無/g,
                                                        "無黨籍").replace(/台灣雙語無黨籍法黨/g,
                                                            "台灣雙語無法黨") }}</td>
                                            <td> {{ items.candName }}</td>
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
                <div v-show="currentTab === 'tab6'">
                    <ul>
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT3.detail" :key="election.id">
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
                                <tr v-for="election in  LegisT3.tickets" :key="election.id">
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
                                <tr v-for="election in  LegisT4.tickets" :key="election.id">
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
            <div class="pctab pc" v-if="showAll == true">
                <ul class="Region-navtab pc">
                    <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                    <li @click="showTab('tab1')" :class="{ 'active': currentTab === 'tab1' }">北部地區</li>
                    <li @click="showTab('tab2')" :class="{ 'active': currentTab === 'tab2' }">中部地區</li>
                    <li @click="showTab('tab3')" :class="{ 'active': currentTab === 'tab3' }">南部地區</li>
                    <li @click="showTab('tab4')" :class="{ 'active': currentTab === 'tab4' }">東部地區</li>
                    <li @click="showTab('tab5')" :class="{ 'active': currentTab === 'tab5' }">離島地區</li>
                    <li @click="showTab('tab6')" :class="{ 'active': currentTab === 'tab6' }">平地原住民</li>
                    <li @click="showTab('tab7')" :class="{ 'active': currentTab === 'tab7' }">山地原住民</li>
                </ul>
                <!-- Tab 內容 -->
                <div v-show="currentTab === 'tab1'">
                    <ul class="pc">
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '北市' || election.cityName == '新北' || election.cityName == '基隆'
                                || election.cityName == '桃園' || election.cityName == '新竹' || election.cityName == '竹縣' ||
                                election.cityName == '宜蘭'" :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("北市", "台北市").replace("新北", "新北市").replace("基隆",
                                    "基隆市").replace("桃園", "桃園市").replace("新竹", "新竹市").replace("竹縣", "新竹縣").replace("宜蘭", "宜蘭縣")
                                }}
                            </h3>
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
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '台中' || election.cityName == '苗縣' || election.cityName == '彰化'
                                || election.cityName == '南投' || election.cityName == '雲林'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("台中", "台中市").replace("雲林", "雲林縣").replace("南投",
                                    "南投縣").replace("苗縣", "苗栗縣").replace("彰化", "彰化縣") }}
                            </h3>
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
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
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
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '花蓮' || election.cityName == '台東'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("花蓮", "花蓮縣").replace("台東", "台東縣") }}</h3>
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
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                            <h3 v-show="election.cityName == '金門' || election.cityName == '連江'"
                                :class="{ 'active1': selectedCity === election.cityName }">
                                {{ election.cityName.replace("金門", "金門縣").replace("連江", "連江縣") }}</h3>
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
                        <li @click="selectCity(election.cityName)" v-for="election in  LegisT3.detail" :key="election.id">
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
                                <tr v-for="election in  LegisT3.tickets" :key="election.id">
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
                                <tr v-for="election in  LegisT4.tickets" :key="election.id">
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
<script>
import CountUp from "vue-countup-v3";
import axios from 'axios';
export default {
    data() {
        return {
            showList: false,
            showAll: true,
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
                duration: 0,
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: ",",
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
            flourishSrc: "visualisation/16340175",
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
            axios
                //檢查
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
        loadFlourishScript() {
            const script = document.createElement("script");
            script.src = "https://public.flourish.studio/resources/embed.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }, toggleList() {
            this.showList = !this.showList

        },
        toggleAll() {

            this.showAll = !this.showAll;
        },
    },
    mounted() {
        this.selectedArea = '北部地區';
        this.selectedCity = '北市';
        this.Nowtime();
        this.getLegis();
        setInterval(() => {
            this.getLegis();
        }, 5000);
        setInterval(() => {
            this.Nowtime();
        }, 1000);
        this.loadFlourishScript();
    }, components: {
        CountUp,
    },
}
</script>

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
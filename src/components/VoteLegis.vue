<template>
    <div class="layout vote">
        <div class="icontitle">
            <img src="../assets/LegisList.png" alt="">
            <h2 v-if="currentTab !== 'tab6' && currentTab !== 'tab7' && currentTab !== 'tab8'"> {{ selectedCity }}立委即時開票區
            </h2>
            <h2 v-if="currentTab == 'tab6'">
                平地原住民即時開票區</h2>
            <h2 v-if="currentTab == 'tab7'">
                山地原住民即時開票區</h2>
            <h2 v-if="currentTab == 'tab8'">
                政黨票即時開票區</h2>
        </div>
        <div class="mbtab_content mb">
            <div v-if="currentTab === 'tab1'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1" :class="{ 'active': selectedArea == '北部地區' }">北部地區</option>
                        <option value="tab2" :class="{ 'active': selectedArea == '中部地區' }">中部地區</option>
                        <option value="tab3" :class="{ 'active': selectedArea === '北部地區' }">南部地區</option>
                        <option value="tab4" :class="{ 'active': selectedArea === '北部地區' }">東部地區</option>
                        <option value="tab5" :class="{ 'active': selectedArea === '北部地區' }">離島地區</option>
                        <option value="tab6" :class="{ 'active': selectedArea === '北部地區' }">平地原住民</option>
                        <option value="tab7" :class="{ 'active': selectedArea === '北部地區' }">山地原住民</option>
                        <option value="tab8" :class="{ 'active': selectedArea === '北部地區' }">不分區</option>
                    </select>
                    <div>
                        <select v-model="selectedCity" class=" custom-select select_mb">
                            <template v-for="election in LegisT2.detail">
                                <option :key="election.id" :value="election.cityName"
                                    v-if="['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣'].includes(election.cityName)">
                                    {{ election.cityName }}
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
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab2'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['台中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'].includes(election.cityName)">
                                {{ election.cityName }}
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
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab3'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣'].includes(election.cityName)">
                                {{ election.cityName }}
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
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab4'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['花蓮縣', '台東縣'].includes(election.cityName)">
                                {{ election.cityName }}
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
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab5'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT2.detail">
                            <option :key="election.id" :value="election.cityName"
                                v-if="['連江縣', '金門縣'].includes(election.cityName)">
                                {{ election.cityName }}
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
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td> <img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab6'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT3.detail">
                            <option :value="election.cityName">
                                {{ election.cityName }}
                            </option>
                        </template>
                    </select>
                </div>

                <div v-for="election in  LegisT3.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td> <img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-if="currentTab === 'tab7'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">

                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                    <select v-model="selectedCity" class=" custom-select select_mb">
                        <template v-for="election in LegisT4.detail">
                            <option :value="election.cityName">
                                {{ election.cityName }}
                            </option>
                        </template>
                    </select>
                </div>

                <div v-for="election in  LegisT4.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ item.areaNo }}</td>
                                        <td> <img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party">{{ items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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


            <div v-if="currentTab === 'tab8'">
                <div class="Region-navtab_mb">
                    <select class=" custom-select select_mb" @change="handleTabChange" v-model="currentTab">
                        <option value="tab1">北部地區</option>
                        <option value="tab2">中部地區</option>
                        <option value="tab3">南部地區</option>
                        <option value="tab4">東部地區</option>
                        <option value="tab5">離島地區</option>
                        <option value="tab6">平地原住民</option>
                        <option value="tab7">山地原住民</option>
                        <option value="tab8">不分區</option>
                    </select>
                </div>
                <h2>{{ LegisT5.typeName }}</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>號次</th>
                                <th>政黨</th>
                                <th>票數</th>
                                <th>比例</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items in LegisT5.detail" :key="items.index">
                                <td>{{ items.partyNo }}</td>
                                <td><img class="partyicon"
                                        :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.cityName + '.jpg'"
                                        :alt="items.party">{{ items.cityName }}</td>
                                <td> <count-up :end-val="items.tickets" :options="options"></count-up>票</td>
                                <td> {{ items.ticketsRate }}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

        <div class="pctab pc">
            <ul class="Region-navtab pc">
                <li style="background: transparent; color: #c1c1c1; box-shadow: none;">地區/縣市</li>
                <li @click="showTab('tab1')" :class="{ 'active': currentTab === 'tab1' }">北部地區</li>
                <li @click="showTab('tab2')" :class="{ 'active': currentTab === 'tab2' }">中部地區</li>
                <li @click="showTab('tab3')" :class="{ 'active': currentTab === 'tab3' }">南部地區</li>
                <li @click="showTab('tab4')" :class="{ 'active': currentTab === 'tab4' }">東部地區</li>
                <li @click="showTab('tab5')" :class="{ 'active': currentTab === 'tab5' }">離島地區</li>
                <li @click="showTab('tab6')" :class="{ 'active': currentTab === 'tab6' }">平地原住民</li>
                <li @click="showTab('tab7')" :class="{ 'active': currentTab === 'tab7' }">山地原住民</li>
                <li @click="showTab('tab8')" :class="{ 'active': currentTab === 'tab8' }">不分區</li>
            </ul>
            <!-- Tab 內容 -->
            <div v-show="currentTab === 'tab1'">
                <ul class="pc">
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT2.detail" :key="election.id">
                        <h3 v-show="election.cityName == '台北市' || election.cityName == '新北市' || election.cityName == '基隆市'
                            || election.cityName == '桃園市' || election.cityName == '新竹市' || election.cityName == '新竹縣' ||
                            election.cityName == '宜蘭縣'" :class="{ 'active1': selectedCity === election.cityName }">
                            {{
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
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT3.detail" :key="election.id">
                        <h3 :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for="election in  LegisT3.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th>姓名</th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index">
                                        <td> {{ election.cityName }}</td>
                                        <td style="white-space:wrap; max-height:fit-content; justify-content: start;"><img
                                                class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{
                                                    items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-show="currentTab === 'tab7'">
                <ul>
                    <li @click="selectCity(election.cityName)" v-for="election in  LegisT4.detail" :key="election.id">
                        <h3 :class="{ 'active1': selectedCity === election.cityName }">
                            {{ election.cityName }}</h3>
                    </li>
                </ul>
                <div v-for="election in  LegisT4.detail" :key="election.id">
                    <div>
                        <div>
                            <table v-if="selectedCity === election.cityName">
                                <thead>
                                    <tr>
                                        <th>選區</th>
                                        <th style="white-space:wrap; max-height:fit-content; justify-content: center;">姓名
                                        </th>
                                        <th>票數</th>
                                        <th>當選註記</th>
                                    </tr>
                                </thead>
                                <tbody v-for="item in election.areas" :key="item.index">
                                    <tr v-for="items in item.tickets" :key="items.index" style="max-height:70px;">
                                        <td> {{ election.cityName }}</td>
                                        <td style="white-space:wrap;   justify-content: start;"><img class="partyicon"
                                                :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.party + '.jpg'"
                                                :alt="items.party"> {{
                                                    items.candName }}</td>
                                        <td><count-up :end-val="items.ticket" :options="options"></count-up>票</td>
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
            <div v-show="currentTab === 'tab8'">
                <h2>{{ LegisT5.typeName }}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>號次</th>
                            <th>政黨</th>
                            <th>票數</th>
                            <th>比例</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="items in LegisT5.detail" :key="items.index">
                            <td>{{ items.partyNo }}</td>
                            <td><img class="partyicon"
                                    :src="'https://www.ftvnews.com.tw/topics/2024election/images/partyicon/' + items.cityName + '.jpg'"
                                    :alt="items.party">{{ items.cityName }}</td>
                            <td> <count-up :end-val="items.tickets" :options="options"></count-up>票</td>
                            <td> {{ items.ticketsRate }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import CountUp from "vue-countup-v3";
export default {

    data() {
        return {
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
                duration: 0.5,
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: ",",
                prefix: "",
                suffix: "",
            },
        };
    }, methods: {
        handleTabChange(event) {
            const selectedTab = event.target.value;
            this.showTab(selectedTab);
        },
        showTab(tab) {
            this.currentTab = tab;
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
                default:
                    this.selectedCity = '台北市';
            }
        },
        getLegis() {
            axios
                .get("./ftvelect.json")
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
        this.selectedArea = '北部地區';
        this.selectedCity = '台北市';
        this.getLegis();
        setInterval(() => {
            this.getLegis();
        }, 10000);
    }, components: {
        CountUp,
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
    margin-right: .5rem;
    height: 30px !important;

    @include pad {
        margin-right: 1rem;
    }
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


.pctab {

    display: none;

    @include pad {
        display: grid;
        grid-template-columns: 1fr 4fr;
    }
}

.mbtab {
    display: flex;
    width: 100px;
}


tr {
    max-height: 45px;
    height: fit-content;
    display: flex;

    th {
        &:first-child {
            width: 60%;

            @include pad {}
        }

        &:nth-child(4) {
            width: 60%;
        }
    }

    td {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        @include pad {}

        &:first-child {
            width: 60%;

            @include pad {}
        }

        &:nth-child(2) {
            white-space: wrap;

            @include pad {
                white-space: nowrap;
            }
        }

        &:nth-child(4) {
            width: 60%;
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
</style>
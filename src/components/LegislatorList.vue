<template>
    <div class="layout-president layout">

        <table>
            <thead>
                <tr>
                    <th>選區</th>
                    <th>party</th>
                    <th>姓名</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td>{{ item.選區 }}</td>
                    <td><img :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.party + '.png'"
                            style="width: 20px; padding-right: 5px;">{{ item.party }}
                    </td>
                    <td>{{ item.姓名 }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    computed: {
        assetsImg() {
            return '/1.png'
        },
    },
    data() {
        return {
            news: [],
            activeTab: 'main',
            selectedCandidateIndex: null,
            tableData: [
                { 選區: 1, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '黃心意' },
                { 選區: 1, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },
                { 選區: 2, party: '民進黨', 姓名: '吳思瑤' },

            ]
        };
    }, methods: {
        showCandidate(index) {
            this.selectedCandidateIndex = index;
        }
    },
    created() {
        this.showCandidate(0);

    },
    mounted() {

    }

}

</script>

<style lang="scss">
img {
    width: 10px;
}
</style>
<template>
    <div>
        <div v-for="candidate in candidates" :key="candidate.index">
            <button @click="fetchData(candidate.name.blue)">
                {{ candidate.name.blue + candidate.name.green + candidate.name.other }}
            </button>
            <div>{{ candidate.responseData[index] }}</div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            candidates: [
                {
                    index: "1",
                    name: {
                        blue: "許淑華",
                        green: "徐巧芯",
                        other: "",
                    },
                    responseData: '', // 為每個 tab 保留回應數據
                },
                {
                    index: "2",
                    name: {
                        blue: "高嘉瑜",
                        green: "李彥秀",
                        other: "吳欣岱",
                    },
                    responseData: '',
                },
                {
                    index: "3",
                    name: {
                        blue: "李彥秀",
                        green: "李彥秀",
                        other: "吳欣岱",
                    },
                    responseData: '',
                },
            ],
        };
    },
    methods: {
        fetchData(tabKey) {
            // 根據選中的 tabKey 動態生成 API URL
            const apiUrl = `https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${tabKey}`;

            // 使用 axios 發送請求，並將回應數據存儲在相應的 candidate.responseData 中
            axios.get(apiUrl)
                .then(response => {
                    // 在這里處理 API 回應數據
                    const candidate = this.candidates.find(c => c.name.blue === tabKey);
                    if (candidate) {
                        candidate.responseData = response.data.ITEM;
                    }
                })
                .catch(error => {
                    // 處理錯誤
                    console.error(error);
                });
        },
    },
    mounted() {
        // 在這里可以預設選中的 tab 並加載相關數據
        const defaultTabKey = '許淑華'; // 這里可以設置默認選中的 tab
        this.fetchData(defaultTabKey);
    },
};
</script>
  
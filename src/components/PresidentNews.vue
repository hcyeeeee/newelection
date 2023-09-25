<template>
    <div class="president-relatednews layout">
        <h2 class="title"><i class="fa-solid fa-message"></i>&nbsp;總統大選焦點新聞</h2>
        <div class="out">
            <div v-for="(item, index) in news" :key="index">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
                    target="_blank">
                    <img :src="item.Image" class="img" alt="新聞照片">

                    <p class="title">
                        {{ item.Title.replace("快新聞／", "") }}
                    </p>
                    <div class="time">{{ item.CreateDate }}</div>

                </a>
            </div>
            <div class="more">
                <a href="https://www.ftvnews.com.tw/tag/政治">看更多相關新聞></a>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: [],
            activeTab: 'main',
            selectedCandidateIndex: null,
        };
    }, methods: {

    },
    mounted() {
        axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=6")
            .then((response) => {
                this.news = response.data.ITEM; // 将获取的新闻数据赋值给Vue实例的news属性
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

</script>

<style lang="scss"></style>
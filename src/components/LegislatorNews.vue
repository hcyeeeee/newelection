<template>
    <div class="president-relatednews layout">
        <h2><i class="fa-solid fa-message"></i> 立委選戰焦點新聞</h2>
        <div class="out">
            <div v-for="(item, index) in news" :key="index">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
                    target="_blank">
                    <img :src="item.Image" class="img" alt="新聞照片">
                    <div class="inner">
                        <p class="title">
                            {{ item.Title.replace("快新聞／", "") }}
                        </p>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>
        <a class="more" href="https://www.ftvnews.com.tw/tag/立委選戰">看更多相關新聞></a>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    computed: {

    },
    data() {
        return {
            news: [],

        };
    }, methods: {

    },
    mounted() {
        axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=立委選戰&Page=1&sp=6")
            .then((response) => {
                this.news = response.data.ITEM
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

</script>

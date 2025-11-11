<template>
    <div class="layout">
        <div class="icontitle">
            <img loading="lazy" srcset="../assets/News.png" alt="">
            <h2>立委選戰焦點新聞</h2>
        </div>
        <div class="out legis_out">
            <div v-for="(item, index) in news" :key="index">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=Legislator'"
                    target="_blank">
                    <img loading="lazy" :srcset="item.Image" class="img" :alt="item.Title">
                    <div class="inner">
                        <h3 class="title">
                            {{ item.Title.replace("快新聞／", "") }}
                        </h3>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/立委選戰">看更多相關新聞<i class="fa-solid fa-angles-right"></i></a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            news: [],

        };
    }, methods: {
        fetchNews() {
            var myHeaders = new Headers();
            myHeaders.append("TokenKey", "z1x2c3v4b5n6m78i9o0pftv8859");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=立委選戰", requestOptions)
                .then(response => response.json())  // Assuming the response is in JSON format
                .then(result => {
                    console.log(result);  // Optional: log the result
                    this.news = result.ITEM;   // Set the data
                })
                .catch(error => console.log('error', error));
        },
    },
    mounted() {
        this.fetchNews();
    }
}
</script>
<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

.legis_out {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    @include pad {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
}
</style>


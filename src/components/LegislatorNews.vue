<template>
    <div class="layout">
        <h2><i class="fa-solid fa-message"></i> 立委選戰焦點新聞</h2>
        <div class="out legis_out">
            <div v-for="(item, index) in news" :key="index" data-aos="fade-up">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=Legislator'"
                    target="_blank">
                    <img loading="lazy" :src="item.Image" class="img" :alt="item.Title">
                    <div class="inner">
                        <p class="title">
                            {{ item.Title.replace("快新聞／", "") }}
                        </p>
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
    computed: {

    },
    data() {
        return {
            news: [],

        };
    }, methods: {
        fetchNews() {
            let apiUrl = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=立委選戰&Page=1&sp=6";
            axios.get(apiUrl)
                .then((response) => {
                    this.news = response.data.ITEM;
                })
                .catch((error) => {
                    console.log(error);
                });
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


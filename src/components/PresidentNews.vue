<template>
    <div class="president-relatednews layout">
        <div class="icontitle">
            <img loading="lazy" srcset="../assets/HomePresi.png" alt="">
            <h2>總統大選焦點新聞</h2>
        </div>
        <div class="out">
            <div v-for="(item, index) in news" :key="index" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <a class="link"
                    :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=president'"
                    target="_blank">
                    <img loading="lazy" :srcset="item.Image" class="img" :alt="item.Title">
                    <div class="inner">
                        <h3 class="title">
                            {{ item.Title }}
                        </h3>
                        <div class="time">{{ item.CreateDate }}</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="more">
            <a href="https://www.ftvnews.com.tw/tag/總統大選">看更多相關新聞
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            news: [],
            activeTab: 'main',
            selectedCandidateIndex: null,
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

            fetch("https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=6&Cate=總統大選", requestOptions)
                .then(response => response.json())  // Assuming the response is in JSON format
                .then(result => {
                    console.log(result);  // Optional: log the result
                    this.news = result.ITEM;   // Set the data
                })
                .catch(error => console.log('error', error));
        },
    },
    mounted() {
        this.fetchNews()
    },
}

</script>

<style lang="scss"></style>
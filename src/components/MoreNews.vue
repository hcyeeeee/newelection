<template>
    <div class="all_news">
        <div class="info_layout" id="presidentnews">
            <h2 class="info_layout_title">最新總統大選新聞
            </h2>
            <div class="hot_news2">
                <div v-for="(item, index) in news" :key="index">
                    <a class="hot_news_out"
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                        target="_blank">
                        <img :src="item.Image" class="cand_news_img" alt="新聞照片">
                        <div>
                            <p class="hot_news_title">
                                <i class="fa-duotone fa-play"></i>&nbsp;&nbsp;{{ item.Title.replace("快新聞／", "") }}
                            </p>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
        <div class="info_layout" id="legislatornews">
            <h2 class="info_layout_title">最新立委選戰消息</h2>
            <div class="hot_news2">
                <div v-for="(item, index) in news2" :key="index">
                    <a class="hot_news_out"
                        :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
                        target="_blank">
                        <img :src="item.Image" class="cand_news_img" alt="新聞照片">
                        <div>
                            <p class="hot_news_title">
                                <i class="fa-duotone fa-play"></i>&nbsp;&nbsp;{{ item.Title.replace("快新聞／", "") }}
                            </p>
                            <div class="time">{{ item.CreateDate }}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            news: [], news2: [],
        }
    },
    methods: {
        get_hotnews() {
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=6")
                .then((response) => {
                    this.news = response.data.ITEM
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
        get_hotnews2() {
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=立委選戰&Page=1&sp=6")
                .then((response) => {
                    this.news2 = response.data.ITEM
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
    },
    mounted() {
        this.get_hotnews();
        this.get_hotnews2();
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
      !function(e, i, n, s) {
        var t = "InfogramEmbeds",
            d = e.getElementsByTagName("script")[0];
        if (window[t] && window[t].initialized)
          window[t].process && window[t].process();
        else if (!e.getElementById(n)) {
          var o = e.createElement("script");
          o.async = 1, o.id = n,
          o.src = "https://e.infogram.com/js/dist/embed-loader-min.js",
          d.parentNode.insertBefore(o, d);
        }
      }(document, 0, "infogram-async");
    `;
        document.head.appendChild(script);
    }
}

</script>


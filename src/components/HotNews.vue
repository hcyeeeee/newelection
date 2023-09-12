<template>
    <div>
        <div class="info_layout" id="infogram">
            <h2 class="info_layout_title">立委名單一次看</h2>
            <div class="infogram-embed" data-id="6f7d2b4c-1d4e-489c-b939-286c77b5ee10" data-type="interactive"
                data-title="立委初選（8/7更新）"></div>
        </div>
        <div class="info_layout" id="news">
            <h2 class="info_layout_title">最新政治新聞
            </h2>
            <div class="hot_news">
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
        <div class="two">
            <div class="info_layout " id="video">
                <h2 class="info_layout_title">新聞放大鏡
                </h2>
                <div class="videobox">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/videoseries?si=SeHL-bQkI0gOf6kJ&amp;list=PLkP0kGDs5OtfXdfmpvkcGbR65NmjqLk70"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="info_layout " id="video">
                <h2 class="info_layout_title">2024立委選戰巡禮
                </h2>
                <div class="videobox">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/videoseries?si=M-j0xhz6p6kMygPC&amp;list=PLkP0kGDs5OtdSRxmjhD36zCp28lSWO_v4"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
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
            news: [],
        }
    },
    methods: {
        get_hotnews() {
            // eslint-disable-next-line no-undef
            this.axios
                .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=8")
                .then((response) => {
                    this.news = response.data.ITEM
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
    },
    mounted() {
        this.get_hotnews();
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


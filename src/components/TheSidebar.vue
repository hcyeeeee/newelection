<template>
    <div>
        <div class="navbar ">
            <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/">
                <img loading="lazy" srcset="../assets/fight.png" alt="">
                <div>開票結果</div>
            </a>
            <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/president">
                <img loading="lazy" srcset="../assets/homepresi.png" alt="">
                <div> 總統大選</div>
            </a>
            <router-link class="icontitle" to="/Legislator">
                <img loading="lazy" srcset="../assets/homelegis.png" alt="">
                <div>立委選戰</div>
            </router-link>
            <router-link class="icontitle" to="/policy">
                <img loading="lazy" srcset="../assets/policy.png" alt="">
                <div> 政策牛肉</div>
            </router-link>
            <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/infographics">
                <img loading="lazy" srcset="../assets/map.png" alt="">
                <div>歷年版圖</div>
            </a>
            <router-link class="icontitle" to="/Question">
                <img loading="lazy" srcset="../assets/qa.png" alt="">
                <div>選舉Q&A</div>
            </router-link>
            <router-link class="icontitle" to="/videos">
                <img loading="lazy" srcset="../assets/video.png" alt="">
                <div>影音專區</div>
            </router-link>
            <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/game">
                <img loading="lazy" srcset="../assets/game1.png" alt="">
                <div>測驗遊戲</div>
            </a>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            showButton: false,
            navigatorSupport: navigator.share ? true : false,
        };
    },
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=2024election&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功，立刻分享給你的好友吧，一起來看開票吧!')
        },
        webShareAPI(header, description, link) {
            navigator
                .share({
                    title: header,
                    text: description,
                    url: link,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        },
        shareContent() {
            this.webShareAPI("2024總統大選、立委開票結果專區｜民視新聞網", "", "https://lihi2.com/9uaUy");
        },
    }, mounted() {
        if (this.navigatorSupport) {
            this.showButton = true;
        } else {
            console.error("Your Browser doesn't support Web Share API");
        }
    },
}
</script>

<style lang="scss" scoped>
@mixin pad {
    @media (min-width: 768px) {
        @content;
    }
}

div {
    color: rgb(32, 32, 32);
    font-size: 1.2rem;
    letter-spacing: 0;
    width: fit-content;

    @include pad {
        &:hover {
            color: #f08308;
        }

    }

}


div {
    font-size: 1.2rem;
    color: rgb(32, 32, 32);
    font-weight: 400;
    letter-spacing: .1rem;
}

@keyframes taadaa {
    0% {
        opacity: 0.7;
    }

    30% {
        opacity: 1;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 0.7;
    }
}

.game {
    width: 90px;
    height: 50px;
    position: fixed;
    z-index: 999;
    bottom: 4rem;
    margin: auto;


    img {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @include pad {
        width: 145px;
        height: fit-content;
        bottom: 5rem;

    }

}

.navbar {
    @include pad {
        display: flex;
        position: sticky;
        top: 4rem;
    }
}
</style>
<script setup>

import { ref, onMounted } from 'vue'
const showButton = ref(false);
const navigatorSupport = ref(!!navigator.share)
import fightImg from "@/assets/fight.png"
import presiImg from "@/assets/homepresi.png"
import legisImg from "@/assets/homelegis.png"
import policyImg from "@/assets/policy.png"
import mapImg from "@/assets/map.png"
import qaImg from "@/assets/qa.png"
import videoImg from "@/assets/video.png"
import gameImg from "@/assets/game1.png"

const links = [
    { name: "開票結果", href: "https://www.ftvnews.com.tw/topics/2024election/", icon: fightImg },
    { name: "總統大選", href: "https://www.ftvnews.com.tw/topics/2024election/president", icon: presiImg },
    { name: "立委選戰", to: "/Legislator", icon: legisImg },
    { name: "政策牛肉", to: "/policy", icon: policyImg },
    { name: "歷年版圖", href: "https://www.ftvnews.com.tw/topics/2024election/infographics", icon: mapImg },
    { name: "選舉Q&A", to: "/Question", icon: qaImg },
    { name: "影音專區", to: "/videos", icon: videoImg },
    { name: "測驗遊戲", href: "https://www.ftvnews.com.tw/topics/2024election/game", icon: gameImg },
]
function getLocalUrl() {
    let e = document.createElement('input'),
        t = window.location.href + '?utm_source=2024election&utm_medium=copybutton'
    document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand('copy'),
        document.body.removeChild(e),
        alert('網址複製成功，立刻分享給你的好友吧，一起來看開票吧!')
}

function webShareAPI(header, description, link) {
    navigator
        .share({
            title: header,
            text: description,
            url: link,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
}


function shareContent() {
    webShareAPI(
        "2024總統大選、立委開票結果專區｜民視新聞網",
        "",
        "https://lihi2.com/9uaUy"
    )
}

onMounted(() => {
    if (navigatorSupport.value) {
        showButton.value = true
    } else {
        console.error("Your Browser doesn't support Web Share API")
    }
})
</script>
<template>
    <nav class="navbar">
        <template v-for="link in links" :key="link.name">
            <router-link v-if="link.to" class="icontitle" :to="link.to">
                <img :src="link.icon" :alt="link.name" />
                <div>{{ link.name }}</div>
            </router-link>

            <a v-else class="icontitle" :href="link.href" target="_blank">
                <img :src="link.icon" :alt="link.name" />
                <div>{{ link.name }}</div>
            </a>
        </template>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 10;

    @include pad {
        gap: 1.5rem;
        top: 4rem;
    }

    .icontitle {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #202020;
        font-size: 1.1rem;
        font-weight: 400;
        letter-spacing: 0.05rem;
        transition: all 0.3s ease;

        img {
            transition: transform 0.3s ease, filter 0.3s ease;
        }

        &:hover {
            color: #f08308;

            img {
                transform: scale(1.1);
                filter: brightness(1.1);
            }
        }
    }
}


.game {
    position: fixed;
    bottom: 4rem;
    width: 90px;
    height: 50px;
    z-index: 999;

    img {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        animation: iconframes 3s infinite;
    }

    @include pad {
        width: 145px;
        bottom: 5rem;
    }
}


@keyframes iconframes {

    0%,
    100% {
        opacity: 0.7;
    }

    30%,
    60% {
        opacity: 1;
    }
}
</style>
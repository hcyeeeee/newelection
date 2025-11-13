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
    { name: "開票結果", to: "/", icon: fightImg },
    { name: "總統大選", to: "/president", icon: presiImg },
    { name: "立委選戰", to: "/Legislator", icon: legisImg },
    { name: "政策牛肉", to: "/policy", icon: policyImg },
    { name: "歷年版圖", to: "/infographics", icon: mapImg },
    { name: "選舉Q&A", to: "/Question", icon: qaImg },
    { name: "影音專區", to: "/videos", icon: videoImg },
    { name: "測驗遊戲", to: "/game", icon: gameImg },
]

onMounted(() => {
    if (navigatorSupport.value) {
        showButton.value = true
    } else {
        console.error("Your Browser doesn't support Web Share API")
    }
})
</script>

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
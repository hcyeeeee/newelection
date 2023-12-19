<template>
    <div>
        <div class="navbar ">
            <router-link to="/" class="icontitle">
                <img src="../assets/fight.png" alt="">
                <div> 專區首頁</div>
            </router-link>
            <router-link class="icontitle" to="/president">
                <img src="../assets/homepresi.png" alt="">
                <div> 總統大選</div>
            </router-link>
            <router-link class="icontitle" to="/Legislator">
                <img src="../assets/homelegis.png" alt="">
                <div>立委選戰</div>
            </router-link>
            <router-link class="icontitle" to="/policy">
                <img src="../assets/policy.png" alt="">
                <div> 政策牛肉</div>
            </router-link>
            <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/infographics">
                <img src="../assets/map.png" alt="">
                <div>歷年版圖</div>
            </a>
            <router-link class="icontitle" to="/Question">
                <img src="../assets/qa.png" alt="">
                <div>選舉Q&A</div>
            </router-link>
            <router-link class="icontitle" to="/videos">
                <img src="../assets/video.png" alt="">
                <div>影音專區</div>
            </router-link>

        </div>
        <a class="icontitle"
            href="https://www.ftvnews.com.tw/topics/2024election/game?utm_source=2024election&utm_medium=gamebtn">
            <img src="../assets/game.png" alt="game" id="game" class="game">
        </a>
    </div>
</template>
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

    &:hover {
        color: #f08308;
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

#game {
    width: 100px;
    height: 60px;
    position: fixed;
    animation: taadaa 2s infinite;
    z-index: 999;
    bottom: 4rem;
    margin: auto;

    @include pad {
        width: 158px;
        height: fit-content;
        bottom: 5rem;
    }

}
</style>
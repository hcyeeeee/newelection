<template>
    <div class="navbar ">
        <router-link to="/" class="icontitle">
            <img src="../assets/fight.png" alt="">
            <h2> 決戰2024</h2>
        </router-link>
        <router-link class="icontitle" to="/president">
            <img src="../assets/homepresi.png" alt="">
            <h2> 總統大選</h2>
        </router-link>
        <router-link class="icontitle" to="/Legislator">
            <img src="../assets/homelegis.png" alt="">
            <h2>立委選戰</h2>
        </router-link>
        <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/Policy">
            <img src="../assets/policy.png" alt="">
            <h2> 政策牛肉</h2>
        </a>
        <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/infographics">
            <img src="../assets/map.png" alt="">
            <h2>歷年版圖</h2>
        </a>
        <router-link class="icontitle" to="/Question">
            <img src="../assets/qa.png" alt="">
            <h2>選舉Q&A</h2>
        </router-link>
        <router-link class="icontitle" to="/videos">
            <img src="../assets/video.png" alt="">
            <h2>影音專區</h2>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
h2 {
    color: rgb(32, 32, 32);
    font-size: 1.2rem;
    letter-spacing: 0;

    &:hover {
        color: #f08308;
    }
}
</style>
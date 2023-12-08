<template>
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
        <a class="icontitle" href="https://www.ftvnews.com.tw/topics/2024election/infographics" >
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
</template>
<style lang="scss" scoped>
div {
    color: rgb(32, 32, 32);
    font-size: 1.2rem;
    letter-spacing: 0;

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
</style>
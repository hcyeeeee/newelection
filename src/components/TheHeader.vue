<template>
  <div class="header">
    <div class="header_inner">
      <a href="https://www.ftvnews.com.tw/" target="_blank">
        <img loading="lazy" srcset="../assets/民視新聞網.png" class="logo" alt="民視新聞網" title="民視新聞網">
      </a>
      <div class="nav pc">
      </div>
      <div class="share ">
        <a title="Share on Facebook" target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2024election%2Findex.html&amp%3Bsrc=sdkpreparse">
          <img loading="lazy" srcset="../assets/facebook.png" alt="分享民視新聞專題">
        </a>
        <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2024election"
          target="_blank">
          <img loading="lazy" srcset="../assets/line.png" alt="lineshare">
        </a>
        <div class="localurl-style" id="social_link" @click="getLocalUrl">
          <img loading="lazy" srcset="../assets/share.png" alt="social_link">
        </div>
      </div>
    </div>
    <div>
      <div class="empty" @click="closeMenu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }"></div>
      <div class="mobile_nav">
        <h3 class="bars" @click="toggleMobileMenu">
          <font-awesome-icon :icon="fa - solid + (isMobileMenuVisible ? ' fa-xmark' : ' fa-bars')" />
        </h3>
      </div>
      <div class="mobile_menu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }">
        <router-link to="/" @click="closeMenu">
          <img srcset="../assets/fight2024.png" alt="fight2024">
        </router-link>
        <a href="https://www.ftvnews.com.tw/topics/2024election/" @click="closeMenu">開票結果</a>
        <a href="https://www.ftvnews.com.tw/topics/2024election/president" @click="closeMenu">總統大選</a>
        <router-link to="/Legislator" @click="closeMenu">立委選戰</router-link>
        <router-link to="/policy" @click="closeMenu"> 政策牛肉 </router-link>
        <a href=" https://www.ftvnews.com.tw/topics/2024election/infographics" @click="closeMenu">歷年版圖</a>
        <router-link to="/question" @click="closeMenu">選舉Q&A</router-link>
        <router-link to="/videos" @click="closeMenu">影音專區</router-link>
        <router-link to="/game" @click="closeMenu">
          <div>測驗遊戲</div>
        </router-link>
        <div class="mobile_share">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2024election%2F&amp;src=sdkpreparse">
            <img srcset="../assets/facebook.png" alt="fb" target="_blank">
            Facebook
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2024election"
            target="_blank">
            <img src="../assets/line.png" alt="line">
            Line
          </a>
          <a target="_blank" @click="shareContent" id="btn">
            <img loading="lazy" src="../assets/share.png" alt="link" class="game">
            分享給好友
          </a>

        </div>
      </div>
    </div>
    <div class="bottom bottom_inner">
      <div>
        <a href=" https://www.ftvnews.com.tw/topics/2024election/" @click="closeMenu">開票結果</a>
        <p>|</p>
        <a href="https://www.ftvnews.com.tw/topics/2024election/president" @click="closeMenu">總統大選</a>
        <p>|</p>
        <router-link to="/Legislator">立委選戰</router-link>
        <p>|</p>
        <a @click="toggleMobileMenu">
          更多資訊
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMobileMenuVisible = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};


const closeMenu = () => {
  isMobileMenuVisible.value = false;
};


const getLocalUrl = () => {
  const input = document.createElement("input");
  const url = window.location.href + "?utm_source=2024election&utm_medium=copybutton";

  document.body.appendChild(input);
  input.value = url;
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  alert("網址複製成功，立刻分享給你的好友吧！");
};

const webShareAPI = (header, description, link) => {
  navigator
    .share({ title: header, text: description, url: link })
    .then(() => console.log("Successful share"))
    .catch((error) => console.error("Error sharing:", error));
};

const shareContent = () => {
  webShareAPI(
    "2024總統大選、立委開票結果｜民視新聞網",
    "",
    "https://lihi2.com/9uaUy"
  );
};

onMounted(() => {
  if (!navigator.share) {
    console.error("Your Browser doesn't support Web Share API");
  }
});
</script>



<style lang="scss">
/* 描述下拉選單容器 */
</style>
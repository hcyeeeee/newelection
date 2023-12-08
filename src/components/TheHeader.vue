<template>
  <div class="header">
    <div class="header_inner">
      <a href="https://www.ftvnews.com.tw/" target="_blank">
        <img loading="lazy" src="../assets/民視新聞網.png" class="logo" alt="民視新聞網" title="民視新聞網">
      </a>
      <div class="nav pc">
      </div>
      <div class="share ">
        <a title="Share on Facebook" target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2024election%2Findex.html&amp%3Bsrc=sdkpreparse">
          <img loading="lazy" src="../assets/facebook.png" alt="分享民視新聞專題">
        </a>
        <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2024election"
          target="_blank">
          <img loading="lazy" src="../assets/line.png" alt="lineshare">
        </a>
        <div class="localurl-style" id="social_link" @click="getLocalUrl">
          <img loading="lazy" src="../assets/share.png" alt="social_link">
        </div>
      </div>
    </div>
    <div>
      <div class="empty" @click="closeMenu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }"></div>
      <div class="mobile_nav">
        <h3 class="bars" @click="toggleMobileMenu">
          <i :class="'fa-solid' + (isMobileMenuVisible ? ' fa-xmark' : ' fa-bars')"></i>
        </h3>
      </div>
      <div class="mobile_menu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }">
        <router-link to="/" @click="closeMenu">
          <img loading="lazy" src="../assets/fight2024.png" alt="fight2024">
        </router-link>
        <router-link to="/" @click="closeMenu">回首頁</router-link>
        <router-link to="/president" @click="closeMenu">總統大選</router-link>
        <router-link to="/Legislator" @click="closeMenu">立委選戰</router-link>
        <router-link to="/policy" @click="closeMenu"> 政策牛肉 </router-link>
        <a href=" https://www.ftvnews.com.tw/topics/2024election/infographics" @click="closeMenu">歷年版圖</a>
        <router-link to="/question" @click="closeMenu">選舉Q&A</router-link>
        <router-link to="/videos" @click="closeMenu">影音專區</router-link>
        <div class="mobile_share">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2023taiwantemple%2F&amp;src=sdkpreparse">
            <img loading="lazy" src="../assets/facebook.png" alt="fb" target="_blank">
            Facebook
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2023taiwantemple"
            target="_blank">
            <img loading="lazy" src="../assets/line.png" alt="line">
            官方Line
          </a>
          <a target="_blank" @click="getLocalUrl">
            <img loading="lazy" src="../assets/share.png" alt="link">
            複製連結
          </a>
        </div>
      </div>
    </div>
    <div class="bottom bottom_inner">
      <div>
        <router-link to="/">回首頁</router-link>
        <p>|</p>
        <router-link to="/president">總統大選</router-link>
        <p>|</p>
        <router-link to="/Legislator">立委選戰</router-link>
        <p>|</p>
        <div class="dropdown">
          <router-link class="dropdown-btn" to="/Legislator">更多資訊 </router-link>
          <ul class="menu">
            <li>
              <router-link to="/Videos">影音專區</router-link>
            </li>
            <li>
              <router-link to="/Question">選舉Q&A</router-link>
            </li>
            <li>
              <a href="https://www.ftvnews.com.tw/topics/2024election/infographics">歷年版圖</a>
            </li>
            <li>
              <router-link to="/policy"> 政策牛肉 </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: '',
      countdown: "",
      isMobileMenuVisible: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
    closeMenu() {
      if (this.isMobileMenuVisible) {
        this.isMobileMenuVisible = false;
      }
    },
    getLocalUrl() {
      let e = document.createElement('input'),
        t = window.location.href + '?utm_source=2024election&utm_medium=copybutton'
      document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand('copy'),
        document.body.removeChild(e),
        alert('網址複製成功，立刻分享給你的好友吧!')
    },
  }
}
</script>



<style lang="scss">
/* 描述下拉選單容器 */
</style>
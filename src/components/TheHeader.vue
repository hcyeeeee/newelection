<template>
  <div class="header">
    <div class="header_inner">
      <a href="https://www.ftvnews.com.tw/" target="_blank">
        <img src="../assets/民視新聞網.png" class="logo" alt="民視新聞網">
      </a>
      <div class="nav pc">
      </div>
      <div class="share ">
        <a title="Share on Facebook" target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2024election%2Findex.html&amp%3Bsrc=sdkpreparse">
          <img src="../assets/facebook.png" alt="分享民視新聞專題">
        </a>
        <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2024election"
          target="_blank">
          <img src="../assets/line.png" alt="lineshare">
        </a>
        <div class="localurl-style" id="social_link" @click="getLocalUrl">
          <img src="../assets/share.png" alt="social_link">
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
      <div class="mobile_menu" :style="{ display: isMobileMenuVisible ? 'flex' : 'none' }" alt="">

        <img src="../assets/fight2024.png" alt="fight2024">
        <router-link to="/" @click="closeMenu">回首頁</router-link>
        <router-link to="/about" @click="closeMenu">總統大選</router-link>
        <router-link to="/Legister" @click="closeMenu">立委選戰</router-link>
        <div class="mobile_share">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2F2023taiwantemple%2F&amp;src=sdkpreparse">
            <img src="../assets/facebook.png" alt="fb" target="_blank">
            Facebook
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/2023taiwantemple"
            target="_blank">
            <img src="../assets/line.png" alt="line">
            官方Line
          </a>
          <a target="_blank" @click="getLocalUrl">
            <img src="../assets/share.png" alt="link">
            複製連結
          </a>
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
    startCountdown() {
      const targetDate = new Date("2024-1-14").getTime();

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
          clearInterval(countdownInterval);
          this.countdown = "1/13 到了！";
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          // const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          // this.countdown = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
          this.countdown = `${days} 天`;
        }
      }, 1000);
    }
  }, mounted() {
    this.startCountdown();
  },
}
</script>



<style lang="scss"></style>
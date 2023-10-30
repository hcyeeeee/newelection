<template>
  <div class="bottom">
    <div>
      <router-link to="/">回首頁</router-link>
      <p>|</p>
      <router-link to="/president">總統大選</router-link>
      <p>|</p>
      <router-link to="/Legislator">立委選戰</router-link>

      <!-- <a href="https://www.ftvnews.com.tw/topics/2024election/policy">政策牛肉</a> -->
      <!-- <span class="dropdown">
        <button @click="toggleDropdown">更多資訊</button>
        <div v-show="isDropdownOpen" class="dropdown-content">
          <router-link to="/policy">政策牛肉</router-link>
          <router-link to="/infographics">歷年版圖</router-link>
        </div>
      </span> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>


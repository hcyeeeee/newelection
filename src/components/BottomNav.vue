<template>
  <div class="bottom">
    <div>
      <router-link to="/">回首頁</router-link>
      <p>|</p>
      <router-link to="/president">總統大選</router-link>
      <p>|</p>
      <router-link to="/Legislator">立委選戰</router-link>
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


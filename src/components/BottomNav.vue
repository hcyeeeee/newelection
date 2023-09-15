<template>
  <div class="bottom">
    <div>
      <router-link to="/">決戰2024</router-link>
      <router-link to="/">|</router-link>
      <router-link to="/about">總統大選</router-link>
      <router-link to="/">|</router-link>
      <router-link to="/Legister">立委選戰</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.bottom {
  position: fixed;
  bottom: 0px;
  background: rgba(240, 131, 8, 0.85);
  backdrop-filter: blur(2.5px);
  z-index: 9999;
  margin: auto;
  max-width: 768px;

  div {
    padding: 1rem;

    a {
      color: #FFF;
      font-family: Noto Sans TC;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: auto;
      padding: 1rem;
    }
  }

}
</style>
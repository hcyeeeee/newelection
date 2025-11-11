
<template >
  <TheHeader />
  <div class="all">
    <TheSidebar />
    <router-view>

    </router-view>
    <TheCalender />
  </div>
  <ScrollUp />
  <div class="footer">Copyright © 2023 民視新聞網路部 社群中心</div>
</template>
<script >
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheCalender from './components/TheCalender.vue'
import TheSidebar from './components/TheSidebar.vue'
import ScrollUp from './components/ScrollUp.vue'
export default {
  components: {
    TheHeader,
    TheCalender,
    TheSidebar,
    ScrollUp
  },
  created() {
    AOS.init();
  },
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
SectionHeader,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
SectionHeader,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 150%;
  font-family: "Noto Sans TC", sans-serif, 思源黑體, 微軟正黑體, 蘋方體, 黑體,
    sans-serif, serif;
  scroll-behavior: smooth;
  color: rgb(35, 35, 35);
  font-display: swap;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}



a {
  text-decoration: none;
  cursor: pointer;
}

* {
  scroll-behavior: smooth;
}



h2 {
  font-size: 1.3rem;
  color: #f08308;
  margin: 0.5rem 0;
  font-weight: 400;
  letter-spacing: .1rem;
}



.lv-progressbar__value {
  background: linear-gradient(90deg, #f8cf7b 0.35%, #ff8400 30.16%);
  border-radius: 2rem;
  width: 100%;
  animation: rotationAnimation 5s linear infinite, colorAnimation 1.5s ease-in-out infinite;
}

@keyframes colorAnimation {
  0% {
    background: linear-gradient(70deg, #f8cf7b 0.35%, #f8ca6e 30.16%);
  }

  50% {
    background: linear-gradient(100deg, #ffe1a4 0.35%, #ffeecd 31.16%);
    background: linear-gradient(70deg, #f8cf7b 0.35%, #f8ca6e 30.16%);
  }

  100% {
    background: linear-gradient(70deg, #f8cf7b 0.35%, #f8ca6e 30.16%);
  }
}




.lv-progressbar__value {
  animation: progress 3s linear infinite;
  /* Don't touch this anim bar color*/
  background: linear-gradient(-45deg,
      #FFCA91 25%,
      #fc9c36 25%,
      #fc9c36 50%,
      #FFCA91 50%,
      #FFCA91 75%,
      #fc9c36 75%,
      #fc9c36);
  /* Don't touch this */
  background-repeat: repeat-x;
  /* The size of the bars must match the background-position in the @keyframes */
  background-size: 2em 2em;
  border-radius: 10px;
  height: inherit;
  width: 100%;
}

@keyframes progress {
  to {
    background-position: 1.5em 0;
  }
}




.lv-progressbar {
  border: 0 none;
  height: 1.5rem !important;
  background: #F3EEE8 !important;
  border-radius: 3px;
  border-radius: 2rem !important;
}

@media screen and (max-width: 500px) {
  .lv-progressbar {
    height: 1rem !important;
  }
}
</style>





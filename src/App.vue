
<template >
  <TheHeader />
  <div class="all">
    <TheSidebar />
    <router-view></router-view>
    <TheCalender />
  </div>
</template>
<script >
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheCalender from './components/TheCalender.vue'
import TheSidebar from './components/TheSidebar.vue'

export default {
  components: {
    TheHeader,
    TheCalender,
    TheSidebar,

  }
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
  line-height: 1;

  font-family: "Noto Sans TC", sans-serif, 思源黑體, 微軟正黑體, 蘋方體, 黑體,
    sans-serif, serif;
  scroll-behavior: smooth;

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

p {
  font-size: 1.4rem;
  line-height: 1.2
}

a {
  text-decoration: none;
}

* {
  scroll-behavior: smooth;
}

.all {
  display: flex;
  max-width: 1400px;
  margin: auto;
}
</style>





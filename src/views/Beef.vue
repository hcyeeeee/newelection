<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />

    <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </div>
      <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
        <div class="card-body">
          <div class="infogram-embed" data-id="8a53b893-70f0-4915-87e5-2467a83a8a02" data-type="interactive"
            data-title="2024大選-生育政策"></div>

          <div
            style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
            <a href="https://infogram.com/8a53b893-70f0-4915-87e5-2467a83a8a02"
              style="color:#989898!important;text-decoration:none!important;" target="_blank">2024大選-生育政策</a><br><a
              href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;" target="_blank"
              rel="nofollow">Infogram</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
          Collapsible Group Item #2
        </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">

          <div class="infogram-embed" data-id="11e230be-6d50-4957-8ca9-1b98c0267884" data-type="interactive"
            data-title="test"></div>

          <div
            style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px">
            <a href="https://infogram.com/11e230be-6d50-4957-8ca9-1b98c0267884"
              style="color:#989898!important;text-decoration:none!important;" target="_blank">test</a><br><a
              href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;" target="_blank"
              rel="nofollow">Infogram</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script >

import 'animate.css'
import TheBanner from '../components/TheBanner.vue'
import LegislatorTab from '../components/LegislatorTab.vue'
import LegislatorList from '../components/LegislatorList.vue'
import LegislatorNews from '../components/LegislatorNews.vue'
import TheMarquee from '../components/TheMarquee.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default {
  components: {
    TheMarquee,
    TheBanner,
    LegislatorNews,
    LegislatorTab,
    LegislatorList,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  created() {

    !function (e, n, i, s) { var d = "InfogramEmbeds"; var o = e.getElementsByTagName(n)[0]; if (window[d] && window[d].initialized) window[d].process && window[d].process(); else if (!e.getElementById(i)) { var r = e.createElement(n); r.async = 1, r.id = i, r.src = s, o.parentNode.insertBefore(r, o) } }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");

  },
}
</script>
<style></style>



<template>
  <div class="about">
    <TheMarquee />
    <TheBanner />
    <div class="layout">

      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
          aria-expanded="false" aria-controls="multiCollapseExample1">生育政策</a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2"
          aria-expanded="false" aria-controls="multiCollapseExample2">長照政策</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              <div class="infogram-embed" data-id="8a53b893-70f0-4915-87e5-2467a83a8a02" data-type="interactive"
                data-title="2024大選-長照政策"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              <div class="infogram-embed" data-id="64eaf169-8845-4648-925f-d4d0fa9d80bf" data-type="interactive"
                data-title="2024大選-生育政策0922"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import 'animate.css'
import TheBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default {
  components: {
    TheMarquee,
    TheBanner,
  },
  setup() {
    return {
      selectedPolicy: '',
    };
  },
  created() {
    !function (e, n, i, s) { var d = "InfogramEmbeds"; var o = e.getElementsByTagName(n)[0]; if (window[d] && window[d].initialized) window[d].process && window[d].process(); else if (!e.getElementById(i)) { var r = e.createElement(n); r.async = 1, r.id = i, r.src = s, o.parentNode.insertBefore(r, o) } }(document, "script", "infogram-async", "https://infogram.com/js/dist/embed-loader-min.js");
  },
}
</script>
<style></style>



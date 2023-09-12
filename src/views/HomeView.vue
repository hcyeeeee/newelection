<template>
  <div class="home">
    <TheMarquee />
    <sectionBanner />
    <HomeLegis />
    <HomePresi />
    <HomeVideo />
  </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import sectionBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    sectionBanner,
    TheMarquee,
    HomeLegis,
    HomePresi,
    HomeVideo,

  },
  data() {
    return {
      news: [],
      news2: [],
      news3: [], // 初始化news为空数组,
      modules: [Autoplay],
      countdown: "",
      isMobileMenuVisible: false,
    };
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
  },
  mounted() {

    axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=總統大選&Page=1&sp=6")
      .then((response) => {
        this.news = response.data.ITEM;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=立委選戰&Page=1&sp=6")
      .then((response) => {
        this.news2 = response.data.ITEM;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=8')
      .then((response) => {
        this.news3 = response.data.ITEM;
      })
      .catch((error) => {
        console.log(error);
      });
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function(e, i, n, s) {
        var t = "InfogramEmbeds",
            d = e.getElementsByTagName("script")[0];
        if (window[t] && window[t].initialized)
          window[t].process && window[t].process();
        else if (!e.getElementById(n)) {
          var o = e.createElement("script");
          o.async = 1, o.id = n,
          o.src = "https://e.infogram.com/js/dist/embed-loader-min.js",
          d.parentNode.insertBefore(o, d);
        }
      }(document, 0, "infogram-async");
    `;

    document.head.appendChild(script);
    const targetDate = new Date("2024/1/13").getTime();
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
        this.countdown = `${days + 1} `;

        let a = this.countdown.toString();
        this.countdown = a
        this.countdown2 = `${days + 1} `;
      }
    }, 1000);
  }
};

</script>

<style lang="scss" scoped>
@mixin phone {
  @media (min-width: 500px) {
    @content;
  }
}

@mixin pad {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin web {
  @media (min-width: 1000px) {
    @content;
  }
}

.s {
  position: relative;
  width: 100%;
  margin: auto;
}

.marquee_layout {
  width: 95%;
  margin: auto;
  display: flex;
  max-width: 1400px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;


  @include pad {
    width: 90%;
    margin: auto auto 1rem;

    background: #fff9ee;
  }

  // .mySwiper {
  //   display: none;

  //   @include pad {
  //     display: flex;
  //   }
  // }

  .mySwiper {
    background: #FFDA92;

    @include pad {

      border-radius: 0px;
    }
  }

}

p {
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.count {
  background: #fff9ee;
  border-radius: 0px 10px 10px 0px;
  padding: .5rem;
  margin: auto;
  font-weight: 500;
  display: block;
  align-items: center;

  @include phone {
    border-radius: 0px 1rem 1rem 0;
    display: block;
  }

  @include pad {
    gap: 1rem;
    width: 300px;
    border-radius: 0px 1rem 1rem 0;
    padding: .5rem;
    display: flex;
  }

  .sss {
    color: #FF7A00;
    font-weight: bold;
    font-size: 2rem;
    font-weight: 500;
    align-items: center;

    &::after {
      content: "天";
      font-size: .9rem;
      color: black;

      @include pad {
        display: none;
      }
    }
  }

  .www {
    font-size: .9rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 80px;
    border-radius: 1rem 0px 0px 1rem;

    @include pad {
      display: flex;
      width: 80px;
      font-size: 1.2rem;
    }
  }

  .wwww {
    font-size: .9rem;
    justify-content: center;
    flex-direction: row;
    display: none;

    @include pad {
      display: flex;
      font-size: 1.2rem;
      width: 20px;
    }
  }
}

.marquee {

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  overflow: hidden;
  border-radius: 0px 1rem 1rem 0px;

  @include pad {
    border-radius: 0px;
    font-size: 1.2rem;
    justify-content: start;
  }

  a {
    color: black;
    text-align: justify;
    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: .3rem;
    font-size: 1.1rem;
    font-weight: 400;

    @include phone {
      -webkit-line-clamp: 3;
      padding: .5rem 1rem;
      margin: 0rem;
      font-size: 1.2rem;
    }

    @include pad {
      padding: 1rem;
    }
  }


}

.marquee_title {
  background: #FF7A00;
  color: #FFF;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  border-radius: 1rem 0px 0px 1rem;
  font-size: 1rem;

  @include pad {
    padding: .5rem;
    width: 5rem;
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
  }

  p {
    padding: 0 .3rem;
    font-size: 1.1rem;
    font-weight: 400;
    align-items: center;
    height: 100%;

    @include pad {
      width: 50px;
      font-size: 1.2rem;
    }

    @include pad {
      width: 100px;
      font-size: 1.2rem;
    }

  }
}

.count2 {
  background: #fff9ee;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: .5rem auto;
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  @include phone {

    display: none;

  }

  .sss {
    color: #FF7A00;
    font-weight: bold;
    font-size: 2rem;

  }

  .www {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    border-radius: 1rem 0px 0px 1rem;


  }

  .wwww {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}
</style>
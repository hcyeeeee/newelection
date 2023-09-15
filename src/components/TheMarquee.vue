<template>
  <div>
    <div class="marquee_layout">
      <div class="marquee_title">
        <p>快訊</p>
      </div>
      <swiper :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :modules="modules" class="mySwiper">
        <swiper-slide class="marquee" v-for="item in news" :key="item.id">
          <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
            target="_blank" rel="noopener noreferrer">
            {{ item.Title.replace("快新聞／", "") }}</a>
        </swiper-slide>
      </swiper>

      <div class="count">
        <p class="www">選戰倒數 </p>
        <p class="sss"> {{ countdown }}</p>
        <p class="wwww">天</p>
      </div>
    </div>
  </div>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import axios from 'axios';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      countdown: "",
      countdown2: "",
      news: [],
    }
  },
  methods: {
    get_hotnews() {
      // eslint-disable-next-line no-undef
      axios
        .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=20")
        .then((response) => {
          this.news = response.data.ITEM;
          console.log("this", this.news)
        })
        .catch((error) => {
          console.log("error" + error);
        });
    },
    startCountdown() {
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
  }, mounted() {
    this.startCountdown();

    // eslint-disable-next-line no-undef
    axios
      .get("https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=20")
      .then((response) => {
        this.news = response.data.ITEM;
        console.log("this", this.news)
      })
      .catch((error) => {
        console.log("error" + error);
      });

  },
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
  align-items: center;
  height: 100%;
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
    align-items: center;
  }

  .sss {
    color: #FF7A00;
    font-weight: bold;
    font-size: 2rem;
    font-weight: 500;

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
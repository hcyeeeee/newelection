<template>
  <div>
    <div class="marquee_layout">
      <div class="marquee_title">
        <p>快訊</p>
      </div>
      <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="modules" class="mySwiper">
        <swiper-slide class="marquee" v-for="item in news" :key="item.id">
          <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID + '?utm_source=2024election&utm_medium=homepage'"
            target="_blank" rel="noopener noreferrer" :title=item.Title>
            {{ item.Title.replace("快新聞／", "") }}</a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

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
    fetchNews() {
      var myHeaders = new Headers();
      myHeaders.append("TokenKey", "z1x2c3v4b5n6m78i9o0pftv8859");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://ftvapi2.ftvnews.com.tw/API/FtvGetNewsWebV2.aspx?sp=10&Cate=政治", requestOptions)
        .then(response => response.json())  // Assuming the response is in JSON format
        .then(result => {
          console.log(result);  // Optional: log the result
          this.news = result.ITEM;   // Set the data
        })
        .catch(error => console.log('error', error));
    },
  }, mounted() {
    this.fetchNews();
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

.marquee_layout {
  width: 100%;
  margin: 1rem auto;
  display: none;
  max-width: 1400px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;


  @include pad {
    display: flex;
    width: 100%;
    margin: auto auto 1rem;
    background: #fff9ee;
  }

  .mySwiper {
    background: #FFDA92;
    border-radius: 0px 15px 15px 0;

    @include pad {
      border-radius: 0px 10px 10px 0;
    }
  }
}


.count {
  background: #fff9ee;
  border-radius: 0px 10px 10px 0px;
  padding: .7rem .2rem;
  margin: auto;
  font-weight: 500;
  display: block;

  @include phone {
    border-radius: 0px 1rem 1rem 0;
  }

  @include pad {
    display: none;
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

}

.marquee {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  overflow: hidden;

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
    height: 38px;
    overflow: hidden;
    margin: 0 .3rem;
    font-size: 1rem;

    @include phone {
      height: auto;
      padding: 0rem .8rem;
      margin: 0rem;
      font-size: 1.1rem;
    }

    @include pad {
      font-size: 1.2rem;
      padding: 0rem .8rem;
    }
  }


}

.marquee_title {
  color: #FFF;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  border-radius: 15px 0 0 15px;
  font-size: 1rem;
  background: linear-gradient(115deg, #f07708 30.73%, #ff9823 32.81%, #f04e08 100%);

  @include pad {
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



.count-num {
  color: #F08308;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 .1rem;
  width: 75px;

  @include pad {
    display: none;
  }
}

.count-num-zone {
  background: #fff9ee;
  border-radius: 0 20px 20px 0;

  @include pad {
    display: none;
  }
}

.count-title {
  width: auto;
}
</style>
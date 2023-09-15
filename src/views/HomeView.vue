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
import sectionBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'
import HomeLegis from '../components/HomeLegis.vue'
import HomePresi from '../components/HomePresi.vue'
import HomeVideo from '../components/HomeVideo.vue'

export default {
  components: {

    sectionBanner,
    TheMarquee,
    HomeLegis,
    HomePresi,
    HomeVideo,
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
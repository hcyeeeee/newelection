<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img src="../assets/policy.png" alt="">
        <h2>政策懶人包</h2>
      </div>
      <ul>
        <li v-for="(tab, index) in tabs1" :key="index" @click="activateTab(index)"
          :class="{ active: activeTab == index }">
          <p class="policytitle">
            {{ tab.label }}
          </p>
        </li>
      </ul>
      <br>
      <div class="tab-content">
        <div v-for="(tab, index) in tabs1" :key="index" v-show="activeTab === index">
          <a v-if="activeTab !== 1" :href="tab.link" :alt="tab.title" target="_blank" class="policynews"
            :title="tab.title">
            <img :src="tab.imglink" class="policyimg">
            <div>
              <h2 class="policynews-title"> {{ tab.newstitle }}</h2>
              <p class="policynews-text">
                {{ tab.newslead }}
              </p>
            </div>
          </a>
        </div>
      </div>

      <div v-for="(tab, index) in tabs1" :key="index" v-show="activeTab === index">
        <h2 style="margin:1rem; ">· {{ tab.title }}</h2>
        <div data-aos="fade-down" v-for="(item, itemIndex) in tab.list" :key="itemIndex" class="policylist">
          <img :src="'https://www.ftvnews.com.tw/topics/2024election/' + item.img + '.jpg'" alt="圖片">
          <div class="policyinner">
            <h3>{{ item.img }} : {{ item.subtitle }}</h3>
            <div class="mwt_border policycontent">
              <span class=" arrow_l_int"></span>
              <span class="arrow_l_out"></span>
              <p class="pre-formatted" :style="{ color: getColor(item.content) }">{{ item.content }}</p>
            </div>
            <p class="policytime"> {{ item.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { EffectCoverflow, Pagination } from "swiper/modules";
const modules = [EffectCoverflow, Pagination];
import TheBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'

import { tabs, tabs1 } from "@/data/policy.js";
import { useNewsStore } from "@/stores/news.js";
const store = useNewsStore();
const activeTab = ref(0);
const policy = ref([]);
const activateTab = (index) => {
  activeTab.value = index;
};

const getColor = (content) => {
  switch (content.trim()) {
    case "失能":
      return "red";
    case "結婚率":
      return "blue";
    case "者照顧":
      return "green";
    default:
      return "black";
  }
};

</script>

<style lang="scss" scoped>
.pre-formatted {
  white-space: pre-line;
}

.policyinner {
  display: flex;
  flex-direction: column;
}

ul {
  flex-direction: row;
  width: 90%;
  justify-content: center;
  gap: 10px;
  margin: auto;
  display: flex;
  cursor: pointer;
  white-space: nowrap;

  @include phone {
    gap: 1rem;
  }

  li {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid #d9d9d9;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid #ffa500;
      background: rgba(255, 122, 0, 0.20);
    }
  }
}


.active {
  border-bottom: 2px solid #ffa500;
  background: rgba(255, 122, 0, 0.20);
}

.policytitle {
  font-size: 1rem;
  margin: auto;
  color: rgb(18, 18, 18);

  @include phone {
    font-size: 1.2rem;
  }
}

.policylist {
  display: flex;
  gap: .5rem;
  padding: 1rem .5rem;

  @include phone {
    gap: 1rem;
    padding: 1rem;
  }

  &:nth-child(odd) {
    display: flex;
    flex-direction: row-reverse;
  }

  .policycontent {
    font-size: 1rem;
    line-height: 150%;
    display: flex;
    justify-content: start;
    align-items: start;
    text-align: justify;
    color: rgba(40, 40, 40, 0.826);

    @include phone {
      font-size: 1.05rem;
    }
  }

  .policytime {
    display: flex;
    justify-content: end;
    align-items: end;
    text-align: end;
    color: rgba(18, 18, 18, 0.781);
    font-size: .9rem;
    margin-right: .5rem;
  }

  h2 {
    text-align: start;

  }

  img {
    border-radius: 100px;
    width: 50px;
    height: 50px;
    object-fit: cover;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);

    @include phone {
      width: 100px;
      height: 100px;
    }
  }
}

.mwt_border {
  text-align: center;
  background: #f6f4f3;
  position: relative;
  border-radius: 20px;
  margin: .5rem auto;
  padding: .8rem;
}


.policyimg {
  border-radius: 5px;
}

.policybag {
  text-align: center;
  color: rgba(40, 40, 40, 0.826);
  font-size: 1.1rem;
}

h3 {
  font-weight: 500;
  font-size: 1.2rem;
  color: rgba(40, 40, 40, 0.826);
  letter-spacing: 1px;
  line-height: 130%;
  margin-left: .5rem;
  width: fit-content;
}

hr {
  border: .5px solid rgba(255, 166, 0, 0.656);
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
}


.policynews {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  background: linear-gradient(180deg, rgba(243, 238, 232, 0.00) 50%, rgba(243, 238, 232, 0.80) 105%);
  border-radius: 20px;


  @include pad {
    gap: 1rem;
    display: grid;
    grid-template-columns: 2fr 3fr;

  }

  .policynews-title {
    color: rgba(40, 40, 40);
    font-size: 1.3rem;
    display: none;

    @include pad {
      display: flex;
      font-size: 1.5rem;
      color: #f08308;
      line-height: 130%;
    }
  }

  .policynews-text {
    display: none;
    padding: 1rem;

    @include pad {
      display: flex;
      margin-top: 2rem;
      padding: 0;
      align-items: baseline;

    }
  }

  &:hover {
    opacity: .8;
  }
}
</style>
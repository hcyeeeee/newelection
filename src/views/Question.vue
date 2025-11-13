<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <!-- Q&A 上方小標 -->
      <div>
        <div class="icontitle">
          <img loading="lazy" src="../assets/QA.png" alt="">
          <h2>選舉Q＆A</h2>
        </div>

        <a href="https://www.ftvnews.com.tw/news/detail/2024109W0231" target="_blank" rel="noopener noreferrer"
          class="lazybag">
          <img loading="lazy"
            src="https://cdn.ftvnews.com.tw/manasystem/FileData/News/8bdefff3-1a3e-43fa-8ce6-cf8c9d677724.jpg" alt="圖片"
            style="border-radius:10px;">
        </a>
      </div>

      <!-- 問題區塊 -->
      <div v-for="item in Question" :key="item.id" class="Question" data-aos="fade-right" @click="closeMenu(item)">
        <div class="qatitle" @click.stop="toggle(item)">
          <img loading="lazy" src="../assets/Q.png" alt="">
          <h3>{{ item.Q }}</h3>
          <font-awesome-icon :icon="item.isVisible ? ['fas', 'angle-up'] : ['fas', 'angle-down']" />
        </div>
        <div class="qatitle" v-show="item.isVisible">
          <br>
          <img loading="lazy" src="../assets/A.png" alt="">
          <h3>{{ item.A }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import TheBanner from '../components/VoteBanner.vue'
import TheMarquee from '../components/VoteMarquee.vue'
const Question = ref([
  { id: 1, Q: '中華民國第16任總統副總統及第11屆立法委員選舉什麼時候進行投票呢？', A: '投票時間為2024年1月13日，8:00－16:00止。', isVisible: false },
  { id: 2, Q: '民眾符合哪些條件方可參與投票呢？', A: '年滿20歲的中華民國國民，沒有受到監護宣告...', isVisible: false },
  { id: 3, Q: '投票當天需要帶哪些物品呢？', A: '攜帶國民身份證、印章、投票通知單...', isVisible: false },
  { id: 4, Q: '投票時除了總統選票外，還會領到哪些選票？', A: '共會領到3張選票...', isVisible: false },
  { id: 5, Q: '旅外僑胞想返台投票可以嗎？', A: '需向原戶籍地戶政機關申請「返國行使選舉權」...', isVisible: false },
  { id: 6, Q: '到了投票所有哪些事項需要注意呢？', A: '不可撕毀選票、穿著競選衣物...', isVisible: false },
  { id: 7, Q: '投票時可以帶手機或攝影器材嗎？', A: '不可帶手機或攝影器材，違者處刑責...', isVisible: false },
  { id: 8, Q: '身心障礙者可否由家屬協助投票？', A: '得由家屬1人協助圈選...', isVisible: false },
  { id: 9, Q: '投票蓋錯選票怎麼辦？', A: '不能重領選票，錯票仍須投入票匭...', isVisible: false },
  { id: 10, Q: '可以用自己的印章蓋選票嗎？', A: '不行，私章或指印為無效票...', isVisible: false }
])

function toggle(item) {
  item.isVisible = !item.isVisible
}

function closeMenu(clickedItem) {
  Question.value.forEach(item => {
    if (item !== clickedItem) {
      item.isVisible = false
    }
  })
}
</script>

<style lang="scss" scoped>
.Question {
  border-radius: 1rem;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  cursor: pointer;
  box-shadow: 1.95px 1.95px 2.6px 0px rgba(0, 0, 0, 0.15);
  transition: 1s all;

  &:hover {
    background: #f6f6f6;
  }

}

.qatitle {
  width: 95%;
  padding: 1rem 0;
  display: flex;
  margin: auto;
  align-items: center;
  transition: 1s all;

  img {
    width: 40px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: auto .5rem;
    font-weight: 400;
    width: 100%;
    font-size: 1rem;
    transition: 1s all;
  }

  i {
    justify-content: end;
    margin-right: 0rem;


  }

  h3 {
    width: 100%;
    font-size: 1rem
  }
}

.lazybag {
  &:hover {
    opacity: .9;
  }
}
</style>



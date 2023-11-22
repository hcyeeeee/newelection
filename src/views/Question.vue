<template>
  <div class="views">
    <TheMarquee />
    <TheBanner />
    <div class="layout">
      <div class="icontitle">
        <img src="../assets/QA.png" alt="">
        <h2>選舉Q&A</h2>
      </div>
      <div v-for="item in Question" data-aos="fade-right" :key="item.id" class="Question" @click="closeMenu(item)">
        <div class="qatitle" @click="toggle(item)">
          <img src="../assets/Q.png" alt="">
          <h3>{{ item.Q }}</h3>
          <i :class="'fa-duotone fa-xl' + (item.isVisible ? ' fa-angle-up' : ' fa-angle-down')"></i>
        </div>
        <div class="qatitle" :style="{ display: item.isVisible ? 'flex' : 'none' }">
          <br>
          <img src="../assets/A.png" alt="">
          <h3>{{ item.A }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheBanner from '../components/TheBanner.vue'
import TheMarquee from '../components/TheMarquee.vue'

export default {
  components: {
    TheMarquee,
    TheBanner,
  },
  data() {
    return {
      isVisible: false,
      Question: [
        {
          Q: '中華民國第16任總統副總統及第11屆立法委員選舉什麼時候進行投票呢？',
          A: '投票時間為2024年1月13日，8:00－16:00止。'
        },
        {
          Q: '民眾符合哪些條件方可參與投票呢？',
          A: '年滿20歲的中華民國國民，沒有受到監護宣告，且在該選舉區設籍繼續居住6個月以上。受監護者（比如重大刑案犯人或重度精神疾病患者等）不能投票。'
        },
        {
          Q: '旅外僑胞想返台投票可以嗎？',
          A: '如果是曾在台灣居住6個月以上，但現在已長期旅外，必須在9月12日至12月14日間，向原戶籍地戶政機關申請「返國行使總統副總統選舉權」登記，經查核准予，編入選舉人名冊後，即有投票權。'
        },
        {
          Q: '投票當天需要帶哪些物品呢？',
          A: '攜帶國民身份證、印章、投票通知單。進入投票所後出示身分證後簽名（或蓋章或蓋指紋）領取選票。如果忘記帶投票通知單，還是能投票。'
        },
        {
          Q: '投票時除了總統選票外，還會領到哪些選票？',
          A: '共會領到3張選票，分別為「總統副總統選票」、「區域及原住民立委選票」、「政黨票」。'
        },
        {
          Q: '到了投票所有哪些事項需要注意呢？',
          A: '在投票所內不可撕毀或毀損選票、也不可穿著有關政黨或候選人的競選衣物、或比勝利手勢及其他指涉選舉人編號數字的手勢，以上皆可能觸法！'
        },
        {
          Q: '投票時可以帶手機或攝影器材進入投票所嗎？',
          A: '投票時不可帶手機或攝影器材進入投票所，違者處1年以下有期徒刑、拘役或科新臺幣3萬元以下罰金。'
        },
        {
          Q: '身心障礙者可否由家屬協助投票？',
          A: '選舉人如因身心障礙不能自行圈投，但能表示其意思者，得依其請求，由家屬1人在場，依本人意思，眼同協助或代為圈投。'
        },
        {
          Q: '投票日可以幫自己喜歡的候選人助選或宣傳嗎？',
          A: '一般民眾在投票所30公尺內，禁止宣傳或勸誘他人投票或不投票。各政黨及候選人不可有任何助選活動！'
        },
        {
          Q: '好想讓候選人知道有我這個忠實支持者！可以用自己的印章蓋選票嗎？',
          A: '選舉人應於選舉票圈選欄上以選舉委員會製備之圈選工具圈選。選舉票以「蓋私章」或「按指印」方式圈選選票被計為無效。'
        },
        {
          Q: '投票的時候，不小心蓋錯選票，該怎麼辦？可以重新領票再投嗎？',
          A: '不小心蓋錯選票，無法重新領票再投。若不小心蓋錯選票，仍請投入票匭，請勿撕毀選票，或將選票攜出。若有違反者，撕毀選舉票，將處新臺幣5千元以上5萬元以下罰鍰；攜出選舉票，將處1年以下有期徒刑、拘役或科新臺幣1萬5千元以下罰金。'
        },
        {
          Q: '不小心圈選於圈選欄外之選票是否有效？',
          A: '如不小心蓋出欄外，只要所蓋印文蓋於欄格線，仍可辨別圈選何候選人時，將被認定為有效票。'
        },
        {
          Q: '總統、副總統選舉候選人應具備什麼條件？',
          A: '候選人申請登記資格條件：在中華民國自由地區繼續居住6個月以上且曾設籍15年以上之選舉人，年滿40歲，不具有外國國籍，得申請登記為總統、副總統候選人。'
        },
        {
          Q: '立法委員選舉候選人應具備什麼條件？',
          A: '年滿23歲，具有我國國籍，在國內繼續居住4個月可擔任全國不分區立法委員候選人;另曾在國內設有戶籍但已將戶籍遷出國外連續8年以上者，可擔任僑居國外國民立法委員選舉候選人。不過，這項選舉必須由政黨申請登記。'
        },
      ]
    }
  }, methods: {
    toggle(question) {
      question.isVisible = !question.isVisible;
    },
    closeMenu(clickedItem) {
      this.Question.forEach(item => {
        if (item !== clickedItem) {
          item.isVisible = false;
        }
      });
    },
  },
};
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
  }
}
</style>



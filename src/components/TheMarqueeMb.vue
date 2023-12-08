<!-- <template>
 <div class="banner">
    <div class="calender-title mb">行事曆 </div>
    <div class="calender-mb">
  <swiper class="calender_content_mb mySwiper" :centeredSlides="true" :spaceBetween="20" :slidesPerView="2"
        :autoplay="{ delay: 1500, disableOnInteraction: false, }"
        :breakpoints="{ '600': { slidesPerView: 3, spaceBetween: 10, } }" :modules="modules" :loop="true">
        <swiper-slide v-for="item in calender" :key="item.id" class="calender_text ">
          <div
            style="margin-bottom: .3rem;font-weight: 400;font-size: 1rem; letter-spacing: .1rem; font-weight: 600;text-align: center;">
            {{ item.startDate }}{{ item.endDate }}
          </div>
          <div c style="font-weight: 400;font-size: 1rem;line-height: 120%;text-align: center; letter-spacing: 1px;">
            {{ item.DayEvent }}
          </div>
        </swiper-slide>
      </swiper> 
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay, EffectCards } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      calender: [
        { startDate: "2023/09/19", endDate: "-11/02", DayEvent: "受理正副總統選舉連署書件" },
        { startDate: "2023/11/07", endDate: "", DayEvent: "發布立法委員選舉公告" },
        { startDate: "2023/11/14前", endDate: "", DayEvent: "公告正副總統選舉連署結果" },
        { startDate: "2023/11/20", endDate: "-11/24", DayEvent: "受理正副總統與立法委員選舉候選人登記之申請" },
        { startDate: "2023/12/05前", endDate: "", DayEvent: "審定正副總統選舉候選人名單，並通知抽籤" },
        { startDate: "2023/12/11", endDate: "", DayEvent: "正副總統選舉候選人號次抽籤" },
        { startDate: "2023/12/15", endDate: "", DayEvent: "公告正副總統選舉候選人名單" },
        { startDate: "2024/01/02", endDate: "", DayEvent: "公告立法委員選舉候選人名單" },
        { startDate: "2024/01/13", endDate: "", DayEvent: "投票及開票日" },
        { startDate: "2024/01/19前", endDate: "", DayEvent: "公告正副總統與立法委員選舉當選人名單" },
      ],
      modules: [Autoplay, EffectCards],
    }
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide-prev,
.swiper-slide-next {
  opacity: .3;
  filter: blur(1px);
}
</style> -->
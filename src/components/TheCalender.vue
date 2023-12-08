<template>
    <div class="calender">
        <div class="title">
            行事曆
        </div>
        <div class="calender_content">
            <div v-for="item in calender" :key="item.id" class="calender-inner">
                <div style="margin-bottom: .3rem;font-weight: 400;font-size: 0.9rem;color: rgb(21, 21, 21);">
                    <i :class="'fa-solid fa-' + item.Icon"></i>
                    {{ item.startDate }}{{ item.endDate }}
                </div>
                <div style="font-weight:350;font-size: 1rem;line-height: 130%;">

                    {{ item.DayEvent }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            calender: [
                { startDate: "2023.09.19", endDate: "-11.02", DayEvent: "受理正副總統選舉連署書件", Icon: "check" },
                { startDate: "2023.11.14 前", endDate: "", DayEvent: "公告正副總統選舉連署結果", Icon: "check" },
                { startDate: "2023.11.20", endDate: "-24", DayEvent: "受理正副總統/立法委員候選人登記之申請", Icon: "check" },
                { startDate: "2023.12.05前", endDate: "", DayEvent: "審定正副總統選舉候選人名單，並通知抽籤", Icon: "" },
                { startDate: "2023.12.11", endDate: "", DayEvent: "正副總統選舉候選人抽籤決定號次", Icon: "" },
                { startDate: "2023.12.15", endDate: "", DayEvent: "公告正副總統選舉候選人名單", Icon: "" },
                { startDate: "2024.01.02", endDate: "", DayEvent: "公告立法委員選舉候選人名單", Icon: "" },
                { startDate: "2024.01.03", endDate: "-01.12", DayEvent: "辦理立法委員選舉候選人公辦政見發表會", Icon: "" },
                { startDate: "2024.01.13", endDate: "", DayEvent: "投票、開票", Icon: "" },
                { startDate: "2024.01.19前", endDate: "", DayEvent: "公告正副總統與立法委員選舉當選人名單", Icon: "" },
            ],
        }
    },
}
</script>

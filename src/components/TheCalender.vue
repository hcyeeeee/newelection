<template>
    <div class="calender">
        <div class="title">
            <i class="fa-regular fa-calendar-check"></i> 行事曆
        </div>
        <div class="calender_content">
            <div v-for="item in calender" :key="item.id" class="calender-inner">
                <div style="margin-bottom: .3rem;font-weight: 300;font-size: 0.9rem;">
                    {{item.startDate}}{{ item.endDate }}
                </div>
                <div style="font-weight: 400;font-size: 1rem;line-height: 130%;">{{ item.DayEvent }}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            calender: [
                { startDate: "2023.09.19", endDate: "-11.02", DayEvent: "受理總統、副總統選舉連署書件" },
                { startDate: "2023.11.07", endDate: "", DayEvent: "發布立法委員選舉公告" },
                { startDate: "2023.11.14前", endDate: "", DayEvent: "公告總統、副總統選舉連署結果" },
                { startDate: "2023.11.20", endDate: "-11.24", DayEvent: "受理總統、副總統與立法委員選舉候選人登記之申請" },
                { startDate: "2023.12.05前", endDate: "", DayEvent: "審定總統、副總統選舉候選人名單，並通知抽籤" },
                { startDate: "2023.12.11", endDate: "", DayEvent: "總統、副總統選舉候選人抽籤決定號次" },
                { startDate: "2023.12.15", endDate: "", DayEvent: "公告總統、副總統選舉候選人名單" },
                { startDate: "2024.01.02", endDate: "", DayEvent: "公告立法委員選舉候選人名單" },
                { startDate: "2024.01.13", endDate: "", DayEvent: "投票、開票" },
                { startDate: "2024.01.19前", endDate: "", DayEvent: "公告總統、副總統與立法委員選舉當選人名單" },
            ],
        }
    },
}
</script>

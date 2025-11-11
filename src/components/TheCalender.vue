<template>
    <div class="calender">
        <div class="title">
            行事曆
        </div>
        <div class="calender_content">
            <div v-for="item in calender" :key="item.id" class="calender-inner">
                <div style="margin-bottom: .3rem;font-weight: 400;font-size: 0.9rem;color: rgb(21, 21, 21);">
                    <font-awesome-icon :icon="'fa-solid fa-' + item.Icon" />
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
                { startDate: "2023.12.20", endDate: "", DayEvent: "第1場總統候選人電視政見發表會", Icon: "" },
                { startDate: "2023.12.30", endDate: "", DayEvent: "總統候選人電視辯論會", Icon: "" },
                { startDate: "2024.01.01", endDate: "", DayEvent: "副總統候選人電視辯論會", Icon: "" },
                { startDate: "2024.01.02", endDate: "", DayEvent: "公告立法委員選舉候選人名單", Icon: "" },
                { startDate: "2024.01.13", endDate: "", DayEvent: "投票、開票", Icon: "" },
                { startDate: "2024.01.19前", endDate: "", DayEvent: "公告正副總統與立法委員選舉當選人名單", Icon: "" },
            ],
        }
    },
}
</script>

<template>
    <div class="calender">
        <div class="title">行事曆 </div>
        <div class="calender_content">
            <div v-for="item in calender" :key="item.id" class=" animate__animated animate__fadeInRight">
                <div>{{ item.startDate }}-{{ item.endDate }}</div>
                <div>{{ item.DayEvent }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            calender: [
                { startDate: "2023/09/12", endDate: "12/04", DayEvent: "選舉人登記" },
                { startDate: "2023/09/12", endDate: "12/04", DayEvent: "選舉人登記" },
                { startDate: "2023/09/12", endDate: "12/04", DayEvent: "選舉人登記" },
                { startDate: "2023/09/12", endDate: "12/04", DayEvent: "選舉人登記" },
                { startDate: "2023/09/12", endDate: "12/04", DayEvent: "選舉人登記" }
            ],
        }
    }
}
</script>
<style lang="scss" ></style>
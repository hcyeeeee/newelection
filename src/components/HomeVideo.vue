<template>
    <div>
        <!--  Live直播區 -->
        <div class="layout mb">
            <div class="icontitle">
                <img loading="lazy" src="@/assets/video.png" alt="">
                <h2>Live直播</h2>
            </div>
            <div class="video-container">
                <div>
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/ylYJSBUgaMA?autoplay=1&mute=1&si=GDtC43iZq4uLNHqf"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div>播放清單</div>
            </div>
        </div>

        <!-- 精彩影音 -->
        <div class="home-video">
            <div class="layout2">
                <div class="icontitle">
                    <img loading="lazy" src="@/assets/video.png" alt="">
                    <h2>精彩影音</h2>
                </div>

                <!-- Tabs -->
                <ul class="video_tab">
                    <li v-for="(video, index) in videoTabs" :key="index" @click="currentVideo = index"
                        :class="{ active: index === currentVideo }">
                        {{ video.title }}
                    </li>
                </ul>

                <!-- Video container -->
                <div class="video-menu">
                    <div class="video-container">
                        <iframe width="100%" height="100%" :src="videoTabs[currentVideo].url" title="YouTube video player"
                            frameborder="0" name="video-frame"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const currentVideo = ref(0)
const videoTabs = ref([
    {
        title: "總統大選",
        url: "https://www.youtube.com/embed/videoseries?si=kaibtbx87BlFy3Nt&list=PLkP0kGDs5OtfjDmXlQ0VqQqikquY6i3zd"
    },
    {
        title: "立委選戰",
        url: "https://www.youtube.com/embed/videoseries?si=xOrLVtfLvo4Aaqq7&list=PLkP0kGDs5OtdSRxmjhD36zCp28lSWO_v4"
    },
    {
        title: "新聞放大鏡",
        url: "https://www.youtube.com/embed/videoseries?si=xOrLVtfLvo4Aaqq7&list=PLkP0kGDs5OtfXdfmpvkcGbR65NmjqLk70"
    }
])
</script>

<style lang="scss" scoped>
.video_tab {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;

    li {
        cursor: pointer;
        list-style: none;
        padding: 0.4rem 1rem;
        border-radius: 5px;
        transition: 0.3s;
        background-color: #fee2c1;
        color: #0f0f0f !important;

        &:active,
        &:hover {
            background-color: #fee2c1;
            background-color: #f08308;
            color: #fff !important;
        }
    }
}


.video-container {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }
}
</style>

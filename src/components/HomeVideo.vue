<template>
    <div>
        <div class="layout mb">
            <div class="icontitle">
                <img loading="lazy" srcset="../assets/video.png" alt="">
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
        <div class="home-video">
            <div class="layout2">
                <div class="icontitle">
                    <img loading="lazy" srcset="../assets/video.png" alt="">
                    <h2>精彩影音</h2>
                </div>
                <ul class="video_tab">
                    <li>
                        <a href="https://www.youtube.com/embed/videoseries?si=kaibtbx87BlFy3Nt&amp;list=PLkP0kGDs5OtfjDmXlQ0VqQqikquY6i3zd"
                            target="video-frame">總統大選</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/embed/videoseries?si=xOrLVtfLvo4Aaqq7&amp;list=PLkP0kGDs5OtdSRxmjhD36zCp28lSWO_v4"
                            target="video-frame">立委選戰</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/embed/videoseries?si=xOrLVtfLvo4Aaqq7&amp;list=PLkP0kGDs5OtfXdfmpvkcGbR65NmjqLk70"
                            target="video-frame">新聞放大鏡</a>
                    </li>
                </ul>
                <div class="video-menu">
                    <div class="video-container">
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/videoseries?si=kaibtbx87BlFy3Nt&amp;list=PLkP0kGDs5OtfjDmXlQ0VqQqikquY6i3zd"
                            title="YouTube video player" frameborder="0" name="video-frame"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}

.home-video {
    display: flex;
}
</style>
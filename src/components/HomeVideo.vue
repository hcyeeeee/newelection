<template>
    <div class="home-video layout">
        <h2>新聞放大鏡</h2>
        <div class="video-container">
            <div>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?si=xOrLVtfLvo4Aaqq7&amp;list=PLkP0kGDs5OtfXdfmpvkcGbR65NmjqLk70"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </div>
            <div>播放清單</div>
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
</style>
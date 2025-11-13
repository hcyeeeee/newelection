<template>
    <div class="banner">
        <div>
            <div class="layout-h1">
                <h1>
                    <span>決戰2024</span>
                    <br>
                    總統大選 | 立委選戰
                </h1>
            </div>
            <div class="count">
                <span>開票結束</span>
            </div>
        </div>
        <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/ylYJSBUgaMA?autoplay=1&mute=1&si=GDtC43iZq4uLNHqf"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>
<style lang="scss" scoped>
.count {
    display: flex !important;
    gap: 1rem;
    align-items: center;
    margin-top: .5rem;
    background: linear-gradient(115deg, #F07708 30.73%, #FF9823 32.81%, #F04E08 100%);
    padding: 0.5rem;
    border-radius: 1.25rem 1.25rem 0 0;

    @include pad {
        display: flex;
        animation: taadaa 1.5s infinite;
        background: linear-gradient(115deg, #F07708 30.73%, #FF9823 32.81%, #F04E08 100%);

    }
}

.count-title,
.count-text {
    display: flex !important;
    color: white;

    @include pad {
        color: rgb(0, 0, 0)
    }
}

.layout-h1 {
    margin-bottom: 0px !important;
    margin-top: .5rem !important;

    @include pad {
        margin-top: -1px;
    }
}

@keyframes taadaa {


    33% {
        opacity: 1;
    }

    66% {
        opacity: 0.8;
    }

    99% {
        opacity: 1;
    }

}

.count span {
    color: #ffffff;
    letter-spacing: 1rem;

    @include pad {
        color: #ffffff;
        letter-spacing: 1rem;
    }
}

.countstyle1 {
    padding: 0rem;
}
</style>
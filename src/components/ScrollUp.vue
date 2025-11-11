<template>
    <div class="scrollup">
        <Transition name="fade">
            <div v-show="scrollY > 100 && !reachedBottom">
                <img loading="lazy" class="up" srcset="../assets/up.png" @click="scrollTop" alt="up">
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: 0,
            reachedBottom: false
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },

    },

    created() {
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY
        })
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.up {
    position: fixed;
    right: 1.5%;
    bottom: 4rem;
    cursor: pointer;
}
</style>

<template>
    <div class="scrollup">
        <Transition name="fade">
            <div v-show="scrollY > 100">
                <img class="up" src="../assets/up.png" @click="scrollTop" loading="lazy" alt="up">
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: 0,
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
    z-index: 9999;
    cursor: pointer;
}
</style>

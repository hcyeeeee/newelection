<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollY = ref(0)
const reachedBottom = ref(false)

// 回到頂端
function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
    scrollY.value = window.scrollY
    const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
    reachedBottom.value = bottom
}

onMounted(() => {
    scrollTop()
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="scrollup">
        <Transition name="fade">
            <div v-show="scrollY > 100 && !reachedBottom">
                <img loading="lazy" class="up" src="../assets/up.png" @click="scrollTop" alt="up" />

                <!-- <h1 @click="scrollTop">upupup</h1> -->
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.scrollup {
    position: fixed;
    bottom: 60px;
    right: 2%;
    z-index: 99;
}

.up {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: opacity 0.3s;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

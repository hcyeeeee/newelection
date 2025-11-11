<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/news'

const store = useNewsStore()

onMounted(async () => {
  await store.fetchAll()
  console.log('✅ 跑馬燈資料：', store.marquee)
  console.log('✅ 總統大選新聞：', store.president)
  console.log('✅ 立委選戰新聞：', store.legislator)
})
</script>

<template>
  <section>
    <h2>跑馬燈測試</h2>
    <div v-if="store.loading">載入中...</div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <ul v-else>
      <li v-for="(item, i) in store.marquee" :key="i">
        <a :href="item.Url" target="_blank">{{ item.Title }}</a>
      </li>
    </ul>
  </section>
</template>

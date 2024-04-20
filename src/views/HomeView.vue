<template>
  <div v-for="item in getOrderedItems()" :key="`item-${item.pageOrder}`">
    <template v-if="item.type === 'CARDS'">
      <Cards :productions="item.productions" />
    </template>
    <template v-else-if="item.type === 'MAIN'">
      <Carousel :productions="item.productions" />
    </template>
    <template v-else-if="item.type === 'DEFAULT'">
      <Collections :title="item.name" :items="item.productions" />
    </template>
  </div>
  <div></div>
</template>
<script setup>
import Carousel from '@/components/Carousel.vue'
import Collections from '@/components/Collections.vue'
import Cards from '@/components/Cards.vue'
import api from '@/api'
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const MAIN_PAGE_URL = '/ww/mainPage/'

const { t } = useI18n()

const mainPageItems = ref([])

onMounted(async () => {
  try {
    const response = await api.get(MAIN_PAGE_URL)
    mainPageItems.value = response.data
  } catch (error) {
    console.error('Error fetching collection items:', error)
  }
})

const getOrderedItems = () => {
  return mainPageItems.value.sort((a, b) => a.pageOrder - b.pageOrder)
}

</script>
<template>
  <div class="h-screen">
    <Transition name="link-transition" mode="out-in">
      <router-link
        v-if="currentProduct"
        class="relative image-container cursor-pointer"
        :to="`/product/${currentProduct.id}`"
      >
        <img
          class="fit-image"
          :src="getImgUrl(currentProduct.image)"
          :alt="currentProduct.name"
        />
        <div class="absolute bottom-0 w-full">
          <div class="mb-10 flex justify-between">
            <h2
              class="self-end p-5 capitalize text-3xl w-full bg-gray-950 opacity-80 font-thin text-white text-center text-2xl lg:text-4xl"
            >
              {{ currentProduct.name }}
            </h2>
          </div>
        </div>
      </router-link>
    </Transition>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { defineProps } from 'vue'
import { getImgUrl } from '@/utils'

const props = defineProps({
  productions: Array
})

let carouselIndex = 0
let interval = null

let currentProduct = ref({})

function createCarouselInterval() {
  interval = setInterval(() => {
    if (carouselIndex < props.productions.length - 1) {
      carouselIndex += 1
    } else {
      carouselIndex = 0
    }
    currentProduct.value = props.productions[carouselIndex]
  }, 5000)
}

onMounted(() => {
  currentProduct.value = props.productions[carouselIndex]
  createCarouselInterval()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

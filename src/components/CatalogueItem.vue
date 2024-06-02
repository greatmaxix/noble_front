<template>
  <fwb-card class="m-1 xl:m-3 fwb-card shadow-2xl hover:border-2 hover:m-1" :img-alt="title" :img-src="getImgUrl(imageUrl)" variant="image">
    <div class="p-2 lg:p-5">
      <h5
        class="mb-2 md:text-2xl font-normal tracking-tight text-gray-900 min-h-24 max-h-24 overflow-hidden dark:text-white">
        {{ title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 min-h-36 max-h-36 overflow-hidden">
        {{ description }}
      </p>
      <h2 class="font-semibold md:text-2xl mt-5">
        <template v-if="newPrice">
          <span class="line-through font-thin">
            {{ currencyFormatter().format(oldPrice) }}тг
          </span>
          | {{ currencyFormatter().format(newPrice) }}тг
        </template>
        <template v-else>
          {{ currencyFormatter().format(oldPrice) }}тг
        </template>
      </h2>
      <div class="grid grid-flow-col justify-stretch mt-2">
        <PrimaryBtn class="p-3 uppercase font-semibold mt-3"
          @click="$router.push({ name: 'product', params: { id: id, type: type || 'SINGLE' } })">
          {{ $t('more_info') }}
        </PrimaryBtn>
      </div>
    </div>
  </fwb-card>
</template>

<script>
import { FwbCard } from 'flowbite-vue'

import { defineComponent } from 'vue'
import PrimaryBtn from '@/components/PrimaryBtn.vue'
import { getImgUrl, currencyFormatter } from '@/utils'

export default defineComponent({
  components: { PrimaryBtn, FwbCard },
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String,
      default: ''
    },
    oldPrice: {
      required: true,
      type: Number,
      default: 0
    },
    newPrice: {
      required: false,
      type: Number,
      default: null
    },
    id: {
      required: true,
      type: String,
    },
    imageUrl: {
      required: true,
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: null
    }
  },
  methods: {
    getImgUrl,
    currencyFormatter
  }
})
</script>

<style>
.fwb-card img {
  /* Your styles here */
  width: 100%;
  /* Ensure the image takes the full width of the card */
  height: 200px;
  /* Set the desired height for the image */
  object-fit: cover;
  /* Maintain aspect ratio and cover the entire container */
}
</style>
<template>
    <fwb-card
        class="m-1 xl:m-3 fwb-card"
        :img-alt="title"
        :img-src="imageUrl"
        variant="image"
    >
      <div class="p-2 lg:p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 min-h-24 max-h-24 overflow-hidden dark:text-white">
            {{ title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 min-h-36 max-h-36 overflow-hidden">
            {{ description }}
        </p>
        <h2 class="font-semibold text-xl mt-5">
            {{ price }}тг
        </h2>
        <div class="grid grid-flow-col justify-stretch mt-2">
            <PrimaryBtn class="p-3 uppercase font-semibold mt-3" :title="$t('more_info')"/>
            <button type="button" class="w-full flex items-center justify-center py-2">
                <ShoppingCartIcon class="h-7 mt-1.5"/>
            </button>
        </div>
      </div>
    </fwb-card>
</template>

<script>
import { FwbCard } from 'flowbite-vue'

import {defineComponent} from "vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  components: {PrimaryBtn, FwbCard, ShoppingCartIcon},
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
      default: ''
    },
    price: {
      required: true,
      type: Number,
      default: 0
    },
    id: {
      required: true,
      type: Number,
      default: 0
    },
    imageUrl: {
        required: true,
        type: String,
        default: ''
    },
  }
})
</script>

<style>
.fwb-card img {
  /* Your styles here */
  width: 100%; /* Ensure the image takes the full width of the card */
  height: 200px; /* Set the desired height for the image */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
</style>
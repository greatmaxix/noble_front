<template>
  <div class="relative my-5">
    <h2 class="text-3xl lg:text-6xl uppercase font-thin text-center ml-2 md:ml-10 mb-2">
      {{title}}
    </h2>
    <div class="overflow-x-auto flex flex-nowrap items-start lg:justify-center w-full no-scrollbar">
      <div v-for="item in items" :key="item.id" class="w-[300px] lg:w-[500px] h-full flex-none py-4 px-4 md:px-10">
        <router-link :to="`/product/${item.id}`">
          <img
            class="h-[300px] lg:h-[500px] card-image"
            :src="getImgUrl(item.image)"
            :alt="item.name"
          />
        </router-link>
        <div class="flex flex-col whitespace-nowrap truncate">
          <p class="font-light text-3xl text-center">
            {{item.name}}
          </p>
          <p class="text-center font-light text-3xl">
            <span class="">
              <template v-if="item.newPrce">
                <span class="line-through">
                  {{currencyFormatter().format(item.oldPrice)}}тг
                </span>
                |{{currencyFormatter().format(item.newPrce)}}тг
              </template>
              <template v-else>
                {{currencyFormatter().format(item.oldPrice)}}тг
              </template>
            </span>
          </p>
          <PrimaryBtn class="p-4 align-bottom	 uppercase font-semibold mt-3 drop-shadow-xl">{{$t('add_to_cart')}}</PrimaryBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import { getImgUrl, currencyFormatter } from '@/utils'

export default defineComponent({
  methods: {currencyFormatter, getImgUrl},
  components: {PrimaryBtn},
  props: {
    title: {
      required: true,
      type: String,
    },
    items: {
      required: true,
      default: []
    }
  },
})
</script>
<template>
  <div class="relative">
    <h2 class="text-4xl uppercase font-bold ml-2 md:ml-10 mb-2">
      {{title}}
    </h2>
    <div class="overflow-x-auto flex flex-nowrap items-start w-full no-scrollbar">
      <div v-for="item in items" :key="item.id" class="w-[300px] h-full flex-none py-4 px-4 md:px-10">
        <div class="image-container-noh h-[300px]" :style="{ backgroundImage: `url(${item.imgSrc})` }"
        />
        <div class="flex flex-col whitespace-nowrap truncate">
          <p class="font-bold text-xs">
            {{item.brand}}
          </p>
          <p class="font-bold">
            {{item.description}}
          </p>
          <p class="font-light">
            {{item.name}}
          </p>
          <p>
            <span>
              <span class="line-through">{{currencyFormatter().format(item.oldPrice)}}тг</span>|{{currencyFormatter().format(item.price)}}тг
            </span>
          </p>
          <PrimaryBtn class="p-4 align-bottom	 uppercase font-semibold mt-3">{{$t('add_to_cart')}}</PrimaryBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import {currencyFormatter} from "@/utils.js";

export default defineComponent({
  methods: {currencyFormatter},
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
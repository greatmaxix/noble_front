<template>
  <div class="relative px-10">
    <div class="overflow-x-auto flex flex-nowrap items-start w-full no-scrollbar">
      <div v-for="item in items" :key="item.id" class="h-full min-w-[300px] flex-none py-4 px-4 md:px-10">
        <template v-if="item.banner">
          <div class="image-container-nowh w-[700px] h-[500px]" :style="{ backgroundImage: `url(${item.imgSrc})` }"/>
        </template>
        <template v-else>
          <div>
            <div class="flex flex-col">
              <h2 class="font-bold my-5">
                {{item.title}}
              </h2>
              <FwbA href="#" class="text-gray-500 font-semibold text-xs mb-3">
                {{$t('show_all_materials')}}
              </FwbA>
            </div>
            <div class="image-container-noh h-[300px]" :style="{ backgroundImage: `url(${item.imgSrc})` }"/>
            <div class="flex flex-col whitespace-nowrap truncate">
              <p class="font-bold text-xs">
                {{item.name}}
              </p>
              <PrimaryBtn class="p-4 align-bottom	font-semibold mt-3" :title="$t('more_info')" @click="handleMoreInfoClick(item)"/>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import {FwbA} from "flowbite-vue";

export default defineComponent({
  components: {FwbA, PrimaryBtn},
  props: {
    items: {
      required: true,
      default: []
    }
  },
  methods: {
    handleMoreInfoClick(item) {
      this.$router.push({name: 'product', params: {id: item.id}})
    }
  }
})
</script>
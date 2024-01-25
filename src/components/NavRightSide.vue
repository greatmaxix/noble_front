<template>
  <div>
    <!--  Mobile view -->
    <div class="md:hidden text-2xl">
      <SearchButton/>

      <div class="mt-4 grid grid-cols-3 mx-4">
        <div class="flex justify-start mt-5">
          <Bars3Icon class="h-6 cursor-pointer hover:ring-blue-500 hover:ring-2 rounded" @click="showLinks = !showLinks"/>
          <LanguageSelector/>
        </div>
        <div class="flex justify-center">
          <FwbA href="/">
            <FwbImg
              alt="Noble logo"
              class="w-[125px] h-[45px]"
              :src="noble_logo"
            />
          </FwbA>
        </div>
        <div class="w-full flex justify-end mt-5">
          <MapPinIcon class="h-6"/>
          <FwbA href="/cart" class="mb-2">
            <ShoppingBagIcon class="ml-2 h-6"/>
          </FwbA>
        </div>
      </div>

      <Transition name="link-transition">
        <div v-if="showLinks" @close="showLinks = false"
             :class="{ 'opacity-0': !showLinks, 'opacity-100': showLinks }"
             class="transition-opacity duration-300 ease-in-out bg-gray-200 my-3">
          <div class="flex flex-col text-center">
            <FwbA
                v-for="route in routes" :key="route"
                class="rounded-xl p-1 m-1 w-full"
                :href="`/${route}`">
              {{$t(route)}}
            </FwbA>
          </div>
        </div>
      </Transition>
    </div>
    <!--  Desktop view  -->
    <div class="hidden md:block">

      <div class="h-10 bg-gray-950"></div>

      <div class="mt-4 grid grid-cols-3 mx-4">
        <div class="flex justify-start ml-10">
          <FwbA href="/">
            <FwbImg
              alt="Noble logo"
              class="w-[125px] h-[45px]"
              :src="noble_logo"
            />
          </FwbA>
        </div>

        <SearchButton/>

        <div class="flex justify-end mt-5 gap-6 mr-10 mb-2">
          <LanguageSelector/>
          <MapPinIcon class="h-7"/>
          <FwbA href="/cart" class="mb-2">
            <ShoppingBagIcon class="h-7"/>
          </FwbA>
        </div>
      </div>

      <div class="w-full flex font-bold justify-around uppercase z-10"
           :class="{'fixed bg-white top-0': isSticky}"
      >
        <FwbA
            v-for="route in routes" :key="route"
            class="rounded-xl p-1 m-1"
            :href="`/${route}`">
          {{$t(route)}}
        </FwbA>
      </div>
    </div>
  </div>
</template>
<script setup>
import {FwbA, FwbImg} from "flowbite-vue";
import { MapPinIcon, ShoppingBagIcon, Bars3Icon } from "@heroicons/vue/24/solid";
import noble_logo from '@/assets/noble.png'

import {onMounted, onUnmounted, ref} from 'vue'
import SearchButton from "@/components/SearchButton.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
let showLinks = ref(false)
const routes = ['brands', 'new_year', 'sets', 'table_serve', 'glass_and_bar', 'cutlery', 'decor_and_interior', 'kitchenware']

let isSticky = ref(false)
const scrollHandler = () => {
  isSticky.value = window.scrollY > 100;
}

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
})

</script>

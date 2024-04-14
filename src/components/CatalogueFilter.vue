<template>
    <div>
      <!-- Modal for phones -->
      <div v-if="isOpen" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
        <div class="bg-white p-4 rounded-md shadow-md w-full h-full">
            <button type="button" dir="rtl" class="absolute top-0 start-0" v-on:click="$emit('closeModal')">
                <XMarkIcon class="h-7 mt-1.5 mr-1"/>
            </button>
            <h2 class="text-2xl uppercase text-center mb-4">{{ $t('filters') }}</h2>
            <hr class="font-bold"/>
            <div class="text-2xl font-thin my-5">
                <fwb-checkbox v-model="filters.discount">
                    {{ $t('discount') }}
                </fwb-checkbox>
            </div>
            <div class="mt-5">
                <h3 class="font-thin mb-2">{{$t('price')}}</h3>
                <div class="grid grid-cols-2 gap-2">
                    <fwb-input class="rounded" v-model="filters.price.min" type="number" :label="$t('min_price')" :placeholder="filters.price.min" size="lg"/>
                    <fwb-input class="rounded" v-model="filters.price.max" type="number" :label="$t('max_price')" :placeholder="filters.price.max" size="lg"/>
                </div>
            </div>
            <div class="mt-5">
                <h3 class="font-thin mb-2">{{$t('brands')}}</h3>
                <fwb-input
                    v-model="brands_query"
                    :label="$t('search_brands')"
                    :placeholder="$t('start_typing')"
                    size="lg"
                />
                <div class="h-32 overflow-y-auto mt-5">
                    <fwb-checkbox v-for="brand in brands" :key="brand.id" v-model="filters.brands[brand.id]">
                        {{ brand.name }}
                    </fwb-checkbox>
                </div>
            </div>
        </div>
      </div>
  
      <!-- Sidebar for wider screens -->
      <div v-else class="hidden lg:block lg:w-72 lg:h-full lg:bg-gray-100 lg:flex lg:flex-col lg:left-0 lg:top-0">
        <div class="p-4 border-b border-gray-200">
            <h2 class="text-2xl uppercase text-center mb-4">{{ $t('filters') }}</h2>
            <hr class="font-bold"/>
            <div class="text-2xl font-thin my-5">
                <fwb-checkbox v-model="filters.discount">
                    {{ $t('discount') }}
                </fwb-checkbox>
            </div>
            <div class="mt-5">
                <h3 class="font-thin mb-2">{{$t('price')}}</h3>
                <div class="grid grid-cols-2 gap-2">
                    <fwb-input class="rounded" v-model="filters.price.min" type="number" :label="$t('min_price')" :placeholder="filters.price.min" size="lg"/>
                    <fwb-input class="rounded" v-model="filters.price.max" type="number" :label="$t('max_price')" :placeholder="filters.price.max" size="lg"/>
                </div>
            </div>
            <div class="mt-5">
                <h3 class="font-thin mb-2">{{$t('brands')}}</h3>
                <fwb-input
                    v-model="brands_query"
                    :label="$t('search_brands')"
                    :placeholder="$t('start_typing')"
                    size="lg"
                />
                <div class="h-32 overflow-y-auto">
                    <fwb-checkbox v-for="brand in brands" :key="brand.id" v-model="filters.brands[brand.id]">
                        {{ brand.name }}
                    </fwb-checkbox>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FwbCheckbox, FwbInput } from 'flowbite-vue';
  import {XMarkIcon} from "@heroicons/vue/24/solid/index.js";
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    components: {
        XMarkIcon,
        FwbCheckbox,
        FwbInput
    },
    props: {
      brands: {
        type: Array,
        default: () => []
      },
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isMobile: false,
        filters: {
          discount: false,
          price: {
            min: 0,
            max: 9999999,
          },
          brands: {}
        },
        brands_query: '',
      }
    },
    mounted() {
        for (let i = 0; i < this.brands.length; i++) {
            this.filters.brands[this.brands[i].id] = false;
        } 
    }
  })
  </script>
  
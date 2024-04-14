<template>
  <div class="bg-white p-4 rounded-md shadow-md w-full h-full">
    <button type="button" dir="rtl" class="absolute top-0 start-0" v-on:click="$emit('closeModal')">
      <XMarkIcon class="h-7 mt-1.5 mr-1" />
    </button>
    <h2 class="text-2xl uppercase text-center mb-4">{{ $t('filters') }}</h2>
    <hr class="font-bold" />
    <div class="text-2xl font-thin my-5">
      <fwb-checkbox v-model="filters.discount">
        {{ $t('discount') }}
      </fwb-checkbox>
    </div>
    <div class="mt-5">
      <h3 class="font-thin mb-2">{{ $t('price') }}</h3>
      <div class="grid grid-cols-2 gap-2">
        <fwb-input
          class="rounded"
          v-model="filters.price.min"
          type="number"
          :label="$t('min_price')"
          :placeholder="filters.price.min"
          size="lg"
        />
        <fwb-input
          class="rounded"
          v-model="filters.price.max"
          type="number"
          :label="$t('max_price')"
          :placeholder="filters.price.max"
          size="lg"
        />
      </div>
    </div>
    <div class="mt-5">
      <h3 class="font-thin mb-2">{{ $t('brands') }}</h3>
      <fwb-input
        v-model="brands_query"
        :label="$t('search_brands')"
        :placeholder="$t('start_typing')"
        size="lg"
      />
      <div class="h-64 lg:h-64 overflow-y-auto mt-5">
        <fwb-checkbox
          v-for="brand in Object.values(filters.brands)"
          :key="brand.id"
          v-model="filters.brands[brand.id].selected"
        >
          {{ brand.name }}
        </fwb-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { FwbCheckbox, FwbInput } from 'flowbite-vue'
import { XMarkIcon } from '@heroicons/vue/24/solid/index.js'

export default defineComponent({
  name: 'Filter',
  components: {
    XMarkIcon,
    FwbCheckbox,
    FwbInput
  },
  props: {
    brands: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isMobile: false,
      filters: {
        discount: false,
        price: {
          min: 0,
          max: 9999999
        },
        brands: {}
      },
      brands_query: ''
    }
  },
  watch: {
    brands_query(val) {
      let brandsFiltered = this.brands
      if (val) {
        brandsFiltered = brandsFiltered.filter((el) => {
          return el.name.includes(val)
        })
      }

      this.setBrands(brandsFiltered)
    }
  },
  mounted() {
    this.setBrands(this.brands)
  },
  methods: {
    setBrands(brands) {
      // Create a new object to hold the filtered brands
      const updatedBrands = {}

      for (let i = 0; i < brands.length; i++) {
        updatedBrands[brands[i].id] = {
          selected: false,
          ...brands[i]
        }
      }

      // Replace the entire filters.brands object with the updatedBrands object
      this.filters.brands = reactive(updatedBrands)
    }
  }
})
</script>

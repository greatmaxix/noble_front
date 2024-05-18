<template>
  <div class="flex flex-col m-3 xl:m-5 text-lg">
    <breadcrumbs :items="breadcrumbItems" />
    <div class="text-3xl mt-2">
      <h1 class="uppercase font-semibold py-2 hidden">
        {{ $t('Kurwa') }}
      </h1>
    </div>
    <div class="grid grid-cols-2 text-2xl my-3">
      <button
        type="button"
        class="flex w-50 mx-auto uppercase py-2 lg:hidden"
        v-on:click="openFilters = !openFilters"
      >
        <AdjustmentsHorizontalIcon class="h-4 mt-1.5 mr-1" />
        {{ $t('filters') }}
      </button>
      <button type="button" class="flex w-50 mx-auto uppercase py-2">
        <Bars3BottomRightIcon class="h-4 mt-1.5 mr-1" />
        {{ $t('sort') }}
      </button>
    </div>
    <div class="flex">
      <div class="flex=none">
        <catalogue-filter
          :isOpen="openFilters"
          @closeModal="openFilters = !openFilters"
          :brands="brands"
        >
        </catalogue-filter>
      </div>
      <div class="grow grid grid-cols-2 xl:grid-cols-4">
        <catalogue-item
          v-for="item in products"
          :key="item.id"
          :id="item.id"
          :title="item.name"
          :description="item.description"
          :imageUrl="item.image"
          :price="item.oldPrice"
          :newPrice="item.newPrice"
        >
        </catalogue-item>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { AdjustmentsHorizontalIcon, Bars3BottomRightIcon } from '@heroicons/vue/24/solid/index.js'
import meringa from '@/assets/meringa.jpg'
import meringa2 from '@/assets/meringa2.png'
import CatalogueItem from '@/components/CatalogueItem.vue'
import CatalogueFilter from '@/components/CatalogueFilter.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { ref, computed, onMounted } from 'vue'
import api from '@/api'

const PRODUCTS_URL = '/ww/getProductions'

const openFilters = ref(false)
const { t } = useI18n()
const route = useRoute()
const loading = ref(false)
const products = ref([])

const getQuery = (query) => {
  return {
    ...query,
    page: 1
  }
} 

onMounted(async () => {
  loading.value = true
  try {
    const response = await api.get(PRODUCTS_URL, {
      params: getQuery(route.query)
    })

    products.value = response.data.items
  } catch (error) {
    console.error('Error fetching product items:', error)
  } finally {
    loading.value = false
  }
})

const collectionItems = [
  {
    id: 1,
    brand: 'Brandani',
    description: 'Столовый сервиз на 12 персон',
    title: 'Brandani Meringa',
    price: 195200,
    oldPrice: 244000,
    imgSrc: meringa
  },
  {
    id: 2,
    brand: 'Brandani',
    description: 'Столовый сервиз на 12 персон Meringa',
    title: 'Brandani Meringa',
    price: 195200,
    oldPrice: 244000,
    imgSrc: meringa2
  },
  {
    id: 3,
    brand: 'Brandani',
    description: 'Столовый сервиз на 12 персон Meringa',
    title: 'Brandani Meringa',
    price: 195200,
    oldPrice: 244000,
    imgSrc: meringa2
  }
]

const breadcrumbItems = [
  {
    label: t('catalogue'),
    link: '/catalogue'
  }
  // {
  //   label: t(route.params.name),
  //   link: null
  // }
]

const brands = [
  { id: 1, name: 'Acer' },
  { id: 2, name: 'Bentley' },
  { id: 3, name: 'Casio' },
  { id: 4, name: 'Dell' },
  { id: 5, name: 'Elle' },
  { id: 6, name: 'Fujitsu' },
  { id: 7, name: 'Gucci' },
  { id: 8, name: 'Honda' },
  { id: 9, name: 'Ibanez' },
  { id: 10, name: 'Jaguar' },
  { id: 11, name: 'Kia' },
  { id: 12, name: 'Lexus' },
  { id: 13, name: 'Maserati' },
  { id: 14, name: 'Nike' },
  { id: 15, name: 'Oakley' },
  { id: 16, name: 'Porsche' },
  { id: 17, name: 'Quiksilver' },
  { id: 18, name: 'Rolex' },
  { id: 19, name: 'Samsung' },
  { id: 20, name: 'Toshiba' }
]
</script>

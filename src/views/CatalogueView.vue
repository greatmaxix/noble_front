<template>
  <div class="flex flex-col m-3 xl:m-5 text-lg">
    <FwbBreadcrumb>
      <FwbBreadcrumbItem home href="/">
        <h2 class="uppercase font-normal py-2">
          {{ $t('home') }}
        </h2>
      </FwbBreadcrumbItem>
      <FwbBreadcrumbItem href="/catalogue">
        <h2 class="uppercase font-normal py-2">
          {{ $t('catalogue') }}
        </h2>
      </FwbBreadcrumbItem>
      <FwbBreadcrumbItem>
        <h2 class="uppercase font-normal py-2">
        {{ $t($route.params.name) }}
        </h2>
      </FwbBreadcrumbItem>
    </FwbBreadcrumb>
    <div class="text-3xl mt-2">
      <h1 class="uppercase font-semibold py-2">
        {{ $t($route.params.name) }}
      </h1>
    </div>
    <div class="grid grid-cols-2 text-2xl my-3">
      <button type="button" class="flex w-50 mx-auto uppercase py-2 lg:hidden" v-on:click="openFilters = !openFilters">
        <AdjustmentsHorizontalIcon class="h-4 mt-1.5 mr-1"/>
        {{$t('filters')}}
      </button>
      <button type="button" class="flex w-50 mx-auto uppercase py-2">
        <Bars3BottomRightIcon class="h-4 mt-1.5 mr-1"/>
        {{$t('sort')}}
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
      <catalogue-item v-for="item in collectionItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :imageUrl="item.imgSrc"
        :price="item.price"
      >
      </catalogue-item>
    </div>
    </div>
  </div>
</template>

<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue';
import {useI18n} from "vue-i18n";
import {AdjustmentsHorizontalIcon, Bars3BottomRightIcon} from "@heroicons/vue/24/solid/index.js";
import meringa from '@/assets/meringa.jpg'
import meringa2 from '@/assets/meringa2.png'
import CatalogueItem from '@/components/CatalogueItem.vue';
import CatalogueFilter from '@/components/CatalogueFilter.vue';
import { ref } from 'vue';

const openFilters = ref(false);

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
      },
]

const brands = [
    { id: 1, name: "Acer" },
    { id: 2, name: "Bentley" },
    { id: 3, name: "Casio" },
    { id: 4, name: "Dell" },
    { id: 5, name: "Elle" },
    { id: 6, name: "Fujitsu" },
    { id: 7, name: "Gucci" },
    { id: 8, name: "Honda" },
    { id: 9, name: "Ibanez" },
    { id: 10, name: "Jaguar" },
    { id: 11, name: "Kia" },
    { id: 12, name: "Lexus" },
    { id: 13, name: "Maserati" },
    { id: 14, name: "Nike" },
    { id: 15, name: "Oakley" },
    { id: 16, name: "Porsche" },
    { id: 17, name: "Quiksilver" },
    { id: 18, name: "Rolex" },
    { id: 19, name: "Samsung" },
    { id: 20, name: "Toshiba" }
];

</script>

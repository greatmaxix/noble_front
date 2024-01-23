<template>
  <div>
    <Carousel/>
  </div>
  <div class="mt-20">
    <Collections
      :title="collectionItems[0].title"
      :items="collectionItems[0].items"
    />
  </div>
</template>
<script setup>
import Carousel from "@/components/Carousel.vue";
import Collections from "@/components/Collections.vue";
import {useI18n} from "vue-i18n";

import meringa from '@/assets/meringa.jpg'
import meringa2 from '@/assets/meringa2.png'

const { t } = useI18n();

const collectionItems = [
  {
    title: t('new_years_collections'),
    items: [
      {
        id: 1,
        brand: 'Brandani',
        description: 'Столовый сервиз на 12 персон',
        name: 'Meringa',
        price: 195200,
        oldPrice: 244000,
        imgSrc: meringa
      },
      {
        id: 2,
        brand: 'Brandani',
        description: 'Столовый сервиз на 12 персон Meringa',
        name: 'Meringa',
        price: 195200,
        oldPrice: 244000,
        imgSrc: meringa2
      },
      {
        id: 3,
        brand: 'Brandani',
        description: 'Столовый сервиз на 12 персон Meringa',
        name: 'Meringa',
        price: 195200,
        oldPrice: 244000,
        imgSrc: meringa2
      },
    ]
  }
]
</script>
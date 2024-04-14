<template>
  <div>
    <Carousel/>
  </div>
  <div class="mt-20">
    <Collections
      :title="collectionItems[0].title"
      :items="collectionItems[0].items"
    />
    <Materials class="py-10" :items="materialItems"/>
    <Collections
        class="mb-10"
        :title="collectionItems[1].title"
        :items="collectionItems[1].items"
    />
  </div>
</template>
<script setup>
import Carousel from "@/components/Carousel.vue";
import Collections from "@/components/Collections.vue";
import Materials from "@/components/Materials.vue";
import {useI18n} from "vue-i18n";

import meringa from '@/assets/meringa.jpg'
import meringa2 from '@/assets/meringa2.png'
import albatross from '@/assets/albatross.jpeg'
import citrus from '@/assets/citrus.jpeg'
import butterfly_ball from '@/assets/butterfly_ball.png'

import hrustal from '@/assets/hrustal.jpeg'
import mat_banner from '@/assets/mat_banner.jpeg'
import bokaly from '@/assets/bokaly.jpeg'

import serviz1 from '@/assets/serviz1.jpeg'
import serviz2 from '@/assets/serviz2.jpeg'
import serviz3 from '@/assets/serviz3.jpeg'
import serviz4 from '@/assets/serviz4.jpeg'

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
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Albatross»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: albatross
      },
      {
        id: 4,
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Citrus»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: citrus
      },
      {
        id: 4,
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Butterfly Ball»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: butterfly_ball
      },
    ]
  },
  {
    title: t('sets'),
    items: [
      {
        id: 1,
        brand: 'Brandani',
        description: 'Столовый сервиз на 12 персон',
        name: 'Meringa',
        price: 195200,
        oldPrice: 244000,
        imgSrc: serviz1
      },
      {
        id: 2,
        brand: 'Brandani',
        description: 'Столовый сервиз на 12 персон',
        name: 'Meringa',
        price: 195200,
        oldPrice: 244000,
        imgSrc: serviz2
      },
      {
        id: 3,
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Albatross»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: serviz3
      },
      {
        id: 4,
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Citrus»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: serviz4
      },
    ]
  }
]

const materialItems = [
  {
    id: 1,
    title: 'Хрусталь и стекло',
    name: 'Чайный набор - No Name',
    imgSrc: hrustal
  },
  {
    id: 2,
    banner: true,
    title: '',
    name: '',
    imgSrc: mat_banner
  },
  {
    id: 3,
    title: 'Бокалы на Новый год',
    name: 'Набор стаканов для воды/виски от Brandani',
    imgSrc: bokaly
  }
]
</script>
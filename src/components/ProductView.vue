<template>
  <div class="md:px-10 my-5">
    <breadcrumbs :items="breadcrumbItems"/>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div id="images-container" class="flex flex-col">
        <div class="w-100 md:w-[300px] 2xl:w-[700px] h-[500px] m-5">
          <div class="relative image-container" :style="{ backgroundImage: `url(${mainImage})` }">
          </div>
        </div>
        <div id="image-carousel" class="relative md:w-[300px] 2xl:w-[700px] mx-5">
          <div class="bg-gray-950 opacity-50 text-white absolute top-1/2 transform -translate-y-1/2 rounded">
            <ChevronDoubleLeftIcon class="h-7 cursor-pointer" @click="handleMoveLeft()"/>
          </div>
          <div ref="imageContainer" class="overflow-x-auto flex flex-nowrap items-start w-full no-scrollbar">
            <div v-for="pic in item.otherPictures" :key="pic" class="w-[180px] h-[150px] flex-none py-4 px-4 md:px-10">
              <div class="image-container cursor-pointer" :style="{ backgroundImage: `url(${pic})` }" @click="changeMainImage(pic)"/>
            </div>
          </div>
          <div class="bg-gray-950 opacity-50 text-white absolute top-1/2 transform -translate-y-1/2 right-0 rounded">
            <ChevronDoubleRightIcon class="h-7 cursor-pointer" @click="handleMoveRight()"/>
          </div>
        </div>
      </div>
      <div id="info-container" class="flex flex-col mx-5">
        <p class="brand-font font-bold">
          {{item.brand}}
        </p>
        <p class="product-name-font font-bold md:text-2xl">
          {{item.description}}
        </p>
        <p class="product-name-font md:text-2xl">
          {{item.name}}
        </p>
        <p class="md:text-xl my-4">
            <span>
              <span class="line-through">{{currencyFormatter().format(item.oldPrice)}}тг</span> | {{currencyFormatter().format(item.price)}}тг
            </span>
        </p>
        <PrimaryBtn class="p-4 align-bottom	uppercase font-semibold mt-3 xl:w-1/3" :title="$t('add_to_cart')"/>

        <div class="xl:w-1/3 mt-10 border-t-2 border-b-2 border-gray-950 p-1">
          Описание
        </div>
        <h2 class="p-1 font-semibold">
          История
        </h2>
        <p class="p-1 xl:w-1/3">
          Фарфор, выпускаемый фабрикой Tognana, подвергается тщательному лабораторному контролю, в сотрудничестве с Центром Керамики в Болонье и Экспериментальной Базой Стекла в Венеции. Отличные результаты тестов в индустриальных посудомоечных машинах, тестов на амбразивный и механический износ гарантируют высочайшее качество продукции. Глазури, в том числе те, которые используются для декорирования посуды, проходят проверку в «Управлении Еды и Лекарств» США и соответствуют строгим требованиям «Положения 65» о наличии тяжелых металлов.
        </p>

        <div class="xl:w-1/3 mt-3 md:mt-10 border-t-2 border-b-2 border-gray-950 p-1">
          Доставка
        </div>
      </div>
    </div>
    <Collections
        class="my-10"
        :title="collectionItems[0].title"
        :items="collectionItems[0].items"
    />
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/vue/24/solid/index.js";
import serviz1 from "@/assets/serviz1.jpeg";
import serviz2 from "@/assets/serviz2.jpeg";
import serviz3 from "@/assets/serviz3.jpeg";
import serviz4 from "@/assets/serviz4.jpeg";
import {currencyFormatter} from "@/utils.js";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import Collections from "@/components/Collections.vue";

export default defineComponent({
  components: {Collections, PrimaryBtn, Breadcrumbs,ChevronDoubleRightIcon,ChevronDoubleLeftIcon},
  data() {
    return {
      item: {
        id: 4,
        brand: 'Tognana',
        description: 'Cтоловый сервиз на 6 персон',
        name: '«Citrus»',
        price: 90000,
        oldPrice: 81000,
        imgSrc: serviz4,
        otherPictures: [
            serviz1, serviz2, serviz3,serviz1, serviz2, serviz3, serviz1, serviz2, serviz3,serviz1, serviz2, serviz3
        ]
      },
      mainImage: null,
      collectionItems: [
        {
          title: this.$t('sets'),
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
    }
  },
  computed: {
    breadcrumbItems() {
      return [
        {
          label: this.item.description,
          link: this.$route
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    this.mainImage = this.item.imgSrc
  },
  methods: {
    currencyFormatter,
    handleMoveLeft() {
      const container = this.$refs.imageContainer;
      container.scrollTo({
        left: container.scrollLeft - container.clientWidth / 3,
        behavior: 'smooth',
      });
    },
    handleMoveRight() {
      const container = this.$refs.imageContainer;
      container.scrollTo({
        left: container.scrollLeft + container.clientWidth / 3,
        behavior: 'smooth',
      });
    },
    changeMainImage(url) {
      this.mainImage = url
    }
  },
})

</script>
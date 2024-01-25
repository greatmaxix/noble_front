<template>
  <div class="md:px-10 my-5">
    <breadcrumbs :items="breadcrumbItems"/>
    <div class="mt-10">
      <h1 class="text-4xl font-light text-center">{{$t('cart')}}</h1>
      <div class="flex">
        <div class="grid grid-cols-4 w-3/4 border border-gray-650 pb-[100px]">
          <h2 class="text-xl font-light text-center p-4">
            Товар
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            Количество
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            Цена
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            Доступность в магазинах
          </h2>

          <div class="col-span-4 border-b border-gray-650 mx-10 mt-5"/>

          <div class="m-10 flex flex-col items-center justify-center">
            <div class="relative image-container-noh w-[220px] h-[170px]" :style="{ backgroundImage: `url(${item.imgSrc})` }">
            </div>
            <p class="font-light text-sm">{{item.name}}</p>
          </div>

          <div class="flex justify-center items-center text-xl font-light">
            <p class="mr-4">{{item.quantity}}</p>
            <PlusCircleIcon class="h-8"/>
            <MinusCircleIcon class="h-8 text-gray-500"/>
          </div>

          <div class="flex flex-col items-center justify-center font-light">
            <p class="line-through text-lg">{{currencyFormatter().format(item.oldPrice)}}ТГ</p>
            <p class="mt-3 text-2xl">{{currencyFormatter().format(item.newPrice)}}ТГ</p>
          </div>

          <div class="m-10 flex flex-col items-center justify-center text-lg font-light">
            г.Алматы , Самал 2, дом 52
            вход со сторы Аль-Фараби
          </div>
        </div>
        <div class="border border-gray-650 w-1/4 ml-3 grid grid-cols-2 flex-none shrink">
          <h2 class="text-xl font-light text-center p-4">
            Всего
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            {{currencyFormatter().format(item.oldPrice)}}ТГ
          </h2>

          <h2 class="text-xl font-light text-center p-4">
            Скидка
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            {{currencyFormatter().format(10000)}}ТГ
          </h2>

          <div class="col-span-2 border-b border-gray-650 mx-10 mt-5"/>

          <h2 class="text-xl font-light text-center p-4">
            Итого
          </h2>
          <h2 class="text-xl font-light text-center p-4">
            {{currencyFormatter().format(item.newPrice)}}ТГ
          </h2>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import serviz2 from "@/assets/serviz2.jpeg";
import {FwbImg} from "flowbite-vue";
import {PlusCircleIcon, MinusCircleIcon} from "@heroicons/vue/24/outline/index.js";
import {currencyFormatter} from "@/utils.js";

export default defineComponent({
  methods: {currencyFormatter},
  components: {FwbImg, Breadcrumbs,PlusCircleIcon,MinusCircleIcon},
  data() {
    return {
      item: {
        id: 4,
        name: 'Столовый сервиз на 6 персон “Flora” от  Tognana',
        quantity: 1,
        oldPrice: 110000,
        newPrice: 90000,
        imgSrc: serviz2
      },
    }
  },
  computed: {
    breadcrumbItems() {
      return [
        {
          label: this.$t('cart'),
          link: this.$route
        }
      ]
    }
  },
})

</script>
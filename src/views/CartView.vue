<template>
  <div class="md:px-10 my-5">
    <breadcrumbs :items="breadcrumbItems"/>
    <div class="mt-10">
      <h1 class="text-3xl font-light text-center my-5">{{$t('cart')}}</h1>
      <div class="flex flex-col xl:flex-row">
        <!-- Mobile view -->
        <div class="xl:hidden flex flex-col border border-gray-650 p-4">
          <div class="m-5 flex flex-col items-center justify-center">
            <div class="relative image-container-noh w-[220px] h-[170px]" :style="{ backgroundImage: `url(${item.imgSrc})` }">
            </div>
            <p class="font-light text-sm">{{item.name}}</p>
          </div>
          <div class="flex justify-center items-center text-xl font-light">
            <MinusCircleIcon class="h-8 text-gray-500"/>
            <p class="mx-4">{{item.quantity}}</p>
            <PlusCircleIcon class="h-8"/>
          </div>

          <div class="flex flex-col items-center justify-center font-light mt-3">
            <p class="line-through text-lg">{{currencyFormatter().format(item.oldPrice)}}ТГ</p>
            <p class="mt-1 text-2xl">{{currencyFormatter().format(item.newPrice)}}ТГ</p>
          </div>

          <div class="m-2 flex flex-col items-center justify-center text-lg font-light">
            г.Алматы , Самал 2, дом 52
            вход со сторы Аль-Фараби
          </div>
        </div>
        <!-- Desktop view -->
        <div class="hidden xl:grid grid-cols-4 xl:w-4/5 border border-gray-650 pb-[100px]">
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
        <div class="xl:w-1/5 xl:ml-3 h-full flex flex-col">
          <div class="grid grid-cols-2 border border-gray-650">
            <h2 class="text-xl font-light text-center px-4 py-2">
              Всего
            </h2>
            <h2 class="text-xl font-light text-center px-4 py-2">
              {{currencyFormatter().format(item.oldPrice)}}ТГ
            </h2>

            <h2 class="text-xl font-light text-center px-4 py-2">
              Скидка
            </h2>
            <h2 class="text-xl font-light text-center px-4 py-2">
              {{currencyFormatter().format(10000)}}ТГ
            </h2>

            <div class="col-span-2 border-b border-gray-650 mx-10 mt-2"/>

            <h2 class="text-xl font-light text-center px-4 py-2">
              Итого
            </h2>
            <h2 class="text-xl font-light text-center px-4 py-2">
              {{currencyFormatter().format(item.newPrice)}}ТГ
            </h2>

            <PrimaryBtn class="col-span-2 w-auto mx-auto px-5 mx-5 py-3 my-3" @click="$router.push({name: 'order', params: {id: 1505}})">Оформить заказ</PrimaryBtn>
          </div>

          <PrimaryBtn class="col-span-2 w-auto xl:w-full mx-auto px-5 mx-5 py-3 my-3">
            <span class="flex items-center justify-center gap-2">Информация о доставке<ChevronDownIcon class="h-5"/></span>
          </PrimaryBtn>

          <PrimaryBtn class="col-span-2 w-auto xl:w-full mx-auto px-5 mx-5 py-3 my-3">
            <span class="flex items-center justify-center gap-2">Информация о возврате<ChevronDownIcon class="h-5"/></span>
          </PrimaryBtn>

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
import {PlusCircleIcon, MinusCircleIcon, ChevronDownIcon} from "@heroicons/vue/24/outline/index.js";
import {currencyFormatter} from "@/utils.js";
import PrimaryBtn from "@/components/PrimaryBtn.vue";

export default defineComponent({
  methods: {currencyFormatter},
  components: {PrimaryBtn, FwbImg, Breadcrumbs,PlusCircleIcon,MinusCircleIcon,ChevronDownIcon},
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
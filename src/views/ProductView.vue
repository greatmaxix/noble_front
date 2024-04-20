<template>
  <Transition name="link-transition" mode="out-in" v-if="item">
    <div class="md:px-10 my-5 mx-1">
      <breadcrumbs :items="breadcrumbItems" />
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div id="images-container" class="flex flex-col md:col-span-2 drop-shadow-lg">
          <div class="w-100 lg:m-5">
            <img class="card-image h-[500px]"
              :src="getImgUrl(getImageByIndex(imageIndex))"
              :alt="item.name"
            />
          </div>
          <div id="image-carousel" class="relative md:mx-5">
            <div
              class="bg-gray-950 opacity-50 text-white absolute top-1/2 transform -translate-y-1/2 rounded"
            >
              <ChevronDoubleLeftIcon class="h-7 cursor-pointer" @click="handleMoveLeft()" />
            </div>
            <div
              ref="imageContainer"
              class="overflow-x-auto flex flex-nowrap items-start w-full no-scrollbar"
            >
              <div
                v-for="pic, index in item.images"
                :key="pic"
                class="flex-none"
              >
                <img class="card-image cursor-pointer w-[100px] h-[100px] p-1"
                  :src="getImgUrl(pic.image)"
                  :alt="item.name"
                  @click="imageIndex = index"
                />
              </div>
            </div>
            <div
              class="bg-gray-950 opacity-50 text-white absolute top-1/2 transform -translate-y-1/2 right-0 rounded"
            >
              <ChevronDoubleRightIcon class="h-7 cursor-pointer" @click="handleMoveRight()" />
            </div>
          </div>
        </div>
        <div id="info-container" class="flex flex-col md:mx-5 text-center md:text-start text-lg">
          <h1 class="font-thin text-2xl md:text-3xl">
            {{ item.name }}
          </h1>
          <p class="font-thin">
            {{ item.brand }}
          </p>
          <div class="my-5 border-t-2 border-b-2 font-semibold border-gray-950 p-1">
            {{ $t('description') }}
          </div>
          <h2>
            {{ item.description }}
          </h2>
          <p class="my-4 self-center text-4xl">
            <template v-if="item.newPice">
              <span>
                <span class="line-through">{{ currencyFormatter().format(item.oldPrice) }}тг</span> |
                {{ currencyFormatter().format(item.price) }}тг
              </span>
            </template>
            <template v-else>
              <span>
                {{ currencyFormatter().format(item.oldPrice) }}тг
              </span>
            </template>
          </p>
          <PrimaryBtn class="p-4 align-bottom uppercase self-center font-semibold mt-3 xl:w-2/3">
            {{ $t('add_to_cart') }}
          </PrimaryBtn>

          <div class="my-5 border-t-2 border-b-2 font-semibold border-gray-950 p-1">
            {{ $t('history') }}
          </div>
          <p class="p-1">
            {{ item.history }}
          </p>
        </div>
      </div>
      <Collections
        v-if="item.productions"
        class="my-10"
        :title="collectionItems[0].title"
        :items="collectionItems[0].items"
      />
    </div>
  </Transition>
</template>

<script>
import { defineComponent } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/24/solid/index.js'
import { currencyFormatter, getImgUrl } from '@/utils.js'
import PrimaryBtn from '@/components/PrimaryBtn.vue'
import Collections from '@/components/Collections.vue'
import api from '@/api'

const GET_ONE_URL = '/ww/getProductionById/'

export default defineComponent({
  components: {
    Collections,
    PrimaryBtn,
    Breadcrumbs,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon
  },
  data() {
    return {
      item: null,
      mainImage: null,
      imageIndex: 0
    }
  },
  computed: {
    breadcrumbItems() {
      return [
        {
          label: this.item.name,
          link: this.$route
        }
      ]
    }
  },
  mounted() {
    try {
      const searchParams = new URLSearchParams()
      searchParams.append('type', this.$route.params.type)
      searchParams.append('productionId', this.$route.params.id)

      api.get(`${GET_ONE_URL}?${searchParams.toString()}`).then((response) => {
        this.item = response.data
      })
    } catch (error) {
      console.error('Error fetching item:', error)
    }
  },
  methods: {
    currencyFormatter,
    getImgUrl,
    handleMoveLeft() {
      const container = this.$refs.imageContainer
      container.scrollTo({
        left: container.scrollLeft - container.clientWidth / 3,
        behavior: 'smooth'
      })
    },
    handleMoveRight() {
      const container = this.$refs.imageContainer
      container.scrollTo({
        left: container.scrollLeft + container.clientWidth / 3,
        behavior: 'smooth'
      })
    },
    changeMainImage(url) {
      this.mainImage = url
    },
    getImageByIndex(index) {
      if (!this.item.images) return null

      const sorted = this.item.images.sort((a, b) => a.order - b.order)
      return sorted[index].image
    }
  },
})
</script>
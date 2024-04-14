<template>
  <div class="h-[520px]">
    <Transition name="link-transition"  mode="out-in">
      <div class="relative image-container" :style="{ backgroundImage: `url(${currentPic.src})` }">
        <div class="absolute bottom-0 w-full">
          <!-- Your content goes here -->
          <div class="ml-10 mb-10 flex justify-between">
            <PrimaryBtn
              class="self-end p-5 capitalize text-2xl"
              @click="handleMoreInfoClick(currentPic)"
            >
              {{$t('more_info')}}
            </PrimaryBtn>
            <FwbImg class="hidden md:block self-end max-w-[35rem] max-h-[20rem]" :alt="currentPic.alt" :src="currentPic.brand_src"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import main from '@/assets/main.jpeg'
import wedgwood from '@/assets/wedgwood.png'
import {ref, onMounted, onUnmounted} from "vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import {FwbImg} from "flowbite-vue";
import {useRouter} from "vue-router";

const router = useRouter()

const pictures = [
  {
    src: main,
    brand_src: wedgwood,
    alt: 'Some dish alt again'
  },
]

let carouselIndex = 0
let interval = null


let currentPic = ref(pictures[carouselIndex])

function createCarouselInterval() {
  interval = setInterval(() => {
    if (carouselIndex < pictures.length - 1) {
      carouselIndex += 1
    } else {
      carouselIndex = 0
    }
    currentPic.value = pictures[carouselIndex];
  }, 5000)
}

onMounted(() => {
  createCarouselInterval()
})

onUnmounted(() => {
  clearInterval(interval)
})

function handleMoreInfoClick(picObj) {
  console.log('handle more info clicked')
  router.push({name: 'product', params: {id: 123}})
}
</script>

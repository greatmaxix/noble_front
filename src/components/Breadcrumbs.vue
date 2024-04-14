<template>
  <fwb-breadcrumb class="font-thin mx-5 text-xs md:text-xl">
    <FwbA href="/">
      {{$t('main_page')}}
    </FwbA>
    <span class="flex ml-0" v-for="item in items" :key="item.link">
      <FwbA :href="item.link">
        / {{item.label}}
      </FwbA>
    </span>
  </fwb-breadcrumb>
</template>
<script>
import {FwbA, FwbBreadcrumb, FwbBreadcrumbItem} from "flowbite-vue";
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    items: {
      required: true,
      default: []
    }
  },

  components: {
    FwbA,
    FwbBreadcrumb, FwbBreadcrumbItem
  }
})
</script>
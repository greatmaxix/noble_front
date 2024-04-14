<template>
  <fwb-breadcrumb class="font-thin md:mx-5 md:text-3xl">
    <FwbA href="/">
      {{$t('main_page')}}
    </FwbA>
    <span class="flex ml-0" v-for="item in items" :key="item.label">
      <FwbA v-if="item.link" :href="item.link">
        / {{item.label}}
      </FwbA>
      <p v-else>
        / <span class="font-normal">{{item.label}}</span>
      </p>
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
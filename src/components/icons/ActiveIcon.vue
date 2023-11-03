<template>
  <IconWrapper :width="width" :height="height" :fill="'#65b604'">
   <circle :cx="width" :cy="height" r="9"></circle>
  </IconWrapper>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import IconWrapper from "@/components/icons/Icon.vue";

export default defineComponent({
  name: 'LayersIcon',
  components: {IconWrapper},
  props: {
    width: {
      type: Number,
      default: 10,
      required: false
    },
    height: {
      type: Number,
      default: 10,
      required: false
    }
  }
})
</script>

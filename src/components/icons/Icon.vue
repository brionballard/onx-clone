<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :fill="fill"
      :viewBox="'0 0 ' + width + ' ' + height">
    <slot>
      <!--   SVG path data   -->
    </slot>
  </svg>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'IconWrapper',
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
    },
    fill: {
      type: String,
      default: "none",
      required: false
    }
  }
})
</script>

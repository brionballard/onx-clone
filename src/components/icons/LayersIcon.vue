<template>
  <IconWrapper :width="width" :height="height">
    <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M9.933.983a.848.848 0 0 1 .734 0l9.05 4.341a.849.849 0 0 1 0 1.53l-9.05 4.341a.849.849 0 0 1-.734 0L.882 6.855a.849.849 0 0 1 0-1.53L9.932.982ZM3.21 6.09l7.089 3.4 7.089-3.4-7.09-3.4-7.088 3.4Z"
        clip-rule="evenodd">
    </path>
    <path
        fill="currentColor"
        d="M.484 10.063a.849.849 0 0 1 1.132-.398L10.3 13.83l8.684-4.165a.849.849 0 0 1 .734 1.53l-9.051 4.341a.848.848 0 0 1-.734 0l-9.051-4.34a.848.848 0 0 1-.398-1.133Z">
    </path>
    <path
        fill="currentColor"
        d="M1.616 14.006a.849.849 0 0 0-.734 1.53l9.051 4.341a.848.848 0 0 0 .734 0l9.051-4.34a.849.849 0 1 0-.734-1.53L10.3 18.17l-8.684-4.165Z">
    </path>
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
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  }
})
</script>

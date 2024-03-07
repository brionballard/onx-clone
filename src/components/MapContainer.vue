<template>
    <div ref="mapContainer"></div>
</template>

<script setup lang="ts">
    import { ref} from 'vue';
    import {Map} from "mapbox-gl";

    const initializedMap = ref<typeof Map | null>(null);

    (() => {
      return initializedMap;
    })();
</script>

<template>
  <div class="map-control-container">
    <MapSearchBar />
    <LayersButton />
  </div>
</template>

<script setup lang="ts">
import MapSearchBar from "@/components/controls/MapSearchBar.vue";
import LayersButton from "@/components/controls/LayersButton.vue";
</script>

<style scoped>
.map-control-container {
  position: absolute;
  pointer-events: none;
  top: 20px;
  right: 20px;
  left: 120px;
  margin: 0 -10px;
  display: flex;
  gap: 8px;
}
</style>

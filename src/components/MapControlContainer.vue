<template>
  <div class="map-control-container">
    <MapSearchBar />
    <LayersButton />
  </div>
</template>

<script lang="ts">
import MapSearchBar from "@/components/controls/MapSearchBar.vue";
import {defineComponent} from "vue";
import LayersButton from "@/components/controls/LayersButton.vue";
export default defineComponent({
  name: 'MapControlContainer',
  components: {LayersButton, MapSearchBar}
});
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
}
</style>

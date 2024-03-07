<template>
  <div ref="userLoc" class="user-location-button">
    <button @click="centerOnUser">
      <CrossHairIcon/>
    </button>
  </div>
</template>

<script setup lang="ts">
import CrossHairIcon from './icons/CrossHairIcon.vue';
import type { LngLatLike } from 'mapbox-gl';
const emit = defineEmits(['centerMapOnUser'])
const centerOnUser = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation: typeof LngLatLike = {
        lng: position.coords.longitude,
        lat: position.coords.latitude
      };
      emit('centerMapOnUser', userLocation);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};
</script>

<style scoped>
.user-location-button {
  width: 45px;
  height: 45px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: white;
  overflow: hidden;
  border-radius: 8px;
  z-index: 0;
  display: flex;
}

.user-location-button button {
  margin: auto;
  border: none;
  padding-top: 4px;
  background-color: transparent;
  height: 100%;
  width: 100%;
}
</style>

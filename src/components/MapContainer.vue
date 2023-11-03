<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {useMapConfig} from "@/composables/useMapConfig";
import mapboxgl from "mapbox-gl";
export default defineComponent({
  name: 'MapContainer',
  setup() {
    const mapContainer = ref<HTMLDivElement | null>(null);
    const { center, zoom, mapStyle, setCenter } = useMapConfig()

    onMounted(() => {
      const defaultLatitude: number = 39.50; // default to somewhere, e.g., the geographic center of the US
      const defaultLongitude: number = -98.35;

      // Check if the geolocation API is available in the browser
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
              // Successfully retrieved the position
              const { latitude, longitude } = position.coords;
              setCenter({lng: longitude, lat: latitude})
              initMap();
            },
            () => {
              setCenter({lng: defaultLongitude, lat: defaultLatitude })
              initMap();
            }
        );
      } else {
        setCenter({lng: defaultLongitude, lat: defaultLatitude})
        initMap();
      }
    });

    function initMap() {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

      new mapboxgl.Map({
        container: mapContainer.value!, // Container ID
        style: mapStyle.value, // Map style to use
        center: [center.value.lng, center.value.lat], // Starting position [lng, lat]
        zoom: zoom.value // Starting zoom level
      });
    }

    return {
      mapContainer
    };
  }
});
</script>

<style>
.map-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
}
</style>

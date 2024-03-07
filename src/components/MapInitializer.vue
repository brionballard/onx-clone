<template>
  <div ref="map" class="map"></div>
  <MapContainer :initializedMap="mapContainer"/>
  <UserLocationButton @centerMapOnUser="centerMapOnUser"/>
  <ZoomControl @changeZoom="changeZoom" />
  <MapControlContainer />
</template>

<script setup lang="ts">
import mapboxgl, { LngLatLike, Map, MapMouseEvent, Marker } from 'mapbox-gl';
import { ref } from 'vue';
import MapContainer from './MapContainer.vue';
import UserLocationButton from './UserLocation.vue';
import MapControlContainer from './MapControlContainer.vue';
import ZoomControl from "@/components/controls/ZoomControl.vue";

const defaultZoom = 15;
let zoom = ref(defaultZoom);

const mapContainer = ref<typeof Map | null>(null);
let userMarker: typeof Marker | null = null;

const centerMapOnUser = (userLocation: typeof LngLatLike) => {
  if (mapContainer.value) {
    mapContainer.value.setCenter([userLocation.lng, userLocation.lat]);
    mapContainer.value.setZoom(16);
    updateUserMarker(userLocation);
  }
};

const updateUserMarker = (userLocation: typeof LngLatLike) => {
  // Remove existing marker if present
  if (userMarker) {
    userMarker.remove();
  }

  // Create a new marker at the user's location
  userMarker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([userLocation.lng, userLocation.lat])
      .addTo(mapContainer.value!); // Add the marker to the map
};

const getDefaultUserLocation = async () => {
  if (navigator?.geolocation) {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  } else {
    // Return default coordinates if geolocation is not available
    return {
      coords: {
        latitude: 40.7128, // Default to New York City latitude
        longitude: -74.0060, // Default to New York City longitude
      }
    } as GeolocationPosition;
  }
};

const changeZoom = (increase: boolean) => {
  let current: number = mapContainer.value!.getZoom();
  const newZoom: number = increase ? current += 1 : current -= 1;

  mapContainer.value!.setZoom(newZoom)
};

import.meta.env.VITE_MAPBOX_KEY && (mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY);

// Mount
(async () => {
  try {
    const userPosition = await getDefaultUserLocation();
    const userLocation = {
      lng: userPosition.coords.longitude,
      lat: userPosition.coords.latitude
    };

    mapContainer.value = new mapboxgl.Map({
      container: document.querySelector('.map'),
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [userLocation.lng, userLocation.lat], // Set the map center to the user's location
      zoom: defaultZoom, // Adjust the zoom level as needed
    });

    updateUserMarker(userLocation);
  } catch (error: any) {
    console.log(error);
  }

  const handleMapClick = (e: typeof MapMouseEvent) => {
    console.log(e);
  };

  mapContainer.value!.on('click', handleMapClick);
})();
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 0;
}
</style>


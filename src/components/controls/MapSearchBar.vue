<template>
  <div class="search-control">
    <button class="search-button">
      <SearchIcon />
    </button>
    <input type="text" class="map-search" placeholder="Search"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

export default defineComponent({
  name: 'MapSearchBar',
  components: {SearchIcon}
})
</script>

<style>
.search-control {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 10px;
  pointer-events: all;
  user-select: none;
  width: var(--card-width);
  background: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.search-button {
  background: transparent;
  border: none;
  padding-left: 12px;
  padding-right: 12px;
}

.map-search {
  height: 45px;
  width: var(--card-width);
  border: none;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 14px;
  user-select: none;
}

.map-search:focus {
  outline: none;
}


</style>

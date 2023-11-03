<template>
  <div class="layer-button-container">
    <button>
      <div class="lb-svg-container">
        <LayersIcon />
      </div>
      <div class="text-container">
        <span>
          Hunt Map
        </span>
        <h4>Layers</h4>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LayersIcon from "@/components/icons/LayersIcon.vue";

export default defineComponent({
  name: 'LayersButton',
  components: {LayersIcon}
});
</script>

<style>
.layer-button-container {
  position: relative;
  display: inline-block;
  height: 50px;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.layer-button-container button {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  height: 100%;
  background: white;
  border: none;
  padding: 8px 13px 8px 6px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 10;
  pointer-events: all;
}

.lb-svg-container {
  background: #f30;
  width: 31px;
  height: 31px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
}

.text-container {
  padding: 8px;
  text-align: left;
}

.text-container span {
  font-weight: 400;
  font-size: .6875rem;
  letter-spacing: .0475rem;
}

.text-container h4 {
  font-weight: 900;
  font-size: 1.125rem;;
}
</style>

<template>
  <div class="layer-button-container">
    <transition name="slideFade">
      <button v-if="!isOpen" @click="toggle">
        <div class="lb-svg-container">
          <LayersIcon :height="20" :width="20" />
        </div>
        <div class="text-container">
        <span>
          Hunt Map
        </span>
          <h4>Layers</h4>
        </div>
      </button>
    </transition>

  </div>
  <ActionPanel :open="isOpen" :setOpen="toggle">
    <header>

    </header>
    <h2 class="header">Map Layers</h2>

    <div class="layers-container">
      <div class="layer-preview">
<!--    Render All Layers     -->

        <div v-for="layer in layers" :key="layer.name" class="layer">
          <h3>{{ layer.name }}</h3>
          <div class="layer-summary">
            <div class="layer-summary details">
              <ActiveIcon :width="12" :height="12" v-if="layer.active"/>
              <LayersIcon :height="20" :width="20" />
              <p>{{layer.activeLayers}} of {{layer.totalLayers}} Layers On</p>
            </div>
            <div>
              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ActionPanel>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LayersIcon from "@/components/icons/LayersIcon.vue";
import ActionPanel from "@/components/ActionPanel.vue";
import ActiveIcon from "@/components/icons/ActiveIcon.vue";
import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";

const layers = [
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    active: true,
    totalLayers: 5,
    activeLayers: 1,
    availableLayers: [
      {
        name: 'Private Lands',
        active: false,
        availableLayers: []
      },
      {
        name: 'Gov Lands',
        active: true,
        availableLayers: []
      },
      {
        name: 'Possible Access',
        active: false,
        availableLayers: []
      },
      {
        name: 'Hunt Zones',
        active: false,
        availableLayers: []
      },
      {
        name: 'WRICE',
        active: false,
        availableLayers: []
      }
    ]
  }
]

export default defineComponent({
  name: 'LayersButton',
  components: {RightArrowIcon, ActiveIcon, ActionPanel, LayersIcon},
  data() {
    return {
      isOpen: false,
      layers
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
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
  padding: 8px 15px 8px 8px;
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

.layers-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 20px 0;
  height: auto;
  max-height: calc((90vh - calc(var(--card-top-offset) + var(--card-banner-offset)) + var(--card-bottom-offset)));
  overflow-y: auto;
}

.layer-preview {
  background-color: #F5F5F5;
  padding: 12px;
  border-radius: 10px;
}

.layer-preview h3 {
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.25;
}

.layer-summary {
  color: #333;
  display: flex;
  flex-direction: row;
  gap: 2px;
  font-size: .675rem;
  align-items: center;
  justify-content: space-between;
}

.layer-summary .details {
  color: #333;
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: .675rem;
  align-items: center;
  justify-content: space-between;
}
</style>

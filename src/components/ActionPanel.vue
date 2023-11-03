<template>
  <transition name="slideFade">
    <div v-if="open" class="action_panel">
      <header>
        <div class="masthead">
          <button class="close-action" @click="setOpen(!open)">
            <XIcon />
          </button>
        </div>
      </header>
      <slot>
        <!--   Children   -->
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import XIcon from "@/components/icons/XIcon.vue";

export default defineComponent({
  name: 'ActionPanel',
  components: {XIcon},
  props: {
    open: {
      type: Boolean,
      required: true
    },
    setOpen: {
      type: Function,
      required: true
    }
  },
})
</script>

<style>
.action_panel {
  --card-top-offset: 75px;
  --card-bottom-offset: 20px;
  --card-banner-offset: 0px;
  --card-expanded-width: 750px;
  display: flex;
  flex-direction: column;
  z-index: 200;
  background-color: white;
  width: var(--card-width);
  box-shadow: var(--shadow);
  border-radius: 10px;
  position: absolute;
  top: calc(var(--card-top-offset) + var(--card-banner-offset) - 15px);
  left: 10px;
  padding: 20px;
  height: auto;
  max-height: calc((90vh - calc(var(--card-top-offset) + var(--card-banner-offset)) + var(--card-bottom-offset)));
  pointer-events: all;
}

.masthead {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.close-action {
  color: #333;
  height: 25px;
  width: 25px;
  background: transparent;
  border: none;
}

</style>

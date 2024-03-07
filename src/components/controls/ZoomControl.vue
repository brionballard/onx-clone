<template>
  <div class="zoom-button-container">
    <button class="zoom-button" @click="$emit('changeZoom', true)">+</button>
    <button class="zoom-button"  @click="$emit('changeZoom', false)">-</button>
  </div>
</template>

<style>
.zoom-button-container {
  position: fixed;
  bottom: 80px;
  right: 20px;
}

.zoom-button {
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}
</style>

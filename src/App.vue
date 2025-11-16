<template>
  <div id="cesiumContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCesium } from './hooks/useCesium';

// 使用 hook
const { initViewer, viewer } = useCesium();

onMounted(() => {
  // 在 DOM 挂载后初始化 Viewer
  initViewer({
    containerId: 'cesiumContainer',
  });

  // 初始化后可以访问 viewer
  console.log('Cesium Viewer:', viewer.value);
});
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
</style>

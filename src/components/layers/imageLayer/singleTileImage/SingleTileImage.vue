<template>
  <div id="cesiumContainer" class="w-100% h-100vh"></div>
</template>

<script setup lang="ts">
import { useCesium } from '@/hooks/useCesium';
import * as Cesium from 'cesium';

const { initViewer, destory, viewer } = useCesium();

onMounted(() => {
  initViewer({
    containerId: 'cesiumContainer',
    forceCreate: true,
  });

  nextTick(() => {
    updateImageLayer();
  });
});
const updateImageLayer = () => {
  if (!viewer.value) return;
  if (!viewer.value) return;
  const imageryProvider = new Cesium.SingleTileImageryProvider({
    url: '../images/image2.jpg',
    id: 'image1',
  });
  viewer.value.imageryLayers.addImageryProvider(imageryProvider);
};

onUnmounted(() => {
  destory();
});
</script>

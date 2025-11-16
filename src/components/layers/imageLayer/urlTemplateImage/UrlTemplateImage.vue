<template>
  <div id="cesiumContainer" class="w-100% h-100vh"></div>
</template>

<script setup lang="ts">
import { useCesium } from '@/hooks/useCesium';
import * as Cesium from 'cesium';
interface Props {
  type: 'image' | 'tms';
}

const props = defineProps<Props>();

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
  viewer.value.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(110, 35, 10000000),
  });
  const xyz = new Cesium.UrlTemplateImageryProvider({
    credit: 'riv_m',
    url: 'http://39.107.182.155:9000/tserver/wmts.ashx?r={y}&c={x}&l={z}&t=riv_m',
  });
  viewer.value.imageryLayers.addImageryProvider(xyz);
};

onUnmounted(() => {
  destory();
});
</script>



<template>
<div id="cesiumContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Viewer,Ion ,SceneMode} from 'cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3N2QzMDM3Yy1lNTcwLTQ5YTktODg0Yy01ZDg4NzIwYjQxNTkiLCJpZCI6MzYwNTU1LCJpYXQiOjE3NjMxNzc0NTZ9.0efxBLC2furS_N97Z3_oM7KN-pK29ek7tLil1rNWrTE';
onMounted(() => {
  window._viewer = new Viewer('cesiumContainer', {
    sceneMode: SceneMode.SCENE3D,
    animation: false,
    baseLayerPicker: false,
    geocoder: false,
    timeline: false,
    navigationHelpButton: false,

  });
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

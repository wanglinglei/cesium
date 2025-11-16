<template>
  <div :id="containerId" class="w-100% h-100vh"></div>
</template>

<script setup lang="ts">
import { useCesium } from '@/hooks/useCesium';
import type * as Cesium from 'cesium';

interface Props {
  containerId?: string;
  options?: Cesium.Viewer.ConstructorOptions;
}

const props = withDefaults(defineProps<Props>(), {
  containerId: 'cesiumContainer',
  options: () => ({}),
});

const { initViewer, destory, viewer } = useCesium();

// 监听 containerId 变化，清理旧实例
watch(
  () => props.containerId,
  (newId, oldId) => {
    if (oldId && newId !== oldId) {
      destory();
    }
  },
);

onMounted(() => {
  // 确保在初始化前先清理可能存在的旧实例
  nextTick(() => {
    initViewer({
      containerId: props.containerId,
      forceCreate: true,
      options: props.options,
    });
  });
});

onBeforeUnmount(() => {
  // 在组件卸载前先销毁 viewer
  destory();
});
</script>

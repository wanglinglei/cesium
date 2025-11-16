import type { Meta, StoryObj } from '@storybook/vue3';
import SingleTileImage from './SingleTileImage.vue';

const meta = {
  title: '图层/影像/单个图片图层',
  component: SingleTileImage,
  tags: ['autodocs'],
} satisfies Meta<typeof SingleTileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleTileImage_Default: Story = {
  parameters: {
    docs: {
      title: '单个图片图层',
      description: {
        story: '单张图片图层示例 - 使用 SingleTileImageryProvider 加载单张图片作为图层',
      },
      source: {
        language: 'vue',
        code: `<template>
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
`,
      },
    },
  },
};

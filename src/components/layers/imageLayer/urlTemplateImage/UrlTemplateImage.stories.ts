import type { Meta, StoryObj } from '@storybook/vue3';
import UrlTemplateImage from './UrlTemplateImage.vue';

const meta = {
  title: '图层/影像/TMS 图层',
  component: UrlTemplateImage,
  tags: ['autodocs'],
} satisfies Meta<typeof UrlTemplateImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UrlTemplateImage_Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'TMS 图层示例 - 使用 UrlTemplateImageryProvider 加载 TMS 瓦片服务',
      },
      source: {
        code: `<template>
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
`,
      },
    },
  },
};

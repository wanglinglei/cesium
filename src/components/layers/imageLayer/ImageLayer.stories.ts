import type { Meta, StoryObj } from '@storybook/vue3';
import ImageLayer from './ImageLayer.vue';

const meta = {
  title: 'Layers/ImageLayer',
  component: ImageLayer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ImageLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '这是一个基础的 Cesium 图层组件示例',
      },
    },
  },
};

import type { Meta, StoryObj } from '@storybook/vue3';
import UseCesium from './useCesium.vue';

const meta = {
  title: 'Components/UseCesium',
  component: UseCesium,
  tags: ['autodocs'],
  argTypes: {
    containerId: {
      control: 'text',
      description: '容器元素的唯一 ID',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cesiumContainer' },
      },
    },
    options: {
      control: 'object',
      description: 'Cesium Viewer 配置选项',
      table: {
        type: { summary: 'Cesium.Viewer.ConstructorOptions' },
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '基础的 Cesium Viewer 组件，使用 useCesium hook 初始化 Cesium 三维地球视图。这是所有 Cesium 应用的基础组件。',
      },
    },
  },
} satisfies Meta<typeof UseCesium>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 带自定义配置的 Cesium Viewer
 *
 * 展示如何通过 options 参数自定义 Viewer 的配置
 */
export const WithCustomOptions: Story = {
  args: {
    containerId: 'cesiumContainer-custom',
    options: {
      animation: true,
      timeline: true,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '展示如何通过传递 options 参数来自定义 Viewer 的配置选项，例如启用时间轴、动画控件等。',
      },
      source: {
        code: `<!-- 方式1：直接使用组件 -->
<UseCesium 
  containerId="cesiumContainer-custom"
  :options="{
    animation: true,
    timeline: true,
  }"
/>


<script setup lang="ts">
import { useCesium } from '@/hooks/useCesium';

const { initViewer, destory, viewer } = useCesium();

onMounted(() => {
  initViewer({
    containerId: 'cesiumContainer',
    forceCreate: true,
    options: {
      animation: true,  // 启用动画控件
      timeline: true,   // 启用时间轴
      sceneMode: Cesium.SceneMode.SCENE3D,
    }
  });
});

onUnmounted(() => {
  destory();
});
</script>`,
        language: 'vue',
      },
    },
  },
};

/**
 * useCesium Hook 使用说明
 */
export const HookUsage: Story = {
  args: {
    containerId: 'cesiumContainer-docs',
  },
  parameters: {
    docs: {
      description: {
        story: `
### useCesium Hook 说明

\`useCesium\` 是一个 Vue 3 组合式函数（Composable），用于管理 Cesium Viewer 的生命周期。

#### 返回值

- \`viewer\`: Cesium.Viewer 实例的响应式引用
- \`initViewer\`: 初始化 Viewer 的方法
- \`destory\`: 销毁 Viewer 的方法

#### initViewer 参数

\`\`\`typescript
interface UseCesiumProps {
  containerId: string;           // 容器元素的 id（必需，必须唯一）
  forceCreate?: boolean;         // 是否强制重新创建 viewer
  options?: Cesium.Viewer.ConstructorOptions;  // Cesium Viewer 配置选项
  baseLayer?: Cesium.ImageryLayer;  // 自定义基础图层
}
\`\`\`

#### 组件 Props

\`\`\`typescript
interface Props {
  containerId?: string;  // 容器元素的唯一 ID，默认: 'cesiumContainer'
  options?: any;         // Cesium Viewer 配置选项
}
\`\`\`

> ⚠️ **重要提示**: 在同一个页面中使用多个 Cesium 实例时，必须为每个实例指定不同的 \`containerId\`，否则会导致冲突。

#### 使用示例

\`\`\`vue
<script setup lang="ts">
import { useCesium } from '@/hooks/useCesium';

const { initViewer, destory, viewer } = useCesium();

onMounted(() => {
  initViewer({
    containerId: 'cesiumContainer',  // 确保 id 唯一
    forceCreate: true,
    options: {
      sceneMode: Cesium.SceneMode.SCENE3D,
      animation: false,
      timeline: false,
    }
  });
  
  // 使用 viewer 实例
  nextTick(() => {
    if (viewer.value) {
      viewer.value.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(116.4, 39.9, 10000000)
      });
    }
  });
});

onUnmounted(() => {
  destory();
});
</script>
\`\`\`
        `,
      },
      source: {
        code: null, // 不显示源码，因为这是文档说明
      },
    },
  },
};

import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import 'ant-design-vue/dist/reset.css';
import '../src/assets/css/main.css';
import 'uno.css';

// 配置 Vue 3
setup((app) => {
  // 在这里可以添加全局插件、组件等
  // app.use(...)
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

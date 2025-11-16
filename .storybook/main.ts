import type { StorybookConfig } from '@storybook/vue3-vite';
import { fileURLToPath, URL } from 'node:url';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    // 只设置别名，不修改其他配置
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': fileURLToPath(new URL('../src', import.meta.url)),
      };
    }

    return config;
  },
};

export default config;

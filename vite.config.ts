import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import cesium from 'vite-plugin-cesium';

// https://vite.dev/config/
export default defineConfig({
  base: '/cesium/',
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    cesium(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@zip.js/zip.js/lib/zip-no-worker.js': '@zip.js/zip.js/lib/zip-native.js',
    },
  },
  optimizeDeps: {
    exclude: ['@zip.js/zip.js'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});

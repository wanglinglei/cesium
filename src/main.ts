import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'uno.css';
import '@/assets/css/main.css';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';

const app = createApp(App);

app.use(createPinia()).use(Antd).use(router);
app.mount('#app');

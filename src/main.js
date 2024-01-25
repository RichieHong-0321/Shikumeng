import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

import '@/assets/styles/normalize.css';
import '@/assets/styles/common.css';

import VueKinesis from "vue-kinesis";
//插件github地址: https://github.com/Aminerman/vue-kinesis

import 'animate.css';
//插件github地址： https://github.com/animate-css/animate.css
//插件document： https://animate.style/

import i18n from '@/language/index.js'

const app = createApp(App)

const bus = mitt()
// 再注册全局事件总线
app.config.globalProperties.$bus = bus

app.use(VueKinesis);
app.use(router);
app.use(i18n);


app.mount('#app');

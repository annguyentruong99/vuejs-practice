import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElRow,
    ElCol,
    ElMenu,
    ElMenuItem,
    ElDivider,
    ElAvatar,
    ElPopconfirm,
    ElNotification,
} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const components = [
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElCard,
    ElForm,
    ElFormItem,
    ElInput,
    ElRow,
    ElCol,
    ElMenu,
    ElMenuItem,
    ElDivider,
    ElAvatar,
];

const plugins = [ElPopconfirm, ElNotification];

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

plugins.forEach((plugin) => {
    app.use(plugin);
});

app.use(store).use(router);

app.mount('#app');

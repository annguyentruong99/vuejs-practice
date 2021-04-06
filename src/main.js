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
];

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(store).use(router);

app.mount('#app');
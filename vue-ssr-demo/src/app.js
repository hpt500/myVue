import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { createRouter } from './router'
import axios from "./axios";

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// ssr渲染
export function createApp (ssrContext) {
    const router = createRouter()
    const app = new Vue({
        router,
        ssrContext,
        render: h => h(App)
    })
    return { app, router }
}


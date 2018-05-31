import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import {sync} from 'vuex-router-sync' // 把当VueRouter状态同步到Vuex中
import axios from './axios'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// ssr渲染
export function createApp (ssrContext) {
    let router = createRouter()
    let store = createStore()

    // 同步路由状态到store中
    sync(store, router)

    const app = new Vue({
        router,
        store,
        ssrContext,
        render: h => h(App)
    })
    return { app, router, store }
}


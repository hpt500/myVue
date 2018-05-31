import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import {sync} from 'vuex-router-sync' // 把当VueRouter状态同步到Vuex中


import axios from './axios'
import apis from 'Axios/apiUrl.js'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;  
Vue.prototype.$apis = apis;

// dev模式
const router = createRouter()  
const store = createStore()
sync(store, router)
new Vue({ 
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

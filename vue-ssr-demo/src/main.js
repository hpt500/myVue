import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import { createRouter } from './router'
import axios from "./axios";

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// dev模式
const router = createRouter()
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

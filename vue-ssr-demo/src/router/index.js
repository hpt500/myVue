import Vue from 'vue'
import Router from 'vue-router'
import comp1 from '../components/comp1.vue'
import comp2 from '../components/comp2.vue'
Vue.use(Router)
export function createRouter () {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/comp1',
                component: ()=> import("../components/comp1.vue")
            },
            {
                path: '/comp2',
                component: comp2
            },
            { path: '/', redirect: '/comp1' }
        ]
    })
}
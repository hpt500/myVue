// createStore

import Vue from 'vue'
import Vuex from 'vuex'
// ...

Vue.use(Vuex)

// createStore工厂方法
export function createStore () {
  return new Vuex.Store({
    // rootstate
    state: {
      appName: 'appName',
      title: 'home'
    },

    modules: {
      // ...
    },

    strict: process.env.NODE_ENV !== 'production' // 线上环境关闭store检查
  })
}
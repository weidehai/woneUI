import Vue from 'vue'
import {WoneUI} from '../src/index'
import index from './index.vue'

Vue.use(WoneUI)

console.log(index)

new Vue({
  render:h=>h(index),
}).$mount('#app')

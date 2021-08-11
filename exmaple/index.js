import Vue from 'vue'
import {WoneUI} from '../dist/woneUI'
import index from './index.vue'

Vue.use(WoneUI)

new Vue({
  render:h=>h(index),
}).$mount('#app')

import switcher from './WoneUI/switcher.vue'
import slideAdjuster from './WoneUI/slideAdjuster.vue'
import dialog from './WoneUI/dialog.vue'
import button from './WoneUI/button.vue'
const WoneUI  = {
  install:function(Vue){
    Vue.component(switcher.name, switcher);
    Vue.component(slideAdjuster.name, slideAdjuster);
    Vue.component(dialog.name, dialog);
    Vue.component(button.name, button);
  }
}



export {WoneUI}

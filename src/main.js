import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import 'normalize.css';
import Hammer from 'hammerjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faMinusSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.directive('swipe', {
  bind: function (el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el);
      mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
      mc.on("pan", binding.value);
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

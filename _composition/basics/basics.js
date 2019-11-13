import Vue from 'vue'

import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import App from './basics.vue'

// a modern alternative to CSS resets
// import 'normalize.css/normalize.css'

Vue.config.productionTip = false

// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Element, {
//   size: 'medium'
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
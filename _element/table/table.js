import Vue from 'vue'
import App from './table.vue'
import Element from 'element-ui'

// a modern alternative to CSS resets
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
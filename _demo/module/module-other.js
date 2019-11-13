import Vue from 'vue'
import App from './module-other.vue'
import router from '../Router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

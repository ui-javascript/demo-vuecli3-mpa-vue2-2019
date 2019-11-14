import Vue from 'vue'
import App from './module.vue'
import router from '../_components/Router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

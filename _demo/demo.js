import Vue from 'vue'
import App from './demo.vue'
import router from './_components/Router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './index.vue'
import router from './_components/Router'

import "./index.scss"
import "./index.less"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

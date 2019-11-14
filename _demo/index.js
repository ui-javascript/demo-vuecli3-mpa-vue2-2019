import Vue from 'vue'
import App from './index.vue'
import router from './Router'

import "./styles.scss"
import "./styles.less"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

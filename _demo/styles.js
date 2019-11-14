import Vue from 'vue'
import App from './styles.vue'
import router from './_components/Router'

import "./styles.scss"
import "./styles.less"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

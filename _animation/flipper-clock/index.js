import Vue from 'vue'

import "./index.css"

const App = {
  template: `

<div>
  <FlipperClock></FlipperClock>
</div>

  `,
  components: {
    FlipperClock: () => import('./components/FlipperClock')
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

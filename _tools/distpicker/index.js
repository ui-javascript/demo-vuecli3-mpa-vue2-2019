import Vue from 'vue'

import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)

const App = {
  template: `

<div>

<v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker>
<hr />
<v-distpicker type="mobile"></v-distpicker>

</div>

  `,
  data() {
    return {

    }
  },

}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

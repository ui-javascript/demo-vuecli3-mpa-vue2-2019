import Vue from 'vue'

import VueCompositionApi, {computed, onMounted, onUpdated, ref, watch} from '@vue/composition-api';
Vue.use(VueCompositionApi);


// a modern alternative to CSS resets
// import 'normalize.css/normalize.css'

const App = {
  template: `
    <button @click="increment">
        count is: {{ state.count }},
        double is: {{ state.double }}
    </button>
  `,
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}

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
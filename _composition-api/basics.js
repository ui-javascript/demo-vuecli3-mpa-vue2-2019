import Vue from 'vue'

import VueCompositionApi, {computed, reactive } from '@vue/composition-api';
Vue.use(VueCompositionApi);

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


new Vue({
  el: '#app',
  render: h => h(App)
})

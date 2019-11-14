import Vue from 'vue'


export const store = Vue.observable({ count: 0 })
export const mutations = {
  setCount (count) {
    store.count = count
  }
}


const App = {
  template: `

<div>

<label for="bookNum">数 量</label>
<button @click="setCount(count+1)">+</button>
<span>{{count}}</span>
<button @click="setCount(count-1)">-</button>
            
</div>

  `,
  data() {
    return {}
  },
  computed: {
    count () {
      return store.count
    }
  },
  methods: {
    setCount: mutations.setCount
  }
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

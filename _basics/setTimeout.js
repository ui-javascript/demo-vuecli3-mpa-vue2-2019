import Vue from 'vue'

const App = {
  template: `

<div>
      <p>Param1: {{ param1}}</p>
      <p>Param2: {{ param2}}</p>
</div>

  `,
  data() {
    return {
      param1: null,
      param2: null
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

    setTimeout((param1, param2) => {
      // console.log(param1, param2)

      this.param1 = param1
      this.param2 = param2

    }, 2000, 'hello', 'world')

  }
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

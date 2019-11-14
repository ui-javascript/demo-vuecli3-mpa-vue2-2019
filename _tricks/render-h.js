import Vue from 'vue'

Vue.component('child', {
  render(h) {
    const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea', 'mark'][this.level-1]
    return h(tag, this.$slots.default)
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

const App = {
  template: `

<div>
    <child :level="6">Hello world!</child>
    <child :level="7">Hello world!</child>
    <child :level="level">Hello world!</child>
</div>

  `,
  data() {
    return {
      level: 3
    }
  },
  computed: {

  },
  methods: {

  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

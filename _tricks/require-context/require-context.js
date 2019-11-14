import Vue from 'vue'

const path = require('path')
const files = require.context('./components', false, /\.vue$/)
const components = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  components[name] = files(key).default || files(key)
})

console.log(components)

const App = {
  template: `

<div>      
      <cmpt-a />
      <cmpt-b />
      <cmpt-c />
</div>

  `,
  data() {
    return {}
  },
  // 注入组件
  components,
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

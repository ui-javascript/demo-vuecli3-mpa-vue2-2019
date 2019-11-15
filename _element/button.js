import Vue from 'vue'
import Element from 'element-ui'

// a modern alternative to CSS resets
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

const App = {
  template: `

    <div class="app">
        <el-button>按钮</el-button>
    </div>

  `,
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
}

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
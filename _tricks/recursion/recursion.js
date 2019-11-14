import Vue from 'vue'

const App = {
  template: `
  <div>
  <Tree :data="data"/>
  </div>
  `,
  data() {
    return {
      data: [
        {
          children: [
            {
              children: [
                {
                  children: null,
                  title: 'child1-son',
                },
              ],
              title: 'child1',
            },
            {
              children: null,
              title: 'child2',
            },
            {
              children: null,
              title: 'child3',
            }
          ],
          title: '以父之名',
        }
      ],
    }
  },
  components: {
    Tree: () => import('./components/Tree.vue')
  }

}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

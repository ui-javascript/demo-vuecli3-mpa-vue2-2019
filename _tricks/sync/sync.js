import Vue from 'vue'

const App = {
    template: `
<div>
      <Child :page.sync="page" />
      {{ page }}
</div>
  `,
    data() {
        return {
            page: 0,
        }
    },
    components: {
        Child: () => import('./Child.vue'),
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

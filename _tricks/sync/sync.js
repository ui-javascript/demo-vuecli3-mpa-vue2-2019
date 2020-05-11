import Vue from 'vue'

const App = {
    template: `
<div>
      <Child @page.sync="page />
</div>
  `,
    data() {
        return {
            page: 0,
        }
    },
    components: {
        Child: () => import('Child.vue'),
    },
    computed: {

    },
    methods: {
        useless() {
            this.list[0].value = 100;
        },
        useful() {
            this.list = [
                { value: 100 },
                { value: 200 }
            ];

            // 或者
            // this.list = Object.freeze([
            //   { value: 100 },
            //   { value: 200 }
            // ]);
        }
    },
}

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})

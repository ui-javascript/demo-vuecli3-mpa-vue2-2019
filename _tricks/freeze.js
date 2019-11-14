import Vue from 'vue'

const App = {
  template: `

<div>

      <button type="primary" @click="useless">this.list[0].value = 100 --> 无效</button>
      <button type="primary" @click="useful">this.list = [{ value: 100 }, { value: 200 }] --> 有效</button>

<div class="mt-5">
      {{ list }}
</div>


</div>

  `,
  data() {
    return {
      list: Object.freeze([
        { value: 1 },
        { value: 2 }
      ])
    }
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

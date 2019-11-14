import Vue from 'vue';
import {
  ValidationProvider,
  extend
} from 'vee-validate';

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

const App = {
  template: `

<ValidationProvider rules="secret" v-slot="{ errors }">
  <input v-model="email" type="text">
  <span>{{ errors[0] }}</span>
</ValidationProvider>

  `,
  data() {
    return {
      count: 0,
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

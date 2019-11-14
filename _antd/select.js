import Vue from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

const App = {
  template: `
<div>
     
 <div class="mt-2">
     <a-radio-group v-model="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <br /><br />
    <a-select :size="size" defaultValue="a1" style="width: 200px" @change="handleChange">
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
      @popupScroll="popupScroll"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </a-select-option>
    </a-select>
    <br />
    <a-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
    >
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </a-select-option>
    </a-select>
  </div>
</div> 

  
    </div>
  `,
  data() {
    return {
      size: 'default',
    }
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
    },
    popupScroll() {
      console.log('popupScroll');
    },
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

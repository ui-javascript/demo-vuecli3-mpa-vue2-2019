import Vue from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.config.productionTip = false;

const App = {
  template: `
<div>
        <a-button type="primary">Button</a-button>
    </div>
  `,
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

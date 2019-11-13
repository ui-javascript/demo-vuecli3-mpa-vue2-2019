import Vue from 'vue';

// @FIXME antd-vue全局引入失败
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);

// 按需加载的写法
import { Button } from 'ant-design-vue';
Vue.component(Button.name, Button)

Vue.config.productionTip = false;

import App from './button.vue';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
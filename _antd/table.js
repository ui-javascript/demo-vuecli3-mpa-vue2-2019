import Vue from 'vue';

Vue.config.productionTip = false;

import App from './table.vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// import {
//     Button,
//     Table,
//     Divider,
// } from 'ant-design-vue';
// Vue.component(Button.name, Button)
// Vue.component(Table.name, Table)
// Vue.component(Divider.name, Divider)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
});

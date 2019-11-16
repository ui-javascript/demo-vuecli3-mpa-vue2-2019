import Vue from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

Vue.config.productionTip = false;


const columns = [
    {
        dataIndex: 'name',
        key: 'name',
        slots: { title: 'customTitle' },
        scopedSlots: { customRender: 'name' },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' },
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: { customRender: 'action' },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const App = {
    template: `

  <a-table :columns="columns" :dataSource="data">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
        :key="tag"
      >
        {{tag.toUpperCase()}}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <a-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <a-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
  
  `,
    data() {
        return {
            data,
            columns,
        };
    },
}


/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
});

import Vue from 'vue'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

import moment from "moment"

Vue.use(VXETable)

const App = {
  template: `

    <vxe-table
      border
      resizable
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}"
      @edit-actived="editActivedEvent"
      @edit-closed="editClosedEvent">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="role" title="Role" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'select', options: sexList}"></vxe-table-column>
      <vxe-table-column field="num6" title="Number" :edit-render="{name: 'input', attrs: {type: 'number'}}"></vxe-table-column>
      <vxe-table-column field="date12" title="Date" :edit-render="{name: 'input', attrs: {type: 'date'}}"></vxe-table-column>
    </vxe-table>

  `,
  data() {
    return {
      tableData: [
        {
          index: 1,
          name: 'luo0412',
          role: 'full stack',
          // 注意是字符串
          sex: '1',
          num6: 12,
          date12: moment('2012/08/07').format("YYYY-MM-DD"),
        }
      ],
      sexList: [{
          "label": "",
          "spell": "",
          "value": "",
          "value2": null,
          "val": ""
        },
        {
          "label": "男",
          "spell": "nan",
          "value": "1",
          "value2": 1,
          "val": "x"
        },
        {
          "label": "女",
          "spell": "nv",
          "value": "0",
          "value2": 0,
          "val": "o"
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    editActivedEvent({ row, column }, event) {
      console.log(`打开 ${column.title} 列编辑`)
    },
    editClosedEvent({ row, column }, event) {
      console.log(`关闭 ${column.title} 列编辑`)
    }
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

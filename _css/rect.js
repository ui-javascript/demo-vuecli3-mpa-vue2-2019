import AngleTable from "./components/AngleTable";
import AngleTitle from "./components/AngleTitle";

// https://juejin.im/post/6844904024240586760
const App = {
  template: `

    <div class="p-2">
      <angle-title style="width: 420px;height: 50px;line-height: 50px;">
        <div>
          市政
        </div>
      </angle-title>
      
      <angle-table class="mt-2" style="width: 810px;">
        <el-table
          border
          stripe
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期cdn"
            width="150">
          </el-table-column>

          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编">
          </el-table-column>

        </el-table>
      </angl>
    </div>
  `,
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎-cdn',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  computed: {},
  methods: {},
  components: {
    AngleTable,
    AngleTitle,
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})

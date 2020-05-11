import Vue from 'vue'
import Element from 'element-ui'
import moment from "moment"

// a modern alternative to CSS resets
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
// import lang from 'element-ui/lib/locale/lang/en' // Tue May 12 2020 11:21:52 GMT+0800 (中国标准时间)
import lang from 'element-ui/lib/locale/lang/zh-CN' // Mon May 11 2020 11:24:15 GMT+0800 (中国标准时间)

Vue.use(Element, {
  size: 'medium',
  locale: lang
})


const App = {
  template: `

  <div>
  <el-date-picker 
  v-model="date"
  type="datetime"
></el-date-picker>

<el-date-picker 
  value-format="yyyy-MM-dd HH:mm:ss"
  v-model="dateF"
  type="datetime"
></el-date-picker>
  
  </div>



  `,
  data() {
    return {
      date: null,
      dateF: null
    }
  },
  mounted() {
    // setTimeout(() => {
      this.date = new Date('2019-12-21T16:00:00.000+0000') // 2019-12-22 00:00:00 --> 8小时时差
      this.dateF = "2019-12-21 16:00:00" // 2019-12-21 16:00:00 --> 正常显示
    // }, 0)
    
    // setInterval(() => {
      console.log("默认 --> " + this.date)
      // console.log("默认utc --> " + (this.date).toUTCString())
      console.log("moment --> " + moment(this.date).format("YYYY-MM-DD HH:mm:ss"))
      console.log("utc --> " + moment(this.date).utc().format("YYYY-MM-DD HH:mm:ss"))
      console.log("格式化 --> " + this.dateF)
    // }, 3000)
  },
  methods: {

  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
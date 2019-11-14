import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

const img1 = require("./assets/1.jpg")
const img2 = require("./assets/2.jpg")

const App = {
  template: `
 <div id="app">
    <!-- directive -->
    <div class="images" v-viewer>
      <img v-for="src in images" :src="src" :key="src">
    </div>
    
    <!-- component -->
    <viewer :images="images" class="mt-5">
      <img v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
  `,
 data() {
   return {
     images: [img1, img2]
   }
 }
}

new Vue({
  el: '#app',
  render: h => h(App)
})

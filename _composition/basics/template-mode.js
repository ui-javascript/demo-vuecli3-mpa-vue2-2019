import Vue from 'vue'

import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);


import {
  createApp,

  reactive, // 创建响应式数据对象
  ref, // 创建一个响应式的数据对象
  toRefs, // 将响应式数据对象转换为单一响应式对象
  isRef, // 判断某值是否是引用类型

  computed, // 创建计算属性
  watch, // 创建watch监听
  effect,

  // 生命周期钩子
  onBeforeMount,
  onMounted,
  onUpdated,
  onUnmounted,
} from '@vue/composition-api'

const App = {
  template: `
    <div>
      <span>count is {{ count }}</span>
      <span>plusOne is {{ plusOne }}</span>
      <button @click="increment">count++</button>
    </div>
  `,
  setup() {
    // reactive state
    const count = ref(0)

    // computed state
    const plusOne = computed(() => count.value + 1)

    // method
    const increment = () => { count.value++ }

    // watch
    watch(() => count.value * 2, val => {
      console.log(`count * 2 is ${val}`)
    })

    // lifecycle
    onMounted(() => {
      console.log(`mounted`)
    })

    onUpdated(() => {
      console.log(`更新一波~`)
    })

    // expose bindings on render context
    return {
      count,
      plusOne,
      increment
    }
  }
}

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})

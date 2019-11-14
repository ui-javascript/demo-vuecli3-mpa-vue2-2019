<template>
  <div>
    <div :key="index" v-for="(item, index) in data">
      {{index}}. {{ item.title }} <br/>

      <!-- 递归调用自身, 后台判断是否不存在改值 -->
      <tree :data="item.children" v-if="item.children && item.children.length > 0"></tree>
    </div>
  </div>
</template>

<script>
  export default {
    // 必须定义name，
    // 组件内部才能递归调用
    name: 'tree',
    data(){
      return {}
    },
    // 接收外部传入的值
    props: {
      data: {
        type: Array,
        default: ()=>[]
      }
    }
  }
</script>

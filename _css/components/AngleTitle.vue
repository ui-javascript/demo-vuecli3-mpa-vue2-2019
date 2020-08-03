<template>
  <div class="angleTitle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "AngleTitle"
  }
</script>


<style lang="less">
  @color-border: rgba(0, 122, 255, 1);
  @color-table-blue: rgb(0, 59, 81);

  .chamfer-angle-border(@color) {
    background: linear-gradient(135deg, transparent 6px, @color 0) top left,
    linear-gradient(-135deg, transparent 6px, @color 0) top right,
    linear-gradient(-45deg, transparent 6px, @color 0) bottom right,
    linear-gradient(45deg, transparent 6px, @color 0) bottom left;
  }

  .angleTitle {
    padding: 2px;

    .chamfer-angle-border(@color-border);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    border: none !important;

    > div {
      width: 100%;
      height: 100%;
      .chamfer-angle-border(@color-table-blue);

      box-sizing: border-box;
      background-size: 50% 50%;
      background-repeat: no-repeat;
      color: #fff;
      border: none !important;
      text-align: center;
    }
  }


</style>

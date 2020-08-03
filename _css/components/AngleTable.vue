<template>
  <div class="AngleTable">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "AngleTable"
  }
</script>


<style lang="less">
  @color-border: rgba(0, 122, 255, 1);

  @color-table-blue: rgb(0, 59, 81);
  @color-table-black: rgb(10, 39, 50);


  .chamfer-angle-border(@color) {
    background: linear-gradient(135deg, transparent 10px, @color 0) top left,
    linear-gradient(-135deg, transparent 10px, @color 0) top right,
    linear-gradient(-45deg, transparent 10px, @color 0) bottom right,
    linear-gradient(45deg, transparent 10px, @color 0) bottom left;
  }


  .AngleTable {

    padding: 1px;

    .chamfer-angle-border(@color-border);


    .el-table tr:first-child {
      th:last-child {
        border-right: none !important;
      }
    }

    .el-table::before,
    .el-table::after {
      width: 0 !important;
      height: 0 !important;
    }

    background-size: 50% 50%;
    box-sizing: border-box;
    background-repeat: no-repeat;


    .el-table {
      width: 100%;
      height: 100%;
      .chamfer-angle-border(@color-table-black);

      background-size: 50% 50%;
      background-repeat: no-repeat;
      color: #fff;
      border: none !important;
    }

    //.el-table td,
    //.el-table th {
    //  border: 1px solid @color-border;
    //}


    .el-table--border td,
    .el-table--border th,
    .el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
      border-right: 1px solid @color-border;
    }

    .el-table td, .el-table th.is-leaf {
      border-bottom: none;
      border-right: none;
    }


    .el-table th,
    .el-table tr {
      background-color: transparent;
    }

    .el-table--striped .el-table__body tr.el-table__row td {
      background: @color-table-blue;
    }

    .el-table--striped .el-table__body tr.el-table__row--striped td {
      background: @color-table-black;
    }


    // 全部居中对齐, 不用另外设置
    .el-table .cell {
      text-align: center !important;
    }

    .el-table thead {
      color: #fff;
    }

    // 去掉悬浮样式
    /*.el-table tbody tr:hover > td {*/
    /*  background-color: unset !important;*/
    /*}*/


    .el-table tr:last-child > td {
      background-color: unset !important;
    }

  }


</style>

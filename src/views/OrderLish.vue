<template>
  <div class="xfn_order_list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <el-table   border style="width: 100%">
      <el-table-column  label="订单编号"></el-table-column>
      <el-table-column  label="开始时间"></el-table-column>
      <el-table-column  label="结束时间"></el-table-column>
      <el-table-column  label="用餐人数"></el-table-column>
      <el-table-column  label="桌台编号"></el-table-column>
      <el-table-column  label="菜品详情"></el-table-column>
      
  </el-table>

  </div>
</template>
<script>
export default {
  // data(){
  //   return{
  //     tableData:{
  //       oid:'',
  //       startTime:'',
  //       endTime:'',
  //       customerCount:'',
  //       tableId:'',
  //       details:''


  //     }
  //   }
  // }
}
</script>

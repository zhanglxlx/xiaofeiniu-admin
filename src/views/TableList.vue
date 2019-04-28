<template>
  <div class="xfn_table_list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">桌台列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-row>
      <el-col v-for="(t,i) in tableList" :xs="12" :sm="8" :md="6" :lg="4">
        <xfn-table :data="t">{{t.status}}</xfn-table>
      </el-col>

    </el-row>
  </div>
</template>
<style lang="scss"></style>

</style>
<script>
import Table from "../components/Table"
  export default {
    data(){
      return {
        tableList:[]
      }
    },
    mounted(){
      var url=this.$store.state.globalSettings.apiUrl+`/admin/table`;
      this.$axios.get(url).then(({data})=>{
        this.tableList=data
      }).catch((err)=>{
        console.log(err)
      })
    },
    components:{'xfn-table':Table}
  }
</script>
<template>
  <div class="xfn_table_list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">桌台列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-row>
      <el-col v-for="(t,i) in tableList"  :xl="2" :lg="4" :md="6" :sm="8" :xs="12" >
        <xfn-table :data="t">{{t}}</xfn-table>
      </el-col>

    </el-row>
  </div>
</template>
<style lang="scss">

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
      this.$axios.get(url).then((res)=>{
        console.log(res.data)
        this.tableList=res.data
      }).catch((err)=>{
        console.log(err)
      })
    },
    components:{'xfn-table':Table}
  }
</script>
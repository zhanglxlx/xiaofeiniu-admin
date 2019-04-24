<template>
  <div class="xfn_category_list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">类别列表</el-breadcrumb-item>

    </el-breadcrumb>
    <br>
    <el-button type="primary"> 添加新的菜品类别</el-button>
    <el-table :data="categoryList">
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">
          <template slot-scope="{row,$index}"> 
            <el-button  @click="updateCategory($index)" type="success" size="mini">修改{{$index}}</el-button>
            <el-button  @click="deletaCategory($index)" type="danger" size="mini">删除{{$index}}</el-button>
          </template>
        </el-table-column>
      
    </el-table>

  </div>
</template>
<script>
export default {
  data(){
    return{
      categoryList:[]
    }
  },
  mounted(){
    var url=this.$store.state.globalSettings.apiUrl+`/admin/category`;
    this.$axios.get(url).then((res)=>{
      this.categoryList=res.data;
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods:{
    delete() {
      
    },
  }
}
</script>
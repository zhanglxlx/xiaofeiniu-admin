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

       <tr :v-for="(c, i) in categoryList">
            <td>{{c.cid}}</td>
            <td>{{c.cname}}</td>  
            <td><a @click="delete(c.cid)"></a></td>  
        </tr>

      <el-table-column label="操作">
          <template>
            <el-button @click="deletaCategory()" type="success" size="mini">修改</el-button>
            <el-button type="error" size="mini">删除</el-button>
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
      console.log(res);
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
<template>
  <div class="xfn_category_list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/main">菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/categoryList">类别列表</el-breadcrumb-item>

    </el-breadcrumb>
    <br>
    <el-button type="primary" @click="addCategory"> 添加新的菜品类别</el-button>
    <br>
    <br>
    <el-table :data="categoryList" stripe border>
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">
          <template slot-scope="{row,$index}"> 
            <el-button  @click="updateCategory(row,$index)" type="success" size="mini">修改</el-button>
            <el-button  @click="deletaCategory(row,$index)" type="danger" size="mini">删除</el-button>
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
    addCategory(){
      this.$prompt('请输入新的菜品类别名：','提示',{type:'info'}).then(({value})=>{
        // 获得用户的输入，调用数据API添加到数据库
        var url=this.$store.state.globalSettings.apiUrl+`/admin/category`;
        this.$axios.post(url,{cname:value}).then((res)=>{
           if(res.data.code==200){
            //  数据库中添加成功
            this.$message.success('新的类别添加成功！');
            // 模型数据中添加新的类别
            this.categoryList.push({cid:res.data.cid,cname:value});
          }else{
            this.$message.error('新的类别添加出差错啦！'+res.data.msg)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }).catch((err)=>{
        console.log(err)
      })
    },
    updateCategory(c,i){
      this.$prompt('请输入修改的菜品类别名：','提示',{type:'info'}).then(({value})=>{
         var url=this.$store.state.globalSettings.apiUrl+`/admin/category`;
         var data={cid:c.cid,cname:value};
        this.$axios.put(url,data).then((res)=>{
        if(res.data.code==200){
            this.$message.success('菜品类别修改成功！')
            this.categoryList.push({cid:c.cid,cname:value});
          }else{
            this.$message.error('类别修改出差错啦！'+res.data.msg)
          }
        })
      }).catch((err)=>{
         
      }).catch((err)=>{
        console.log(err);
      })
      
      
    },
    deletaCategory(c,i) {  //删除按钮
      this.$confirm('删除操作不可插销，您确定吗啊？','提示',{tyoe:'waring'}).then(()=>{
        var url=this.$store.state.globalSettings.apiUrl+`/admin/category/${c.cid}`;
        this.$axios.delete(url).then((res)=>{
          if(res.data.code==200){
            this.categoryList.splice(i,1);
            this.$message.success('菜品类别删除成功！')
          }else{
            this.$message.error('类别删除出差错啦！'+res.data.msg)
          }
        }).catch((err)=>{
          console.log(err);
        })
      }).catch(()=>{
        
      })
      
    },
  }
}
</script>
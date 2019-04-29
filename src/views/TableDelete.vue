<template>
  <div class="xfn_tble_delete">
  <el-breadcrumb>
    <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
    <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
    <el-breadcrumb-item>删除桌台</el-breadcrumb-item>
  </el-breadcrumb>
  <br>
    <el-card>
    <el-form label-width="110px">
      <el-form-item label="桌台编号：" >
        <el-input class="dis_input" placeholder="请输入要删除的桌台编码：" v-model="tid"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="doSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  
  </div>
</template>
<style lang="scss">
    div.dis_input{
      width: 20%;
    }
</style>
<script>
export default{
  data(){
    return{
      tid:''
    }
  },
  methods:{
    doSubmit(){
       this.$confirm('删除操作不可插销，您确定吗啊？','提示',{tyoe:'waring'}).then(()=>{
        var url=this.$store.state.globalSettings.apiUrl+`/admin/table/${this.tid}`;
        this.$axios.delete(url).then((res)=>{
          if(res.data.code==200){
            //this.categoryList.splice(i,1);
            this.$message.success('桌台信息删除成功！')
          }else{
            this.$message.error('桌台信息删除出差错啦！'+res.data.msg)
          }
        }).catch((err)=>{
          console.log(err);
        })
      }).catch(()=>{
        
      })
      
    }
  }
}
  
   
</script>
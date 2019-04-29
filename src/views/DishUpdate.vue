<template>
  <div class="xfn_dish_delete">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>修改桌台</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <el-card>
      <div slot="header" class="clearfix">
        <span>根据编号查找菜品：</span>
      </div>
      <el-form  label-width="110px">
        <el-form-item label="菜品编号：" >
          <el-input class="dis_input" placeholder="请输入菜品编号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSubmit" id="submit_updata">提交修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <br>
    <el-card>
      <div slot="header" class="clearfix">
        <span>根据名称查找菜品：</span>
      </div>
      <el-form label-width="110px">
        <el-form-item label="菜品名称："  >
          <el-input class="dis_input" placeholder="请输入菜品名称"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="doSubmit" id="submit_updata">提交修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  methods:{
    doSubmit(){
      console.log(1)
    }
  },
  mounted(){
    var submit_updata=document.getElementById('submit_updata');
    submit_updata.setAttribute('disabled',true)
    console.log(submit_updata)
  },
}
</script>
<style lang="scss">
  div.dis_input{
    width:50%;
  }
</style>


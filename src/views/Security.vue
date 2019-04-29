<template>
  <div class="xfn_dish_delete">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>安全管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <el-card>
      <div slot="header" class="clearfix">
        <span>修改管理员密码</span>
      </div>
      <el-form  label-width="110px">
        <el-form-item label="旧密码：" >
          <el-input class="dis_input" placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" >
          <el-input class="dis_input" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="再输入一次：" >
          <el-input class="dis_input" placeholder="再输入一次"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSubmit" id="submit_do">确定</el-button>
          <el-button type="primary" @click="doCancel" id="cancel">取消</el-button>
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
    },
    doCancel(){
      console.log(2)
    }
  },
  mounted(){
    var submit_do=document.getElementById('submit_do');
    var cancel=document.getElementById('cancel');
    submit_do.setAttribute('disabled',true)
    cancel.setAttribute('disabled',true)
    console.log(submit_do)
  },
}
</script>
<style lang="scss">
  div.dis_input{
    width:50%;
  }
</style>


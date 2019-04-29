<template>
  <div class="xfn_tble_add">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加桌台</el-breadcrumb-item>
    </el-breadcrumb>
  <br>
    <el-card>
    <el-form label-width="110px">
      <el-form-item label="桌台编号：" >
        <el-input class="dis_input" :disabled="true" value="1"></el-input>   自动生成，无需赋值
      </el-form-item>
      <el-form-item label="桌台别名：">
        <el-input placeholder="给桌台取个吉利喜庆的名字吧！"></el-input>
      </el-form-item>
      <el-form-item label="桌台类型：">
        <el-input  placeholder="这是几人桌，如：8人桌，3-4人桌"></el-input>
      </el-form-item>
      <el-form-item label="初始状态："  prop="statue">
        <el-radio-group v-model="ruleForm.statue">
          <el-radio label="空闲"></el-radio>
          <el-radio label="预定"></el-radio>
          <el-radio label="占用"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSubmit">提交</el-button>
        <el-button @click="doCancel">取消</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  
  </div>
</template>
<style lang="scss">
    div.dis_input{
      width: 10%;
      padding-left:2px;
      margin-right: 5px;
    }
</style>
<script>
export default{
  data(){
    return{
      ruleForm:{
        resource:'',
      }
    }
  },
  methods:{
    doSubmit(){
      console.log(1);
    },
    doCancel(){
      console.log(2)
    }

  }
}
  
   
</script>
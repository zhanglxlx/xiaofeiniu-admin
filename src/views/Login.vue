<template>
  <div class="login">
    <el-card class="xfn_login_card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="15%">
            <el-form-item label="管理员名:">
              <el-input v-model="formData.aname" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="登录密码:">
              <el-input type="password" v-model="formData.apwd"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">登录</el-button>
              <el-button  @click="doCanael">取消</el-button>
            </el-form-item>
        </el-form>
      </div>
    </el-card>
    
  </div>
</template>
<style lang="scss">            
  .xfn_login_card{
    width: 50%;
    margin: 8em auto;
    // scss样式的嵌套
    .el-card__header{
       text-align: center;
       font-size: 1.2em;
    }
  }
  
</style>

<script>
  export default {
    data() {  //普通组件
      return {
        formData:{  //表单中用户输入的两个数据
            aname:'admin',
            apwd:'123456'
        }
      }
    },
    methods:{ 
      doLogin:function(){  //执行登录
        var url=this.$store.state.globalSettings.apiUrl+`admin/admin/login/${this.formData.aname}/${this.formData.apwd}`
        this.$axios.get(url).then((res)=>{
          if(res.data.code==200){  //登录成功
          //把用户名存入Vuex存储仓库
          this.$store.commit('setAdminName',this.formData.aname);
          //执行视图跳转
            this.$router.push("/main");
          }else{   //登录失败
            this.$alert(res.data.msg,"登录失败",{type:'error'}).then(()=>{}).catch(()=>{});
          }       
        }).catch((err)=>{
          console.log(err);
        })
      },
      doCanael:function(){  //清楚用户的输入
        this.formData.aname="";
        this.formData.apwd="";
      }
    },
   
    
  }
</script>、
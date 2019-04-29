<template>
  <div class="xfn_dish_add">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/dish/list">菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-form label-width="100px">
      <el-form-item label="菜品图片"   v-model="formData.imgUrl" >
        <el-upload class="xfn_uploader" :action="uploadAction" :on-success="doUploadSucc" name="dishImg" :show-file-list="false" @blur="input_blur">
          <!-- :show-file-list="false"  不显示上传的图片列表 -->
          <img v-if="imageUrl" :src="imageUrl">
        </el-upload>
        <p>只能上传jpg/png，且不超过500KB</p>
      </el-form-item>
      <el-form-item label="主标题:" >
        <el-input placeholder="请输入菜品主标题" v-model="formData.title" @blur="input_blur"></el-input>
      </el-form-item>
      <el-form-item label="所属类别:">
        <el-radio-group v-model="formData.categoryId" size="medium" @blur="input_blur">
          <el-radio border label="肉类"></el-radio>
          <el-radio border label="海鲜河鲜"></el-radio>
          <el-radio border label="丸滑类"></el-radio>
          <el-radio border label="蔬菜豆制品"></el-radio>
          <el-radio border label="菌菇类"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="价格:">
        <el-input placeholder="请输入菜品价格"  v-model="formData.price" @blur="input_blur"></el-input>
      </el-form-item>
      <el-form-item label="活动形式:" prop="desc">
        <el-input type="textarea" placeholder="请输入菜品描述"  v-model="formData.detail" @blur="input_blur"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button id="submit_do" type="primary" @click="doSubmit">提交</el-button>
        <el-button @click="doCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imageUrl:'', //要显示的预览图片地址
      uploadAction:this.$store.state.globalSettings.apiUrl+`/admin/dish/image`,
      formData:{
        title:'',
        imgUrl:'',
        price:'',
        detail:'',
        categoryId:' '
      }
    }
  },
  mounted(){
    if(this.formData.title==" "||this.formData.price==" "|| this.formData.detail==" "|| this.formData.categoryId==" "){ 
        var submit_do=document.getElementById('submit_do');
        submit_do.setAttribute('disabled',true)
        console.log(submit_do)
      }
  },

  // updated() { 
  //     var submit_do=document.getElementById('submit_do');
  //     submit_do.removeAttribute('disabled');
  //     console.log(submit_do);
  //   },
    
  methods:{
    doUploadSucc(res,file){
      //文件上传成功后，客户端得到相应消息之后的处理函数
      //res：服务器端返回的响应消息
      //file:从 INPUT[type=file]中读取的第一个上传的文件对象
      console.log(res);
      this.formData.imgUrl=res.fileName;
      this.imageUrl=URL.createObjectURL(file.raw);
      },
    input_blur(){
      submit_do.removeAttribute('disabled');
      console.log(submit_do);
    },
    doSubmit(){
      if(this.formData.categoryId=="肉类"){
        this.formData.categoryId=1;
      }else if(this.formData.categoryId=="海鲜河鲜"){
        this.formData.categoryId=2;
      }else if(this.formData.categoryId=="丸滑类"){
        this.formData.categoryId=3;
      }else if(this.formData.categoryId=="蔬菜豆制品"){
        this.formData.categoryId=4;
      }else if(this.formData.categoryId=="菌菇类"){
        this.formData.categoryId=5
      }
      // console.log(this.formData.categoryId);
      var url=this.$store.state.globalSettings.apiUrl+`/admin/dish`;
      this.$axios.post(url,this.formData).then((res)=>{
        if(res.data.code==200){
           this.$alert(res.data.msg, '菜品添加', {
           confirmButtonText: '确定',
         });
         this.$router.push("/dish/list");
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){
      console.log(2)
    }
   }
  }
</script>
// 第一种写法
<style lang="scss">
  .xfn_uploader {
    .el-upload {
      border:1px dotted #aaa;
      border-radius:3px;
      cursor:pointer;
      width:250px;
      height:177px;
      overflow:hidden;
      &:hover {
        border-color:#409EFF;
      }
    }
    img{
      max-width: 100%;
    }
  }
</style>
// 第二种写法
<style scoped>
/* // scoped只在当前作用域有效 */
/* // 样式渗透 */
  .xfn_uploader >>>.el-upload {
      border:1px dotted #aaa;
      border-radius:3px;
      cursor:pointer;
      width:250px;
      height:177px;
      overflow:hidden;
    }
    .xfn_uploader >>>.el-upload:hover{
       border-color:#409EFF;
    }
    img{
      width:100%
    }
</style>


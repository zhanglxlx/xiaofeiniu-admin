<template>
  <div class="xfn_dish_add">
    <h1>添加菜品</h1>
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item to="/dish/list">菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-form label-width="100px">
      <el-form-item label="菜品图片">
        <el-upload class="xfn_uploader" :action="uploadAction" :on-success="doUploadSucc" name="dishImg" :show-file-list="false">
          <!-- :show-file-list="false"  不显示上传的图片列表 -->
          <img v-if="imageUrl" :src="imageUrl" >
        </el-upload>
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
        categoryId:''
      }
    }
  },
  methods:{
    doUploadSucc(res,file){
      //文件上传成功后，客户端得到相应消息之后的处理函数
      //res：服务器端返回的响应消息
      //file:从 INPUT[type=file]中读取的第一个上传的文件对象
      console.log(res);
      this.formData.imgUrl=res.fileName;
      this.imageUrl=URL.createObjectURL(file.raw);
    },
    // beforeAvatarUpload(file){
    //   const isJPG=file.type==='image/jpeg';
    // }
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


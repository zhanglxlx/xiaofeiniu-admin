<template>
  <div class="dish">
    <h1>菜品列表</h1>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(dish,i) in dishList">
       <span slot="label">
         <el-badge :value='dish.dishList.length'>{{dish.cname}}</el-badge>
       </span>
       <el-row>
         <el-col  v-for="(d,i) in dish.dishList" :key="i" :xs="12" :md="6" :lg="4" :xl="3">
           {{d.title}}

           <br>
           <img :src="require('../assets/img/dish/'+d.imgUrl)" alt="" style="max-width:100%">
         </el-col>
       </el-row>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>
<script>
export default {
  data(){
    return {
      dishList:[],
    }
  },
  mounted(){
    var url=this.$store.state.globalSettings.apiUrl+`/admin/dish`;
    this.$axios.get(url).then(({data})=>{
      this.dishList=data
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  },
}
</script>


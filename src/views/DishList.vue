<template>
  <div class="dish">
    <h1>菜品列表</h1>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(dish,i) in dishList">
       <span slot="label">
         <el-badge :value='dish.dishList.length'>{{dish.cname}}</el-badge>
       </span>
       <el-row>
         <el-col class="el-col" v-for="(d,i) in dish.dishList" :key="i" :xs="12" :md="6" :lg="4" :xl="3">
           <h4>{{d.title}}</h4>
           <img :src="require('../assets/img/dish/'+d.imgUrl)" alt="" style="max-width:100%">
           <div class="dish_detail">
             <p>{{d.detail}}</p>
             <h6>{{d.price | currency}}</h6>
           </div>
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
<style lang="scss">
.el-tabs__nav-scroll{
  padding-top:10px;
}
.el-col{
  padding: 1px;
  text-align:ceter;
  position: relative;
  color:#fff;
  h4{
    position: absolute;
    top: 0;
    margin: 6px;
  }
  .dish_detail{
    opacity: 0;
    background-color: rgba(0,0,0,.5);
    position:absolute;
    top:0;
    margin: 6px;
    width:95%;
    height:90%;
    p{
      padding-top:10px;
      font-size:12px;
    }
    h6{
      font-size:12px;
      color:yellow;
      text-align: right;
      position: absolute;
      bottom: -20px;
      right: 15px;
    }
  }
}
.el-col:hover{
  .dish_detail{
    opacity: 1;
  }
  h4{
    color:red;
    z-index:1000;
  }



}

</style>



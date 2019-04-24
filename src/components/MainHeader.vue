<template>
    <div class="xfn_main_header">
        <h3 class="xfn_left">{{$store.state.globalSettings.appName}}管理后台</h3>
        <div class="xfn_right">
            当前用户：{{$store.state.adminName}}
            <el-button size="mini" @click="quit">退出</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            quit(){
                //清楚当前用的登录信息
                this.$store.commit('setAdminName','');
                this.$router.push("/login");
            }
        },
    }
</script>

<style lang="scss">
$header-height:60px;

.xfn_main_header{
    background:#DCDFE6;
    border-radius:4px;
    line-height:$header-height;
    height:$header-height;
    padding:0 6px;
    .xfn_left{
        float:left;
        color:#303133;
        margin:0;
    }
    .xfn_right{
        float:right;
    }
}
// .xfn_main_header:after{
//     content:"";
//     display:block;
//     clear:both;
// }
    
</style>
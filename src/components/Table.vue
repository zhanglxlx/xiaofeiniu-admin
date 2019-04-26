<template>
    <div class="xfn_table_info">
        <el-card shadow="hover">
            <div class="xfn_table" :style="{background:getTableColor(data.status)}">
                {{data.tid}}号桌：{{data.status | tableStatus}}
            </div>
            <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>
        <!-- 桌台详情的对话框 -->
        <el-dialog :title="data.tid+'桌台详情'" :visible="dialogTableDetailVisisble" :before-close="closeDialogTableDetail">
            <!-- 对话框主体 -->
            <el-tabs type="border-card" @tab-click="makeQrcode">
                <el-tab-pane label="桌台状态">状态：{{data.status | tableStatus}}</el-tab-pane>
                <el-tab-pane label="桌台二维码">
                    <canvas id="qrcanvas"></canvas>
                    <br>
                    <a href="#">下载二维码</a>
                </el-tab-pane>
             </el-tabs>
             <!-- 对话框尾部 -->
            <div slot="footer">
                <el-button type="primary" @click="dialogTableDetailVisisble=false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dialogTableDetailVisisble:false,
            
        }
    },
    props:['data'],
    methods: {
        getTableColor(status){
            if(status==1) return '#67C23A';
            else if(status==2) return '#E6A23C';
            else if(status==3) return '#F56C6C';
            else  return '#909399';  
        },
        showTableDetail(){
            //console.log(this.data) //当前桌子的数据
            this.dialogTableDetailVisisble=true
        },
        closeDialogTableDetail(){
            this.dialogTableDetailVisisble=false;
        },
        makeQrcode(){
            // 创建二维码--注意此处方法不能再当前组件的mounted中调用，因为绘图必需的canvas在el-dialog中，对话框在组件加载时并不是挂在dom树上的
            var qrcode=require('qrcode');
            var canvas=document.getElementById('qrcanvas');
            console.log(canvas)
            // 每个桌子对应的URL应该行如：
            //http：//127.0.0.1:8092/#/3
            var tableUrl=this.$store.state.globalSettings.appUrl+`/#/${this.data.tid}`
            console.log(tableUrl);
            qrcode.toDataURL(tableUrl,{
                width:300,
                errorCorrectionLevel:'L'
            },(err,url)=>{
                if(err){throw err}
                console.log(url)
                canvas=url;
            });

        }
    }
}
</script>
<style lang="scss">
    .xfn_table_info{
        padding: 3px;
        text-align: center;
        border-radius:100%;
        .xfn_table{
            margin: 5px auto;
            width:50%;
            height: 120px;
            line-height: 120px;
            border:1px solid #aaa;
            box-shadow: 3px 4px 5px #666;
            border-radius:50%;
        }
    }
</style>
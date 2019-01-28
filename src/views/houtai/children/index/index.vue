<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="lineName"
                label="产线"
                width="180">
        </el-table-column>
        <el-table-column
                prop="total"
                label="今日订单量"
                width="180">
        </el-table-column>
        <el-table-column
                prop="finished"
                label="已完成订单">
        </el-table-column>
        <el-table-column
                prop="finishPercent"
                label="完成进度">
        </el-table-column>
        <el-table-column
                prop="workStatus"
                label="状态">
        </el-table-column>
    </el-table>
    <!--状态颜色-->
    <!--红 c-red    #d62e42-->
    <!--绿 c-green  #009944-->
    <!--蓝 c-blue   #00a0e9-->
</template>

<script>

import { jinrikanban } from '../../../../api/index';
export default {
    name: 'index',
    data() {
        return {
            tableData: []
        }
    },
    methods: {
        async getData(){
            let res = await jinrikanban();
            if(res.code === 0){
                res.objects.forEach(item => {
                    item.finishPercent = item.finishPercent*100+'%';
                });
                this.tableData = res.objects;
            }else{
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
            
        }
    },
    created() {
        this.getData();
    }
}
</script>
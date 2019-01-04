<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="proLine"
                label="产线"
                width="180">
        </el-table-column>
        <el-table-column
                prop="number"
                label="今日订单量"
                width="180">
        </el-table-column>
        <el-table-column
                prop="CompletedNumber"
                label="已完成订单">
        </el-table-column>
        <el-table-column
                prop="finish"
                label="完成进度">
        </el-table-column>
        <el-table-column
                prop="state"
                label="状态">
        </el-table-column>
    </el-table>
    <!--状态颜色-->
    <!--红 c-red    #d62e42-->
    <!--绿 c-green  #009944-->
    <!--蓝 c-blue   #00a0e9-->
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            tableData: [{
                proLine: '装箱产线',
                number: '128',
                CompletedNumber: '89',
                finish: '69.5%',
                state: '正常'
            }, {
                proLine: '产线',
                number: '128',
                CompletedNumber: '89',
                finish: '69.5%',
                state: '正常'
            }, {
                proLine: '产线',
                number: '128',
                CompletedNumber: '89',
                finish: '69.5%',
                state: '正常'
            }, {
                proLine: '产线',
                number: '128',
                CompletedNumber: '89',
                finish: '69.5%',
                state: '正常'
            }]
        }
    }
}
</script>
<template>
    <div class="g-order-main">
        <!--订单看板-->
        <div class="board-center-hd">
            <h4>拉动系统产线生产状态</h4>
            <div class="board-time">2018-10-20 13:24:15</div>
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="production" label="产线"></el-table-column>
            <el-table-column prop="todayOrder" label="今日订单量"></el-table-column>
            <el-table-column prop="doneOrder" label="已完成订单量"></el-table-column>
            <el-table-column prop="schedule" label="完成进度"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
        <!--状态颜色-->
        <!--红 c-red    #d62e42-->
        <!--绿 c-green  #009944-->
        <!--蓝 c-blue   #00a0e9-->
    </div>
</template>
<script>
export default {
    name:'boardOrder',
    data() {
        return {
            tableData: [{
                production: '装箱南线',
                todayOrder: '128',
                doneOrder: '89',
                schedule: '65.3%',
                status: '正常'
            }, {
                production: '装箱北线',
                todayOrder: '116',
                doneOrder: '79',
                schedule: '61.6%',
                status: '正常'
            }, {
                production: 'E-mini',
                todayOrder: '140',
                doneOrder: '91',
                schedule: '72.1%',
                status: '正常'
            }, {
                production: '前壁',
                todayOrder: '245',
                doneOrder: '135',
                schedule: '65.3%',
                status: '正常'
            }, {
                production: '天花',
                todayOrder: '289',
                doneOrder: '158',
                schedule: '65.3%',
                status: '正常'
            }, {
                production: '轿门',
                todayOrder: '315',
                doneOrder: '215',
                schedule: '65.3%',
                status: '延迟 ( 5 )'
            }, {
                production: '安捷木箱',
                todayOrder: '188',
                doneOrder: '93',
                schedule: '65.3%',
                status: '延迟 ( 3 )'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
    .board-center-hd{
        width: 100%;
        text-align: center;
        color: #333;
        padding: 16px;
        font-size: 16px;
        h4{
            font-size: 18px;
            font-weight: normal;
        }
        .board-time{
            padding-top: 10px;
        }
    }
</style>


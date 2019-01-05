<template>
    <div class="g-order-main">
        <!--今日排产订单-->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="前壁产线" name="first">
                <div class="m-inner-box">
                    <!--待生产 单元格-标红  + c-red-->
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                fixed
                                prop="order"
                                label="订单号"
                                width="140">
                        </el-table-column>
                        <el-table-column
                                prop="parts1"
                                label="部件1">
                        </el-table-column>
                        <el-table-column
                                prop="parts2"
                                label="部件2">
                        </el-table-column>
                        <el-table-column
                                prop="parts3"
                                label="部件3">
                        </el-table-column>
                        <el-table-column
                                prop="parts4"
                                label="部件4">
                        </el-table-column>
                        <el-table-column
                                prop="time"
                                label="交付时间"
                                width="140">
                        </el-table-column>
                        <el-table-column
                                prop="current"
                                label="当前状态"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="place"
                                label="当前位置"
                                width="140">
                        </el-table-column>
                        <el-table-column
                                prop="remarks"
                                label="备注说明"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="handle"
                                label="操作"
                                width="140">
                            <!--<template slot-scope="scope">-->
                                <!--<el-button type="primary" class="minimum" size="mini">确认</el-button>-->
                            <!--</template>-->
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="天花产线" name="second">天花产线</el-tab-pane>
            <el-tab-pane label="轿门产线" name="third">轿门产线</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:'todayProOrder',
    data() {
        return {
            activeName: 'first',
            tableData: [{
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'待生产',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'暂无'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'缺料中',
                place:'前壁1线',
                remarks:'加急'
            }]
        };

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    }
}
</script>


<template>
    <div class="g-order-main">
        <!--当前拉动订单-->
        <div class="tab-pane-btn">
            <el-button type="primary" size="small" @click="dialogTableVisible = true">一键下单</el-button>
        </div>
        <el-dialog style="z-index: 9999" title="一键下单" :visible.sync="dialogTableVisible">
            <!--加急 单元行-标红 tr  + c-red-->
            <el-table :data="gridData" max-height="400">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column fixed prop="order" label="订单号" width="100"></el-table-column>
                <el-table-column prop="parts1" label="部件1"></el-table-column>
                <el-table-column prop="parts2" label="部件2"></el-table-column>
                <el-table-column prop="parts3" label="部件3"></el-table-column>
                <el-table-column prop="parts4" label="部件4"></el-table-column>
                <el-table-column prop="time" label="交付时间" width="120"></el-table-column>
                <el-table-column prop="remarks" label="备注说明" width="180"></el-table-column>
            </el-table>
        </el-dialog>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="前壁产线" name="first">
                <div class="m-inner-box">
                    <div class="m-el-tipper">
                        <div class="tipper-txt">前壁产线 - 拉动批次01    2018-10-21 10:21:32</div>
                        <div class="tipper-handle">
                            <!--<el-button type="danger" size="mini">一键撤回</el-button>-->
                            <el-button type="danger" size="mini">一键缺料</el-button>
                            <el-button type="success" size="mini">一键生产</el-button>
                            <el-button type="primary" size="mini">一键完成</el-button>
                        </div>
                    </div>
                    <!--加急 单元行-标红 tr  + c-red-->
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            max-height="300">
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
                                width="180">
                            <template slot-scope="scope">
                                <!--<el-button type="danger" class="minimum" size="mini">撤回</el-button>-->
                                <el-button type="danger" class="minimum" size="mini">缺料</el-button>
                                <el-button type="success" class="minimum" size="mini">生产</el-button>
                                <el-button type="primary" class="minimum" size="mini">完成</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="m-inner-box">
                    <div class="m-el-tipper">
                        <div class="tipper-txt">前壁产线 - 拉动批次02    2018-10-21 10:21:32</div>
                        <div class="tipper-handle">
                            <!--<el-button type="danger" size="mini">一键撤回</el-button>-->
                            <el-button type="danger" size="mini">一键缺料</el-button>
                            <el-button type="success" size="mini">一键生产</el-button>
                            <el-button type="primary" size="mini">一键完成</el-button>
                        </div>
                    </div>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            max-height="300">
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
                                width="180">
                            <template slot-scope="scope">
                                <!--<el-button type="danger" class="minimum" size="mini">撤回</el-button>-->
                                <el-button type="danger" class="minimum" size="mini">缺料</el-button>
                                <el-button type="success" class="minimum" size="mini">生产</el-button>
                                <el-button type="primary" class="minimum" size="mini">完成</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="天花产线" name="second">天花产线</el-tab-pane>
            <el-tab-pane label="轿门产线" name="third">轿门产线</el-tab-pane>
            <el-tab-pane label="安捷木箱" name="forth">安捷木箱</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:'currentPullOrder',
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
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }],
            gridData: [{
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                remarks:'加急'
            }],
            dialogTableVisible: false,
            multipleSelection: []
        };

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>
<style lang="scss" scoped>
    .g-order-main{
        position: relative;
    }
    .tab-pane-btn{
        position: absolute;
        top:0;
        right:0;
        z-index: 4;
    }
</style>


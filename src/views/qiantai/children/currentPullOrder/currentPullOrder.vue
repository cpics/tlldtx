<template>
  <div class="g-order-main">
    <!--当前拉动订单-->
    <div class="tab-pane-btn">
      <el-button
        type="primary"
        v-if="userRoleMaxType == 'ZX'"
        size="small"
        @click="dialogTableVisible = true"
      >一键下单</el-button>
    </div>
    <el-dialog style="z-index: 9999" title="一键下单" :visible.sync="dialogTableVisible">
      <!--加急 单元行-标红 tr  + c-red-->
      <el-table :data="gridData" max-height="300">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="order" label="订单号" width="100"></el-table-column>
        <el-table-column prop="parts1" label="部件1"></el-table-column>
        <el-table-column prop="parts2" label="部件2"></el-table-column>
        <el-table-column prop="parts3" label="部件3"></el-table-column>
        <el-table-column prop="parts4" label="部件4"></el-table-column>
        <el-table-column prop="time" label="交付时间" width="120"></el-table-column>
        <el-table-column prop="remarks" label="备注说明" width="180"></el-table-column>
      </el-table>
      <div class="m-dialog-btn">
        <el-button type="primary">自动</el-button>
      </div>
    </el-dialog>
    <el-tabs v-model="activeName" @tab-click="chooseCx" v-if="userRoleMaxType == 'ZX'">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <data-list :tableData="tableData">
      <template slot="allAction" v-if="userRoleMaxType == 'ZX'">
        <el-button type="danger" size="mini">一键撤回</el-button>
      </template>
      <template slot-scope="slotProps" slot="itemAction" v-if="userRoleMaxType == 'ZX'">
        <el-button type="danger" class="minimum" size="mini">撤回{{slotProps.rowData.order}}</el-button>
      </template>

      <template slot="allAction" v-if="userRoleMaxType == 'QB'">
        <el-button type="danger" size="mini">一键缺料</el-button>
        <el-button type="warning" size="mini">一键生产</el-button>
        <el-button type="primary" size="mini">一键完成</el-button>
      </template>
      <template slot-scope="slotProps" slot="itemAction" v-if="userRoleMaxType == 'QB'">
          <el-button type="danger" class="minimum" size="mini">缺料</el-button>
        <el-button type="warning" class="minimum" size="mini">生产</el-button>
        <el-button type="primary" class="minimum" size="mini">完成</el-button>
      </template>
      
    </data-list>
    
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
export default {
    name: 'currentPullOrder',
    components: {
        'data-list': dataList
    },
    data() {
        return {
            activeName: 'first',
            userInfo: {},
            userRoleMaxType: '',
            pullPanes: [
                //产线类型
                {
                    label: '前壁产线',
                    type: 1,
                    name: 'first'
                },
                {
                    label: '天花产线',
                    type: 1,
                    name: 'second'
                },
                {
                    label: '轿门产线',
                    type: 1,
                    name: 'three'
                },
                {
                    label: '安捷产线',
                    type: 1,
                    name: 'four'
                }
            ],
            tableData: [
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    current: '已完成',
                    place: '前壁1线',
                    remarks: '加急'
                }
            ],
            gridData: [
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    remarks: '加急'
                },
                {
                    order: '12345678',
                    parts1: 'A-01',
                    parts2: 'B-01',
                    parts3: 'C-01',
                    parts4: 'D-01',
                    time: '2018-12-21',
                    remarks: '加急'
                }
            ],
            dialogTableVisible: false,
            multipleSelection: []
        };
    },
    methods: {
        //选择产线tab
        chooseCx(tab, event) {
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
    },
    created() {
        this.userInfo = cookies.get('userInfo');
        this.userRoleMaxType = this.userInfo.roleMaxType;
        // console.log(this.userInfo);
    }
};
</script>
<style lang="scss" scoped>
.g-order-main {
  position: relative;
}
.tab-pane-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
}
.m-dialog-btn {
  text-align: center;
  padding-top: 20px;
}
</style>


<template>
  <div class="g-order-main">
    <!--当前Wip区订单-->
    <el-tabs v-model="activeName" @tab-click="chooseCx">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <data-list :tableData="tableData">
      <template slot="allAction" v-if="userRoleMaxType == 'ZX'">
        <el-button type="primary" size="mini">一键确认</el-button>
      </template>
      <template slot-scope="slotProps" slot="itemAction" v-if="userRoleMaxType == 'ZX'">
        <el-button type="primary" class="minimum" size="mini">确认{{slotProps.rowData.order}}</el-button>
      </template>
    </data-list>
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
export default {
    name: 'currentWipAreaOrder',
    components: {
        'data-list': dataList
    },
    data() {
        return {
            activeName: 'first',
            pullPanes: [],
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
            ]
        };
    },
    methods: {
        chooseCx(tab, event) {
            console.log(tab, event);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
    created() {
        this.userInfo = cookies.get('userInfo');
        this.userRoleMaxType = this.userInfo.roleMaxType;
        if (this.userRoleMaxType == 'ZX') {
            this.pullPanes = [
                {
                    label: '前壁产线',
                    type: 1,
                    name: 'first'
                },
                {
                    label: '天花产线',
                    type: 2,
                    name: 'second'
                },
                {
                    label: '轿门产线',
                    type: 3,
                    name: 'three'
                },
                {
                    label: '安捷产线',
                    type: 4,
                    name: 'four'
                }
            ];
        } else if (this.userRoleMaxType == 'QB') {
            this.pullPanes = [
                {
                    label: '装箱南线',
                    type: 1,
                    name: 'first'
                },
                {
                    label: '装箱北线',
                    type: 1,
                    name: 'second'
                }
            ];
        }
    }
};
</script>
<style lang="scss" scoped>
.m-inner-box {
  margin-bottom: 25px;
}
</style>


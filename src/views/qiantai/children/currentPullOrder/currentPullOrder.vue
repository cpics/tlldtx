<template>
  <div class="g-order-main">
    <!--当前拉动订单-->
    <div class="tab-pane-btn">
      <el-button
        type="primary"
        v-if="userRoleMaxType == 'ZX'"
        size="small"
        @click="showGridPoP"
      >一键下单</el-button>
    </div>
    <el-dialog style="z-index: 9999;" title="一键下单" :visible.sync="dialogTableVisible" width="80%">
      <!--加急 单元行-标红 tr  + c-red-->
      <el-table :data="gridData" @selection-change="handleSelectionChange" max-height="500">
        <el-table-column type="selection" fixed width="55"></el-table-column>
        <el-table-column
          :width="getWidth(item)"
          v-for="(item,index) in headers"
          :key="index"
          :prop="item.props"
          :label="item.name"
        ></el-table-column>
      </el-table>
      <div class="m-dialog-btn">
        <el-button type="primary" @click="yijianxiadan">下单</el-button>
      </div>
    </el-dialog>
    <el-tabs v-model="activeName" @tab-click="chooseCx" v-if="userRoleMaxType=='ZX'">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <div v-for="(item,i) in tableData" :key="i">
      <data-list
        :isJmDir="item.batchType == 6"
        :orderName="`${userRoleMaxType=='ZX'?activePane.label:(item.batchLine==1?'装箱南线':(item.batchLine==2?'装箱北线':'E-mini'))} - ${item.batchNo} ${item.piciDate}`"
        :orderList="item.orderList"
        :headers="headers"
      >
        <template slot-scope="slotProps" slot="allAction">
          <template v-if="userRoleMaxType == 'ZX'">
            <el-button type="danger" size="mini" @click="yijiancehui(item)">一键撤回</el-button>
          </template>

          <template v-if="userRoleMaxType == 'QB'">
            <el-button
              type="danger"
              v-if="item.orderArrayStatus == '已下单'"
              @click="yijianqueliao(item)"
              size="mini"
            >一键缺料</el-button>
            <el-button
              type="warning"
              v-if="item.orderArrayStatus == '已下单'"
              @click="yijianshengchan(item)"
              size="mini"
            >一键生产</el-button>
            <el-button
              type="primary"
              v-if="item.orderArrayStatus == '生产中'"
              @click="yijianshengchanwancheng(item)"
              size="mini"
            >一键完成</el-button>
          </template>
        </template>
        <template slot-scope="slotProps" slot="itemAction">
          <template v-if="userRoleMaxType == 'ZX'">
            <!-- <el-button
              v-if="slotProps.rowData.currentStatus == '未安排'"
              type="primary"
              class="minimum"
              size="mini"
              @click="xiadan(i,slotProps.rowData)"
            >下单</el-button>-->
            <el-button
              v-if="slotProps.rowData.currentStatus == '已下单'"
              type="danger"
              class="minimum"
              size="mini"
              @click="cehui(item,slotProps.rowData)"
            >撤回</el-button>
          </template>
          <template v-if="userRoleMaxType == 'QB'">
            <el-button
              type="danger"
              class="minimum"
              size="mini"
              v-if="slotProps.rowData.currentStatus == '已下单'"
              @click="queliao(item,slotProps.rowData)"
            >缺料</el-button>
            <el-button
              v-if="slotProps.rowData.currentStatus == '已下单'"
              type="warning"
              class="minimum"
              size="mini"
              @click="shengchan(item,slotProps.rowData)"
            >生产</el-button>
            <el-button
              v-if="slotProps.rowData.currentStatus == '生产中'"
              type="primary"
              class="minimum"
              size="mini"
              @click="shengchanwancheng(item,slotProps.rowData)"
            >完成</el-button>
          </template>
        </template>
      </data-list>
    </div>
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
import {
    ladongOrder,
    xiadan,
    shengchan,
    cehui,
    shengchanwancheng,
    queliao,
    queryWeianpai,
    yijianxiadan,
    yijiancehui,
    yijianshengchan,
    yijianshengchanwancheng,
    yijianqueliao
} from '../../../../api/index';

import qianbi from '../../../../common/category/qianbi';
import tianhua from '../../../../common/category/tianhua';
import jiaomen from '../../../../common/category/jiaomen';
import anjie from '../../../../common/category/anjie';

import getQrStr from '../../../../common/utils/getQRstring';

import getWidth from '../../../../common/utils/getWidth.js';

export default {
    name: 'currentPullOrder',
    components: {
        'data-list': dataList
    },
    data() {
        return {
            activeName: 'qianbi',
            activePane: {},
            headers: [],
            userInfo: {},
            userRoleMaxType: '',
            pullPanes: [
                //产线类型
                {
                    label: '前壁产线',
                    type: 4,
                    name: 'qianbi',
                    headers: qianbi
                },
                {
                    label: '天花产线',
                    type: 5,
                    name: 'tianhua',
                    headers: tianhua
                },
                {
                    label: '轿门产线',
                    type: 6,
                    name: 'jiaomen',
                    headers: jiaomen
                },
                {
                    label: '安捷产线',
                    type: 7,
                    name: 'anjie',
                    headers: anjie
                }
            ],
            qbPullPanes: [
                //产线类型
                {
                    label: '装箱南线',
                    type: 1,
                    name: 'zhuangxiangnan',
                    headers: null
                },
                {
                    label: '装箱北线',
                    type: 2,
                    name: 'zhuangxiangbei',
                    headers: null
                }
            ],
            tableData: [],
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
        getWidth(item) {
            let width = getWidth(item);
            return width;
        },
        //选择产线tab
        chooseCx(tab, event) {
            this.activePane = this.pullPanes[tab.index];
            this.headers = this.pullPanes[tab.index].headers;
            this.getData();
        },
        filterStatus(orderObject) {
            let orderArrayStatus = '';
            orderObject.orderList.forEach(item => {
                if (item.currentStatus == '已下单') {
                    orderArrayStatus = '已下单';
                } else if (item.currentStatus == '生产中') {
                    orderArrayStatus = '生产中';
                }
            });
            orderObject.orderArrayStatus = orderArrayStatus;
        },
        //更新订单为下单
        async xiadan(order) {
            // return;
            let res = await xiadan({
                type: this.activePane.type,
                orderNo: order.orderNo
            });
            if (res.code == 0) {
                order.currentStatus = '已下单';
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //撤回
        async cehui(orderObject, orderItem) {
            let res = await cehui({
                type: orderObject.batchType,
                orderNo: orderItem.orderNo,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);
                let orderItemIndex = orderObject.orderList.indexOf(orderItem);
                orderObject.orderList.splice(orderItemIndex, 1);
                if (orderObject.orderList.length == 0) {
                    this.tableData.splice(orderObjectIndex, 1);
                }
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //一键撤回
        async yijiancehui(orderObject) {
            let res = await yijiancehui({
                type: orderObject.batchType,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);
                this.tableData.splice(orderObjectIndex, 1);

                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //生产
        async shengchan(orderObject, orderItem) {
            let res = await shengchan({
                type: orderObject.batchType,
                orderNo: orderItem.orderNo,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                orderItem.currentStatus = '生产中';
                this.filterStatus(orderObject);
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //一键生产
        async yijianshengchan(orderObject) {
            let res = await yijianshengchan({
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                orderObject.orderList.forEach(item => {
                    item.currentStatus = '生产中';
                });
                this.filterStatus(orderObject);
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //生产完成
        async shengchanwancheng(orderObject, orderItem) {
            let res = await shengchanwancheng({
                type: orderObject.batchType,
                orderNo: orderItem.orderNo,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);
                let orderItemIndex = orderObject.orderList.indexOf(orderItem);
                orderObject.orderList.splice(orderItemIndex, 1);
                if (orderObject.orderList.length == 0) {
                    this.tableData.splice(orderObjectIndex, 1);
                }
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },

        //一键生产完成
        async yijianshengchanwancheng(orderObject) {
            let res = await yijianshengchanwancheng({
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);

                this.tableData.splice(orderObjectIndex, 1);

                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //缺料
        async queliao(orderObject, orderItem) {
            let res = await queliao({
                type: orderObject.batchType,
                orderNo: orderItem.orderNo,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);
                let orderItemIndex = orderObject.orderList.indexOf(orderItem);
                orderObject.orderList.splice(orderItemIndex, 1);
                if (orderObject.orderList.length == 0) {
                    this.tableData.splice(orderObjectIndex, 1);
                }
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
                this.$emit('getCountQueliao');
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },

        //一键缺料
        async yijianqueliao(orderObject) {
            let res = await yijianqueliao({
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                let orderObjectIndex = this.tableData.indexOf(orderObject);

                this.tableData.splice(orderObjectIndex, 1);

                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });

                this.$emit('getCountQueliao');
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        showGridPoP() {
            this.dialogTableVisible = true;
            this.getGridData();
        },
        // deleteRow(index, rows) {
        //     rows.splice(index, 1);
        // },
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
            console.log(this.multipleSelection);
        },
        //获取拉动接口数据
        async getData() {
            this.tableData = [];
            let params = {
                currentpage: 1,
                pagesize: 100000
            };
            if (this.userRoleMaxType == 'ZX') {
                params.type = this.activePane.type;
            }
            let res = await ladongOrder(params);
            if (res.code == 0) {
                console.log(this.activePane);
                res.objects.forEach(orderArray => {
                    orderArray.orderList.forEach(item => {
                        // item.guigeRiqi = item.guigeRiqi.replace(/\r\n/g, '\n');
                        if (orderArray.batchType == 4) {
                            item.currentStatus = item.qbStatus;
                        } else if (orderArray.batchType == 5) {
                            item.currentStatus = item.thStatus;
                        } else if (orderArray.batchType == 6) {
                            item.currentStatus = item.jmStatus;
                            getQrStr(item);
                            // console.log(this.headers);
                        } else if (orderArray.batchType == 7) {
                            item.currentStatus = item.ajStatus;
                        }

                        console.log(item.currentStatus);
                    });
                    this.filterStatus(orderArray);
                });
                this.tableData = res.objects;
                // console.log(this.tableData);
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //获取一键下单的列表数据
        async getGridData() {
            let res = await queryWeianpai({
                type: this.activePane.type
            });
            if (res.code == 0) {
                this.gridData = res.objects;
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //一键下单
        async yijianxiadan() {
            let orderArr = [];
            if (this.multipleSelection.length == 0) {
                this.$notify.error({
                    type: '错误',
                    message: '请选择要下单的数据'
                });
                return false;
            }
            this.multipleSelection.forEach(item => {
                orderArr.push(item.orderNo);
            });
            let res = await yijianxiadan({
                type: this.activePane.type,
                ordersNo: orderArr.join(',')
            });
            if (res.code == 0) {
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
                this.getGridData();
                this.getData();
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        }
    },
    created() {
        this.userInfo = cookies.get('userInfo');
        this.userRoleMaxType = this.userInfo.roleMaxType;

        if (this.userRoleMaxType == 'ZX') {
            if (this.userInfo.role == 3) {
                this.pullPanes.splice(0, 2);
            }
            this.activePane = this.pullPanes[0];
            this.headers = this.pullPanes[0].headers;
        } else if (this.userRoleMaxType == 'QB') {
            this.pullPanes.forEach(item => {
                if (item.type == this.userInfo.role) {
                    this.qbPullPanes.forEach(pane => {
                        pane.headers = item.headers;
                    });
                }
            });

            this.pullPanes = this.qbPullPanes;
            this.activePane = this.pullPanes[0];
            this.activeName = this.activePane.name;
            // this.activePane = this.pullPanes.find(item => {
            //     return (item.type = this.userInfo.role);
            // });
            this.headers = this.activePane.headers;
        }

        this.getData();
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


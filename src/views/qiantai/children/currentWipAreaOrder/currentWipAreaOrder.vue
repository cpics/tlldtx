<template>
  <div class="g-order-main">
    <!--当前Wip区订单-->
    <el-tabs v-model="activeName" @tab-click="chooseCx">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <div v-for="(item,i) in tableData" :key="i">
      <data-list :orderList="item.orderList" :headers="headers" :isJmDir="item.batchType == 6">
        <template slot-scope="slotProps" slot="allAction">
          <template v-if="userRoleMaxType == 'ZX'">
            <el-button
              type="primary"
              v-if="item.orderArrayStatus=='生产完成'"
              @click="yijiandingdanwancheng(item)"
              size="mini"
            >一键确认</el-button>
          </template>

          <!-- <template v-if="userRoleMaxType == 'QB'"></template> -->
        </template>
        <template slot-scope="slotProps" slot="itemAction">
          <template v-if="userRoleMaxType == 'ZX'">
            <el-button
              type="primary"
              class="minimum"
              size="mini"
              v-if="slotProps.rowData.currentStatus == '生产完成'"
              @click="orderFinish(item,slotProps.rowData)"
            >确认</el-button>
          </template>
          <template v-if="userRoleMaxType == 'QB'">
            <!-- <el-button type="primary" size="mini">取消标记</el-button> -->
          </template>
        </template>
      </data-list>
    </div>
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
import { wipOrder, shengchan, orderFinish,yijiandingdanwancheng } from '../../../../api/index';

import qianbi from '../../../../common/category/qianbi';
import tianhua from '../../../../common/category/tianhua';
import jiaomen from '../../../../common/category/jiaomen';
import anjie from '../../../../common/category/anjie';

import getQrStr from '../../../../common/utils/getQRstring';
export default {
    name: 'currentWipAreaOrder',
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
            tableData: []
        };
    },
    methods: {
    //选择产线tab
        chooseCx(tab, event) {
            this.activePane = this.pullPanes[tab.index];
            this.headers = this.pullPanes[tab.index].headers;
            this.getData();
        },
        filterStatus(orderObject) {
            let orderArrayStatus = '';
            console.log(orderObject.batchNo);
            orderObject.orderList.forEach(item => {
                console.log(item.currentStatus);
                if (item.currentStatus == '订单完成') {
                    orderArrayStatus = '订单完成';
                } else if (item.currentStatus == '生产完成') {
                    orderArrayStatus = '生产完成';
                }
            });
            orderObject.orderArrayStatus = orderArrayStatus;
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        async getData() {
            let res = await wipOrder({
                type: this.activePane.type,
                currentpage: 1,
                pagesize: 100000
            });
            if (res.code == 0) {
                res.objects.forEach(orderArray => {
                    orderArray.orderList.forEach(item => {
                        if (orderArray.batchType == 4) {
                            item.currentStatus = item.qbStatus;
                        } else if (orderArray.batchType == 5) {
                            item.currentStatus = item.thStatus;
                        } else if (orderArray.batchType == 6) {
                            item.currentStatus = item.jmStatus;
                            getQrStr(item);
                        } else if (orderArray.batchType == 7) {
                            item.currentStatus = item.ajStatus;
                        }

                        // console.log(item.currentStatus);
                    });
                    this.filterStatus(orderArray);
                });
                this.tableData = res.objects;

                console.log(this.tableData);
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        //更新订单为完成结束
        async orderFinish(orderObject, orderItem) {
            // return;
            let res = await orderFinish({
                type: orderObject.batchType,
                orderNo: orderItem.orderNo,
                batchNo: orderObject.batchNo
            });
            if (res.code == 0) {
                orderItem.currentStatus = '订单完成';
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
        //更新订单为完成结束
        async yijiandingdanwancheng(orderObject) {
            // return;
            let res = await yijiandingdanwancheng({
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
        }
    },
    created() {
        this.userInfo = cookies.get('userInfo');
        this.userRoleMaxType = this.userInfo.roleMaxType;

        if (this.userRoleMaxType == 'ZX') {
            if(this.userInfo.role==3){
                this.pullPanes.splice(0,2);
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
.m-inner-box {
  margin-bottom: 25px;
}
</style>


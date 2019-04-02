<template>
  <div class="g-order-main">
    <!--当前Wip区订单-->
    <el-tabs v-model="activeName" @tab-click="chooseCx">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <div v-for="(item,i) in tableData" :key="i">
      <data-list :orderList="item.orderList" :headers="headers" :isJmDir="item.batchType == 6">
        <template slot-scope="slotProps" slot="allAction">
          <template v-if="userRoleMaxType == 'ZX'"></template>

          <template v-if="userRoleMaxType == 'QB'">
            <el-button type="primary" @click="yijianquxiaoqueliao(item)" size="mini">一键取消标记</el-button>
          </template>
        </template>
        <template slot-scope="slotProps" slot="itemAction">
          <template v-if="userRoleMaxType == 'ZX'"></template>
          <template v-if="userRoleMaxType == 'QB'">
            <el-button
              @click="quxiaoqueliao(item,slotProps.rowData)"
              type="primary"
              size="mini"
            >取消标记</el-button>
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
    queliaoOrder,
    quxiaoqueliao,
    yijianquxiaoqueliao
} from '../../../../api/index';

import qianbi from '../../../../common/category/qianbi';
import tianhua from '../../../../common/category/tianhua';
import jiaomen from '../../../../common/category/jiaomen';
import anjie from '../../../../common/category/anjie';


import getQrStr from '../../../../common/utils/getQRstring';

export default {
    name: 'unFinishOrder',
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
        //取消缺料
        async quxiaoqueliao(orderObject, orderItem) {
            // return;
            let res = await quxiaoqueliao({
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
        //一键取消缺料
        async yijianquxiaoqueliao(orderObject) {
            // return;
            let res = await yijianquxiaoqueliao({
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
        async getData() {
            let res = await queliaoOrder({
                type: this.activePane.type,
                currentpage: 1,
                pagesize: 100000
            });
            if (res.code == 0) {
                res.objects.forEach(orderArray => {
                    orderArray.orderList.forEach(item => {
                        if (orderArray.batchType == 6) {
                            item.currentStatus = item.jmStatus;
                            getQrStr(item);
                            // console.log(this.headers);
                        }
                    });
                    // this.filterStatus(orderArray);
                });
                this.tableData = res.objects;
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
.m-inner-box {
  margin-bottom: 25px;
}
</style>


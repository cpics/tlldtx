<template>
  <div class="g-order-main">
    <!--当前Wip区订单-->
    <el-tabs v-model="activeName" @tab-click="chooseCx" v-if="userRoleMaxType == 'ZX'">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <data-list :tableData="tableData" :headers="headers">
      <template slot-scope="slotProps" slot="allAction">
        <template v-if="userRoleMaxType == 'ZX'">
          <el-button type="primary" size="mini">一键确认</el-button>
        </template>

        <template v-if="userRoleMaxType == 'QB'"></template>
      </template>
      <template slot-scope="slotProps" slot="itemAction">
        <template v-if="userRoleMaxType == 'ZX'">
          <el-button type="primary" class="minimum" size="mini">确认{{slotProps.rowData.order}}</el-button>
        </template>
        <template v-if="userRoleMaxType == 'QB'">
          <!-- <el-button type="primary" size="mini">取消标记</el-button> -->
        </template>
      </template>
    </data-list>
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
import { wipOrder, shengchan } from '../../../../api/index';

import qianbi from '../../../../common/category/qianbi';
import tianhua from '../../../../common/category/tianhua';
import jiaomen from '../../../../common/category/jiaomen';
import anjie from '../../../../common/category/anjie';
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
                this.tableData = res.objects.entityList;
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
            this.activePane = this.pullPanes[0];
            this.headers = this.pullPanes[0].headers;
        } else if (this.userRoleMaxType == 'QB') {
            this.activePane = this.pullPanes.find(item => {
                return (item.type = this.userInfo.role);
            });
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


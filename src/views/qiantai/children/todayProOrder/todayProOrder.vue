<template>
  <div class="g-order-main">
    <!--当前Wip区订单-->
    <el-tabs v-model="activeName" 
    @tab-click="chooseCx" 
    >
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <data-list :orderList="tableData" :headers="headers">
      <!-- <template slot-scope="slotProps" slot="allAction">
        <template v-if="userRoleMaxType == 'ZX'"></template>

        <template v-if="userRoleMaxType == 'QB'"></template>
      </template>
      <template slot-scope="slotProps" slot="itemAction">
        <template v-if="userRoleMaxType == 'ZX'"></template>
        <template v-if="userRoleMaxType == 'QB'"></template>
      </template> -->
    </data-list>
  </div>
</template>
<script>
import dataList from '../../components/dataList/dataList';
import cookies from '../../../../common/utils/cookies.js';
import { queryPaichan, shengchan } from '../../../../api/index';

import qianbi from '../../../../common/category/qianbi';
import tianhua from '../../../../common/category/tianhua';
import jiaomen from '../../../../common/category/jiaomen';
import anjie from '../../../../common/category/anjie';
export default {
    name: 'toDayProOrder',
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
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        async getData() {
            let res = await queryPaichan({
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
            if(this.userInfo.role==3){
                this.pullPanes.splice(0,2);
            }
            this.activePane = this.pullPanes[0];
            this.headers = this.pullPanes[0].headers;
        } else if (this.userRoleMaxType == 'QB') {
            this.pullPanes.forEach((item)=>{
                if(item.type == this.userInfo.role){
                    this.qbPullPanes.forEach(pane=>{
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


<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="chooseCx">
      <el-tab-pane v-for="(item,i) in pullPanes" :key="i" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="lineName" label="产线" width="180"></el-table-column>
      <el-table-column prop="total" label="今日订单量" width="180"></el-table-column>
      <el-table-column prop="finished" label="已完成订单"></el-table-column>
      <el-table-column prop="finishPercent" label="完成进度"></el-table-column>
      <el-table-column prop="workStatus" label="状态"></el-table-column>
    </el-table>
  </div>
  <!--状态颜色-->
  <!--红 c-red    #d62e42-->
  <!--绿 c-green  #009944-->
  <!--蓝 c-blue   #00a0e9-->
</template>

<script>
import { jinrikanban } from '../../../../api/index';
export default {
    name: 'index',
    data() {
        return {
            tableData: [],
            activeName: 'baiban',
            activePane: {
                label: '白班',
                type: 'day',
                name: 'baiban'
            },
            pullPanes: [
                {
                    label: '白班',
                    type: 'day',
                    name: 'baiban'
                },
                {
                    label: '夜班',
                    type: 'night',
                    name: 'yeban'
                }
            ]
        };
    },
    methods: {
        async getData(type) {
            let res = await jinrikanban({
                worktype: type
            });
            if (res.code === 0) {
                res.objects.forEach(item => {
                    item.finishPercent = parseInt(item.finishPercent * 100) + '%';
                });
                this.tableData = res.objects;
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        chooseCx(tab, event) {
            this.activePane = this.pullPanes[tab.index];
            this.activeName = this.pullPanes[tab.index].name;
            this.getData(this.activePane.type);
        }
    },
    created() {
        this.getData('day');
    }
};
</script>
<template>
  <div class="g-order-main">
    <!--订单看板-->
    <div class="board-center-hd">
      <h4>拉动系统产线生产状态</h4>
      <!-- <div class="board-time">2018-10-20 13:24:15</div> -->
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="lineName" label="产线"></el-table-column>
      <el-table-column prop="total" label="今日订单量"></el-table-column>
      <el-table-column prop="finished" label="已完成订单量"></el-table-column>
      <el-table-column prop="finishPercent" label="完成进度"></el-table-column>
      <el-table-column prop="workStatus" label="状态"></el-table-column>
    </el-table>
    <!--状态颜色-->
    <!--红 c-red    #d62e42-->
    <!--绿 c-green  #009944-->
    <!--蓝 c-blue   #00a0e9-->
  </div>
</template>
<script>
import { jinrikanban } from '../../../../api/index';
export default {
    name: 'boardOrder',
    data() {
        return {
            tableData: []
        };
    },
    methods: {
        async getData(){
            let res = await jinrikanban();
            if(res.code === 0){
                res.objects.forEach(item => {
                    item.finishPercent = item.finishPercent*100+'%';
                });
                this.tableData = res.objects;
            }else{
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
            
        }
    },
    created() {
        this.getData();
    }
};
</script>
<style lang="scss" scoped>
.board-center-hd {
  width: 100%;
  text-align: center;
  color: #333;
  padding: 16px;
  font-size: 16px;
  h4 {
    font-size: 18px;
    font-weight: normal;
  }
  .board-time {
    padding-top: 10px;
  }
}
</style>


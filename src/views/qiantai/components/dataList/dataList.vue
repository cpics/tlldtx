<template>
  <div class="m-inner-box">
    <div class="m-el-tipper">
      <div class="tipper-txt">前壁产线 - 拉动批次01 2018-10-21 10:21:32</div>
      <div class="tipper-handle">
        <!-- <template slot-scope="scope"> -->
          <slot name="allAction" ></slot>
        <!-- </template> -->
      </div>
    </div>
    <!--加急 单元行-标红 tr  + c-red-->
    <el-table :data="tableData" style="width: 100%" max-height="280">
      <el-table-column 
      v-for="(item,index) in headers" 
      :key="index"
      :prop="item.props"
      :label="item.name"></el-table-column>

      <!-- <el-table-column fixed prop="order" label="订单号" width="140"></el-table-column>
      <el-table-column prop="parts1" label="部件1"></el-table-column>
      <el-table-column prop="parts2" label="部件2"></el-table-column>
      <el-table-column prop="parts3" label="部件3"></el-table-column>
      <el-table-column prop="parts4" label="部件4"></el-table-column>
      <el-table-column prop="time" label="交付时间" width="140"></el-table-column>
      <el-table-column prop="current" label="当前状态" width="120"></el-table-column>
      <el-table-column prop="place" label="当前位置" width="140"></el-table-column>
      <el-table-column prop="remarks" label="备注说明" width="180"></el-table-column>-->
      <el-table-column prop="handle" label="操作" width="180"> 
        <template slot-scope="scope">
          <slot :rowData="scope.row" name="itemAction"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: 'dataList',
    props: {
        headers:Array,
        tableData: Array
    },
    mounted(){
        console.log(this.headers);
    }
};
</script>

<style>
</style>

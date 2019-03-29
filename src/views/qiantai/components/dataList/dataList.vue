<template>
  <div class="m-inner-box">
    <div class="m-el-tipper">
      <!-- <div class="tipper-txt"></div> -->
      <div class="tipper-txt">{{orderName}}</div>
      <!-- <div class="tipper-txt">前壁产线 - 拉动批次01 2018-10-21 10:21:32</div> -->
      <div class="tipper-handle">
        <!-- <template slot-scope="scope"> -->
        <slot name="allAction"></slot>
        <!-- </template> -->
      </div>
    </div>
    <!--加急 单元行-标红 tr  + c-red-->
    <el-table :data="orderList" style="width: 100%">
      <el-table-column
        v-for="(item,index) in headers"
        :key="index"
        :prop="item.props"
        :label="item.name"
      ></el-table-column>
      <el-table-column v-if="isJmDir" width="300">
        <template slot-scope="props">
          <div class="jmtm">
            <div>
              <canvas :id="'qr1'+props.row.orderNo"  ></canvas>
            </div>
            <div>
              <canvas :id="'qr2'+props.row.orderNo"  ></canvas>
            </div>
            <div>
              <canvas :id="'qr3'+props.row.orderNo"  ></canvas>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="handle"  label="操作">
        <template slot-scope="scope">
          <slot :rowData="scope.row" name="itemAction"></slot>
        </template>
      </el-table-column>
      <!-- <el-table-column type="expand" v-if="isJmDir">
        <template slot-scope="props">
          <div class="jmtm">
            <div>
              <canvas :id="'qr1'+props.row.orderNo" width="150px" height="150px"></canvas>
            </div>
            <div>
              <canvas :id="'qr2'+props.row.orderNo" width="150px" height="150px"></canvas>
            </div>
            <div>
              <canvas :id="'qr3'+props.row.orderNo" width="150px" height="150px"></canvas>
            </div>
          </div>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
    name: 'dataList',
    props: {
        headers: Array,
        orderList: Array,
        orderName: String,
        isJmDir: Boolean
    },
    methods: {},
    mounted() {
        this.$nextTick(() => {
            if (this.isJmDir) {
                this.orderList.forEach(item => {
                    QRCode.toCanvas(
                        document.getElementById('qr1' + item.orderNo),
                        item.qr1,
                        {
                            width: 80,
                            height: 80
                        }
                    );
                    QRCode.toCanvas(
                        document.getElementById('qr2' + item.orderNo),
                        item.qr2,
                        {
                            width: 80,
                            height: 80
                        }
                    );
                    QRCode.toCanvas(
                        document.getElementById('qr3' + item.orderNo),
                        item.qr3,
                        {
                            width: 80,
                            height: 80
                        }
                    );
                });
            }
        });
        // QRCode.toCanvas(document.getElementById('qr1'), this.shareUrl);
        // console.log(this.headers);
        // console.log()
    }
};
</script>

<style>
.jmtm {
  /* font-family: 'code128'; */
  /* font-size:25px; */
}
.jmtm div {
  float: left;
  width: 30%;
  text-align: center;
  /* padding-right:100px; */
}
.el-table__expand-icon {
  display: none;
}
</style>

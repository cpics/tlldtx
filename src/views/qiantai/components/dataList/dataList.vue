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
    <el-table :data="orderList" style="width: 100%;">
      <el-table-column
        v-if="!isJmDir"
        v-for="(item,index) in headers"
        :width="getWidth(item)"
        :key="index"
        :prop="item.props"
        :label="item.name"
      ></el-table-column>
      <template v-if="isJmDir">
        <el-table-column
          v-for="(item,ii) in jiaomen1"
          :width="getWidth(item)"
          :key="ii"
          :prop="item.props"
          :label="item.name"
        ></el-table-column>

        <el-table-column v-if="isJmDir" width="100" label="二维码1">
          <template slot-scope="props">
            <div class="jmtm">
              <div>
                <qrcode-vue :value="props.row.qr1" :size="80" level="H"></qrcode-vue>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item,iii) in jiaomen2"
          :width="getWidth(item)"
          :key="10+iii"
          :prop="item.props"
          :label="item.name"
        ></el-table-column>
        <el-table-column v-if="isJmDir" width="100" label="二维码2">
          <template slot-scope="props">
            <div class="jmtm">
              <div>
                <qrcode-vue :value="props.row.qr2" :size="80" level="H"></qrcode-vue>
                <!-- <canvas :id="'qr2'+props.row.orderNo"></canvas> -->
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item,iiii) in jiaomen3"
          :width="getWidth(item)"
          :key="100+iiii"
          :prop="item.props"
          :label="item.name"
        ></el-table-column>
        <el-table-column v-if="isJmDir" width="100" label="二维码3">
          <template slot-scope="props">
            <div class="jmtm">
              <div>
                <qrcode-vue :value="props.row.qr3" :size="80" level="H"></qrcode-vue>
                <!-- <canvas :id="'qr3'+props.row.orderNo"></canvas> -->
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item,iiii) in jiaomen4"
          :width="getWidth(item)"
          :key="1000+iiii"
          :prop="item.props"
          :label="item.name"
        ></el-table-column>
      </template>
      <el-table-column prop="handle" fixed="right" label="操作" width="150">
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
import {
    jiaomen2,
    jiaomen1,
    jiaomen3,
    jiaomen4
} from '../../../../common/category/jiaomen.js';
import getWidth from '../../../../common/utils/getWidth.js';
import QRCode from 'qrcode';
import QrcodeVue from 'qrcode.vue';
export default {
    name: 'dataList',
    props: {
        headers: Array,
        orderList: Array,
        orderName: String,
        isJmDir: Boolean
    },

    data() {
        return {
            jiaomen1: jiaomen1,
            jiaomen2: jiaomen2,
            jiaomen3: jiaomen3,
            jiaomen4: jiaomen4
        };
    },
    methods: {
        getWidth(item) {
            let width = getWidth(item);
            return width;
        }
    },
    components:{
        QrcodeVue
    },
    mounted() {
        console.log(this.orderList);
        this.$nextTick(() => {
            if (this.isJmDir) {
                this.orderList.forEach(item => {
                    // debugger;
                    // QRCode.toCanvas(
                    //     document.getElementById('qr1' + item.orderNo),
                    //     item.qr1,
                    //     {
                    //         width: 80,
                    //         height: 80
                    //     }
                    // );
                    // QRCode.toCanvas(
                    //     document.getElementById('qr2' + item.orderNo),
                    //     item.qr2,
                    //     {
                    //         width: 80,
                    //         height: 80
                    //     }
                    // );
                    // QRCode.toCanvas(
                    //     document.getElementById('qr3' + item.orderNo),
                    //     item.qr3,
                    //     {
                    //         width: 80,
                    //         height: 80
                    //     }
                    // );
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
table tbody {
  font-weight: bolder;
}
.jmtm div {
  width: 80px;
  height: 80px;
  /* float: left; */
  /* width: 30%; */
  /* text-align: center; */
  /* padding-right:100px; */
}
</style>

<template>
    <div class="g-order-main">
      <!--当前Wip区订单-->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="装箱南线" name="first">
          <div class="m-inner-box">
            <div class="m-el-tipper">
              <div class="tipper-txt">装箱南线 - 拉动批次01    2018-10-21 10:21:32</div>
              <div class="tipper-handle">
                <el-button type="primary" size="small">一键确认</el-button>
              </div>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%"
                max-height="300">
              <el-table-column
                  fixed
                  prop="order"
                  label="订单号"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="parts1"
                  label="部件1">
              </el-table-column>
              <el-table-column
                  prop="parts2"
                  label="部件2">
              </el-table-column>
              <el-table-column
                  prop="parts3"
                  label="部件3">
              </el-table-column>
              <el-table-column
                  prop="parts4"
                  label="部件4">
              </el-table-column>
              <el-table-column
                  prop="time"
                  label="交付时间"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="current"
                  label="当前状态"
                  width="120">
              </el-table-column>
              <el-table-column
                  prop="place"
                  label="当前位置"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="remarks"
                  label="备注说明">
              </el-table-column>
              <el-table-column
                      prop="handle"
                      label="操作">
                <template slot-scope="scope">
                  <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData4)"
                          type="text">
                    确认
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="m-inner-box">
            <div class="m-el-tipper">
              <div class="tipper-txt">装箱南线 - 拉动批次02    2018-10-21 10:21:32</div>
              <div class="tipper-handle">
                <el-button type="primary" size="small">一键确认</el-button>
              </div>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%"
                max-height="300">
              <el-table-column
                  fixed
                  prop="order"
                  label="订单号"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="parts1"
                  label="部件1">
              </el-table-column>
              <el-table-column
                  prop="parts2"
                  label="部件2">
              </el-table-column>
              <el-table-column
                  prop="parts3"
                  label="部件3">
              </el-table-column>
              <el-table-column
                  prop="parts4"
                  label="部件4">
              </el-table-column>
              <el-table-column
                  prop="time"
                  label="交付时间"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="current"
                  label="当前状态"
                  width="120">
              </el-table-column>
              <el-table-column
                  prop="place"
                  label="当前位置"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="remarks"
                  label="备注说明">
              </el-table-column>
              <el-table-column
                      prop="handle"
                      label="操作">
                <template slot-scope="scope">
                  <el-button
                          @click.native.prevent="deleteRow(scope.$index, tableData4)"
                          type="text">
                    --
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="装箱北线" name="second">装箱北线</el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
export default {
    name:'currentWipAreaOrder',
    data() {
        return {
            activeName: 'second',
            tableData: [{
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }, {
                order: '12345678',
                parts1: 'A-01',
                parts2: 'B-01',
                parts3: 'C-01',
                parts4: 'D-01',
                time:'2018-12-21',
                current:'已完成',
                place:'前壁1线',
                remarks:'加急'
            }]
        };

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    }
}
</script>
<style lang="scss" scoped>
  .m-inner-box{
    margin-bottom: 40px;
  }
</style>


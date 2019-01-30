<template>
  <el-form class="m-form" ref="form" :model="form" label-width="300px">
    <!--系统设置-->
    <el-form-item label="装配部门设置：">
      <el-select v-model="zxIndex" @change="selcetChange" placeholder="请选择">
        <el-option
          v-for="item in ZxArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >{{ item.label }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="关联生产部门及Wip区数量设置：">
      <div class="d-check-row" v-for="(item,index) in cxArray" :key="index">
        <el-checkbox v-model="item.checked">{{item.name}}</el-checkbox>
        <el-input class="wips" v-model="item.wips" placeholder="Wip区数量"></el-input>
        <el-input class="wips" v-model="item.cars" placeholder="cars订单量"></el-input>
      </div>
    </el-form-item>
    <el-form-item class="pt-50">
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {
    queryScInfo,
    updateScInfo,
    saveOrupdateWipsInfo
} from '../../../../api/index';
export default {
    name: 'systemEdit',
    data() {
        return {
            cxArray: [
                {
                    name: '前壁',
                    id: 0,
                    wips: '',
                    cars: '',
                    type: 4,
                    checked: false
                },
                {
                    name: '天花',
                    id: 0,
                    wips: '',
                    cars: '',
                    type: 5,
                    checked: false
                },
                {
                    name: '轿门',
                    id: 0,
                    wips: '',
                    cars: '',
                    type: 6,
                    checked: false
                },
                {
                    name: '木箱',
                    id: 0,
                    wips: '',
                    cars: '',
                    type: 7,
                    checked: false
                }
            ],
            zxIndex: '',
            ZxArray: [
                {
                    value: '1',
                    label: '南线'
                },
                {
                    value: '2',
                    label: '北线'
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    methods: {
        async onSubmit() {
            if (this.zxIndex == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请选择装配部门'
                });
                return false;
            }

            let array = [];
            this.cxArray.forEach(item => {
                if (item.checked) {
                    array.push({
                        // zplineno: parseInt(this.zxIndex),
                        id: item.id,
                        wips: parseInt(item.wips),
                        cars: parseInt(item.cars),
                        sclineno: parseInt(item.type)
                    });
                }
            });

            if (array.length == 0) {
                this.$notify.error({
                    type: '错误',
                    message: '请设置关联生产部门及Wip区数量设置'
                });
                return false;
            }

            console.log({
                zplineno: parseInt(this.zxIndex),
                wipsinfo: JSON.stringify(array)
            });
            // return ;
            let res = await saveOrupdateWipsInfo({
                wipsinfo: {
                    zplineno: parseInt(this.zxIndex),
                    wipsinfo: array
                }
            });
            if (res.code == 0) {
                this.$notify({
                    type: 'success',
                    message: res.msg,
                    title: '成功'
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        async getScInfo(type) {
            this.cxArray.forEach(item => {
                item.id = 0;
                item.wips = '';
                item.cars = '';
                item.checked = false;
            });
            let res = await queryScInfo({
                zplineno: type
            });

            if (res.code == 0) {
                res.objects.forEach(item => {
                    this.cxArray.forEach(cx => {
                        if (item.sclineno == cx.type) {
                            console.log(item.sclineno);
                            cx.id = item.id;
                            cx.wips = item.wips;
                            cx.cars = item.cars;
                            if (cx.wips || cx.cars) {
                                cx.checked = true;
                            }
                        }
                    });
                });
                console.log(this.cxArray);
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        selcetChange(type) {
            // console.log(this.zxIndex);
            this.getScInfo(type);
        }
    }
};
</script>
<style lang="scss" scoped>
.d-check-row {
  display: flex;
  margin-bottom: 22px;
  .el-checkbox {
    min-width: 120px;
    margin-right: 20px;
  }
  .el-input__inner {
    flex: 1;
  }
}
.wips {
  width: 200px;
  margin-right: 50px;
}
</style>

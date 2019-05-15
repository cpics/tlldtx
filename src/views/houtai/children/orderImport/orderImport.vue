<template>
  <div class="bulk-import-main">
    <!--批量导入-->
    <div class="m-import-box">
      <el-form class="m-form" ref="form" :model="form" label-width="120px">
        <el-form-item label="请输入工时：">
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{start: '00:00',step: '00:30',end: '24:00'}"
          ></el-time-select>
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{start: '00:00',step: '00:30',end: '24:00',minTime: startTime}"
          ></el-time-select>
        </el-form-item>
        <el-form-item label="排班类型：">
          <el-radio v-model="radio" label="day">白班</el-radio>
          <el-radio v-model="radio" label="night">夜班</el-radio>
        </el-form-item>
        <el-form-item class="import-row" label>
          <input type="file" name="file" ref="uploadImg">
        </el-form-item>
        <el-form-item class="pt-50">
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { importOrder, domain } from '../../../../api';
import axios from 'axios';
export default {
    data() {
        return {
            startTime: '',
            endTime: '',
            worktime: '',
            fileList: [],
            form: {},
            radio:'day'
        };
    },
    methods: {
        async onSubmit() {
            let file = this.$refs.uploadImg.files[0];
            let form = new FormData();
            // if (this.startTime == '' || this.endTime == '') {
            //     this.$notify.error({
            //         type: '错误',
            //         message: '请选择时间！',
            //     });
            //     return false;
            // }
            // let endTime, startTime;
            // let endArr = this.endTime.split(':');
            // let startArr = this.startTime.split(':');

            // // debugger;
            // if (endArr[1] == '30') {
            //     endTime = parseFloat(endArr[0] + '' + '.5');
            // } else {
            //     endTime = endArr[0];
            // }

            // if (startArr[1] == '30') {
            //     startTime = parseFloat(startArr[0] + '' + '.5');
            // } else {
            //     startTime = startArr[0];
            // }

            // this.worktime = endTime - startTime;
            // console.log(this.worktime);
            // return false;
            form.append('worktype', this.radio);
            form.append('file', file);
            // let res = await importOrder({ worktime: this.worktime }, file);

            axios
                .post('//' + domain + '/importOrder.2x', form, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    if (res.data.code == 0) {
                        this.$notify({
                            type: 'success',
                            message: res.data.codeInfo,
                            title: '成功'
                        });
                    } else {
                        this.$notify.error({
                            type: '错误',
                            message: res.data.codeInfo
                        });
                    }
                });
        },
        uploadSuccess(file, fileList) {
            console.log(fileList);
        }
    }
};
</script>
<style lang="scss">
.bulk-import-main {
  width: 80%;
  min-height: 450px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.import-row {
  padding-bottom: 30px;
}
</style>


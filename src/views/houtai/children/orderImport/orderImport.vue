<template>
  <div class="bulk-import-main">
    <!--批量导入-->
    <div class="m-import-box">
      <el-form class="m-form" ref="form" :model="form" label-width="120px">
        <el-form-item label="请输入工时：">
          <el-input v-model="worktime"></el-input>
        </el-form-item>
        <el-form-item class="import-row" label>
          <input type="file" name="file" ref="uploadImg">
          <!-- <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="1"
            :file-list="fileList"
            :on-success="uploadSuccess"
          >
            <el-button class="d-import-btn" type="primary">选择文件</el-button>
            <el-button class="d-choose-file">点击选择文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>-->
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
            worktime: '',
            fileList: [],
            form: {}
        };
    },
    methods: {
        async onSubmit() {
            let file = this.$refs.uploadImg.files[0];
            let form = new FormData();
            form.append('worktime', this.worktime);
            form.append('file', file);
            // let res = await importOrder({ worktime: this.worktime }, file);

            axios.post('//' + domain + '/importOrder.2x', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
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


<template>
    <div class="bulk-import-main">
        <!--批量导入-->
        <div class="m-import-box">
            <el-form class="m-form" ref="form" :model="form" label-width="120px">
                <el-form-item label="请输入工时：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item class="import-row" label="">
                    <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList">
                        <el-button class="d-import-btn" type="primary">选择文件</el-button>
                        <el-button class="d-choose-file">点击选择文件</el-button>
                        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    </el-upload>
                </el-form-item>
                <el-form-item class="pt-50">
                    <el-button type="primary" @click="onSubmit">确定</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
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
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
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
    .import-row{
        padding-bottom: 30px;
    }
</style>


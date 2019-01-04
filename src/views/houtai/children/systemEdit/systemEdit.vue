<template>
    <el-form class="m-form" ref="form" :model="form" label-width="300px">
        <!--系统设置-->
        <el-form-item label="装配部门设置：">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="关联生产部门及Wip区数量设置：">
            <el-checkbox-group v-model="form.type">
                <div class="d-check-row">
                    <el-checkbox label="前壁产线" name="type"></el-checkbox>
                    <el-input v-model="form.name" placeholder="Wip区数量"></el-input>
                </div>
                <div class="d-check-row">
                    <el-checkbox label="天花产线" name="type"></el-checkbox>
                    <el-input v-model="form.name" placeholder="Wip区数量"></el-input>
                </div>
                <div class="d-check-row">
                    <el-checkbox label="轿门产线" name="type"></el-checkbox>
                    <el-input v-model="form.name" placeholder="Wip区数量"></el-input>
                </div>
                <div class="d-check-row">
                    <el-checkbox label="安捷木箱" name="type"></el-checkbox>
                    <el-input v-model="form.name" placeholder="Wip区数量"></el-input>
                </div>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item class="pt-50">
            <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    name:'systemEdit',
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
    .d-check-row{
        display: flex;
        margin-bottom: 22px;
        .el-checkbox{
            min-width: 120px;
            margin-right: 20px;
        }
        .el-input__inner{
            flex:1;
        }
    }
</style>

<template>
    <div>
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        <el-dialog title="一键下单" :visible.sync="dialogTableVisible">
            <el-collapse class="key-order" accordion>
                <el-collapse-item>
                    <template slot="title">
                        <div class="item-hd-tit">
                            <div class="item-tit-left">
                                <span class="item-tit-txt">21+D+2</span>
                                <span class="item-tag">（10）</span>
                            </div>
                            <div class="item-tit-right">
                                <el-checkbox v-model="checked">批量选择</el-checkbox>
                            </div>
                        </div>
                    </template>
                    <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <div class="item-hd-tit">
                            <div class="item-tit-left">
                                <span class="item-tit-txt">21+D+2</span>
                                <span class="item-tag">（10）</span>
                            </div>
                            <div class="item-tit-right">
                                <el-checkbox v-model="checked">批量选择</el-checkbox>
                            </div>
                        </div>
                    </template>
                    <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <div class="item-hd-tit">
                            <div class="item-tit-left">
                                <span class="item-tit-txt">21+D+2</span>
                                <span class="item-tag">（10）</span>
                            </div>
                            <div class="item-tit-right">
                                <el-checkbox v-model="checked">批量选择</el-checkbox>
                            </div>
                        </div>
                    </template>
                    <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
            };
        },
        methods: {},
        created() {

        }
    }
</script>

<style lang="scss">

    .key-order{
        table{
            tbody{
                font-weight: normal;
                tr:last-child{
                    td{
                        border-bottom: 0;
                    }
                }
            }
        }
        .item-tag{
            color:#f56c6c;
        }
    }
    .item-hd-tit{
        width: 100%;
        height: 49px;
    }

    .item-tit-left{
        float: left;
    }
    .item-tit-right{
        float: right;
        padding-right: 10px;
    }
    .item-tit-txt{
        font-size: 14px;
        padding: 0 10px;
    }
    .el-dialog__body .el-collapse-item__header.is-active{
        background: #fafafa;
    }

</style>

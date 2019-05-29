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
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition">
                        <div class="hidden-columns">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="el-table__header-wrapper">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header"
                                   style="width: 506px;">
                                <colgroup>
                                    <col name="el-table_2_column_4" width="150">
                                    <col name="el-table_2_column_5" width="200">
                                    <col name="el-table_2_column_6" width="156">
                                    <col name="gutter" width="0">
                                </colgroup>
                                <thead class="has-gutter">
                                <tr class="">
                                    <th colspan="1" rowspan="1" class="el-table_2_column_4     is-leaf">
                                        <div class="cell">日期</div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_5     is-leaf">
                                        <div class="cell">姓名</div>
                                    </th>
                                    <th colspan="1" rowspan="1" class="el-table_2_column_6     is-leaf">
                                        <div class="cell">地址</div>
                                    </th>
                                    <th class="gutter" style="width: 0px; display: none;"></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__body-wrapper is-scrolling-none">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                                   style="width: 506px;">
                                <colgroup>
                                    <col name="el-table_2_column_4" width="150">
                                    <col name="el-table_2_column_5" width="200">
                                    <col name="el-table_2_column_6" width="156">
                                </colgroup>
                                <tbody>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_4  ">
                                        <div class="cell">2016-05-02</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_5  ">
                                        <div class="cell">王小虎</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_6  ">
                                        <div class="cell">上海市普陀区金沙江路 1518 弄</div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_4  ">
                                        <div class="cell">2016-05-04</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_5  ">
                                        <div class="cell">王小虎</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_6  ">
                                        <div class="cell">上海市普陀区金沙江路 1518 弄</div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_4  ">
                                        <div class="cell">2016-05-01</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_5  ">
                                        <div class="cell">王小虎</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_6  ">
                                        <div class="cell">上海市普陀区金沙江路 1518 弄</div>
                                    </td>
                                </tr>
                                <tr class="el-table__row">
                                    <td rowspan="1" colspan="1" class="el-table_2_column_4  ">
                                        <div class="cell">2016-05-03</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_5  ">
                                        <div class="cell">王小虎</div>
                                    </td>
                                    <td rowspan="1" colspan="1" class="el-table_2_column_6  ">
                                        <div class="cell">上海市普陀区金沙江路 1518 弄</div>
                                    </td>
                                </tr><!----></tbody>
                            </table><!----><!----></div><!----><!----><!----><!---->
                        <div class="el-table__column-resize-proxy" style="display: none;"></div>
                    </div>
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

    .key-order {
        height: 600px;
        overflow-y: auto;
        table {
            tbody {
                font-weight: normal;
                tr:last-child {
                    td {
                        border-bottom: 0;
                    }
                }
            }
        }
        .item-tag {
            color: #f56c6c;
        }
    }

    .item-hd-tit {
        width: 100%;
        height: 49px;
    }

    .item-tit-left {
        float: left;
    }

    .item-tit-right {
        float: right;
        padding-right: 10px;
    }

    .item-tit-txt {
        font-size: 14px;
        padding: 0 10px;
    }

    .el-dialog__body .el-collapse-item__header.is-active {
        background: #fafafa;
    }

</style>

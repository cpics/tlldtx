<template>
    <div>
        <div style="padding-bottom:20px;">
            <el-button type="primary">删除订单</el-button>
        </div>
        <el-table :data="list"
        
                  border
                  class="guanli-table"
                  style="width: 100%:">
            <el-table-column width="100"
                             type="index"
                             label="序号"></el-table-column>
            <!-- <el-table-column prop="name" label="工号"></el-table-column> -->
            <el-table-column prop="orderBatch"
                             label="批次"></el-table-column>
            <el-table-column prop="tixing"
                             label="梯形"></el-table-column>
            <el-table-column prop="orderNo"
                             label="订单号"></el-table-column>
            <el-table-column fixed="right"
                             label="操作">
                <template slot-scope="scope">
                    <el-button @click="deleteRow(scope.row)"
                               type="text"
                               size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { queryAllOrders, deleteOrders } from '../../../../api';
export default {
    data() {
        return {
            list: [],
            multipleSelection: [],
            ordernos: [],
        }
    },
    methods: {
        async queryAllOrders() {
            let res = await queryAllOrders();
            this.list = res.objects;
            console.log(res);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteRow(row) {
            this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                this.ordernos = [];
                this.ordernos.push(row.orderNo);
                let res = await deleteOrders({
                    ordernos: this.ordernos.join(',')
                });
                if (res.code == 0) {
                    this.$notify({
                        type: 'success',
                        message: res.codeInfo,
                        title: '成功'
                    });
                    this.queryAllOrders();
                } else {
                    this.$notify({
                        type: 'error',
                        message: res.codeInfo,
                        title: '成功'
                    });
                }
            })

        },
    },
    created() {
        this.queryAllOrders();
    }
}
</script>

<style>
.guanli-table tbody{
    font-size: 20px !important;
}
</style>

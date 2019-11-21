<template>

    <div>
        <div class="weeks">
            <ul>
                <li @click="chooseWeekData(i)" :class="{'active':weekActive == item.i}" v-if="i<dataList.length"
                    v-for="(item,i) in weeks"
                    :key="i">{{item.name}}</li>
            </ul>
        </div>
        <div class="dayNight"
             style="padding:20px 0;">
            <el-button @click="chooseDayNight(0)" :type="dayNight == 0 ? 'primary' :''">白班</el-button>
            <el-button @click="chooseDayNight(1)" :type="dayNight == 1 ? 'primary' :''">夜班</el-button>
        </div>
        <el-table :data="tableData"
                  border
                  style="width: 100%">
            <el-table-column prop="line"
                             label="产线"
                             width="180"></el-table-column>
            <el-table-column prop="total"
                             label="今日订单量"
                             width="180"></el-table-column>
            <el-table-column prop="finished"
                             label="已完成订单"></el-table-column>
            <el-table-column prop="finishPercent"
                             label="完成进度"></el-table-column>
            <!-- <el-table-column prop="workStatus" label="状态">
        <template slot-scope="scope">
          <font color="red" v-if="scope.row.workStatus.indexOf('落后')>-1">{{scope.row.workStatus}}</font>
          <font color="green" v-if="scope.row.workStatus.indexOf('超前')>-1">{{scope.row.workStatus}}</font>
          <font color="black" v-if="scope.row.workStatus.indexOf('正常')>-1">{{scope.row.workStatus}}</font>
        </template>
      </el-table-column> -->
        </el-table>
    </div>
    <!--状态颜色-->
    <!--红 c-red    #d62e42-->
    <!--绿 c-green  #009944-->
    <!--蓝 c-blue   #00a0e9-->
</template>

<script>
import { jinrikanban } from '../../../../api/index';
export default {
    name: 'index',
    data() {
        return {
            tableData: [],
            activeName: 'baiban',
            activePane: {
                label: '白班',
                type: 'day',
                name: 'baiban'
            },
            dataList:[],
            weekActive:0,
            weeks: [
                { i: 0, name: '星期一' },
                { i: 1, name: '星期二' },
                { i: 2, name: '星期三' },
                { i: 3, name: '星期四' },
                { i: 4, name: '星期五' },
                { i: 5, name: '星期六' },
                { i: 6, name: '星期七' },
            ],
            dayNight:0,
            pullPanes: [
                {
                    label: '白班',
                    type: 'day',
                    name: 'baiban'
                },
                {
                    label: '夜班',
                    type: 'night',
                    name: 'yeban'
                }
            ]
        };
    },
    methods: {
        chooseWeekData(i){
            this.weekActive = i;
            this.dayNight = 0;
            this.tableData = this.dataList[i].day;
            
        },
        chooseDayNight(i){
            this.dayNight = i;
            if(this.dayNight == 0){
                this.tableData = this.dataList[this.weekActive].day;
            }else{
                this.tableData = this.dataList[this.weekActive].night;
            }
        },
        async getData(type) {
            let res = await jinrikanban({
                worktype: type
            });
            if (res.code === 0) {
                // res.objects = [{ 'day': [{ 'total': '5', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '0', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0.0', 'line': '前壁', 'finished': '1' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '2', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '2', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期一' }, { 'day': [{ 'total': '5', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '0', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0.0', 'line': '天花', 'finished': '1' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '4', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '0', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0.0', 'line': '天花', 'finished': '1' }, { 'total': '8', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期二' }, { 'day': [{ 'total': '2', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '3', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '0', 'percent': 'NaN', 'line': '南线', 'finished': '1' }, { 'total': '4', 'percent': '0.0', 'line': '北线', 'finished': '1' }, { 'total': '4', 'percent': '0.25', 'line': 'Emini', 'finished': '2' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '8', 'percent': '0.0', 'line': '轿门', 'finished': '1' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期三' }, { 'day': [{ 'total': '0', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '5', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '0', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期四' }, { 'day': [{ 'total': '1', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '4', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '0', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期五' }, { 'day': [{ 'total': '1', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '2', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '2', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '8', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期六' }, { 'day': [{ 'total': '4', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '1', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '4', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '9', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'night': [{ 'total': '4', 'percent': '0', 'line': '南线', 'finished': '0' }, { 'total': '0', 'percent': '0', 'line': '北线', 'finished': '0' }, { 'total': '3', 'percent': '0', 'line': 'Emini', 'finished': '0' }, { 'total': '7', 'percent': '0', 'line': '前壁', 'finished': '0' }, { 'total': '7', 'percent': '0', 'line': '天花', 'finished': '0' }, { 'total': '7', 'percent': '0', 'line': '轿门', 'finished': '0' }, { 'total': '7', 'percent': '0', 'line': '安捷', 'finished': '0' }], 'week': '星期日' }];
                res.objects.forEach(item => {
                    item.day.forEach(day => {
                        day.finishPercent = parseInt(day.percent * 100) + '%';
                    })
                    item.night.forEach(day => {
                        day.finishPercent = parseInt(day.percent * 100) + '%';
                    })

                });
                this.dataList = res.objects;
                this.tableData = res.objects[0].day;
                console.log(this.tableData);
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        chooseCx(tab, event) {
            this.activePane = this.pullPanes[tab.index];
            this.activeName = this.pullPanes[tab.index].name;
            this.getData(this.activePane.type);
        }
    },
    created() {
        this.getData();
    }
};
</script>
<style>
.weeks ul {
    height: 40px;
    font-size: 20px;
}
.weeks li {
    line-height: 40px;
    float: left;
    margin-right: 20px;
    cursor: pointer;
}
.weeks li.active {
    font-weight: bold;
    text-decoration: underline;
}
</style>

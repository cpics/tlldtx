<template>
    <el-container class="mod-wrapper">
        <el-aside class="g-slide-bar"
                  v-if="leftSliderDir"
                  width="200px">
            <leftSliderbar :maxClassString="userInfo.roleString"
                           :todayLeftData="todayLeftData"
                           :wipsInfo="wipsInfo" />
        </el-aside>
        <el-container>
            <el-header class="f-header-bar">
                <i class="f-menu-line"
                   @click="showleftSlideBar"></i>
                <layoutTopHeaderRight/>
            </el-header>
            <el-main class="f-el-main">
                <el-tabs v-model="activeName"
                         type="card"
                         @tab-click="tabClick">
                    <el-tab-pane v-for="(item,index) in defaultSort"
                                 :key="index"
                                 :name="tabsList[item].name">
                        <span slot="label">
                            <el-badge v-if="tabsList[item].meta.title !='缺料装箱订单'"
                                      class="item m-inside">{{tabsList[item].meta.title}}</el-badge>
                            <el-badge :value="qlCount"
                                      v-if="tabsList[item].meta.title =='缺料装箱订单'"
                                      class="item m-inside">
                                {{tabsList[item].meta.title}}
                                <span class="qlhi"
                                      v-if="qlHistoryCount">{{qlHistoryCount}}</span>
                            </el-badge>
                            <!-- <el-badge :value="99" class="item m-inside">{{tabsList[item].meta.title}}</el-badge> -->
                        </span>
                    </el-tab-pane>
                </el-tabs>
                <router-view @getCountQueliao="getCountQueliao"
                             :count="count"
                             :HistoryCount="HistoryCount" />
            </el-main>
        </el-container>
        <audio style="display:none"
               controls="controls"
               id="biaojiyichang"
               preload
               v-bind:src="`${require('../../assets/audio/biaojiyichang.mp3')}`" />
        <audio style="display:none"
               controls="controls"
               id="dingdanwancheng"
               preload
               v-bind:src="`${require('../../assets/audio/dingdanwancheng.mp3')}`" />
        <audio style="display:none"
               controls="controls"
               id="quxiaoyichang"
               preload
               v-bind:src="`${require('../../assets/audio/quxiaoyichang.mp3')}`" />
        <audio style="display:none"
               controls="controls"
               id="xindedingdan"
               preload
               v-bind:src="`${require('../../assets/audio/xindedingdan.mp3')}`" />
    </el-container>
</template>
<script>
import layoutTopHeaderRight from '../../components/layoutTopHeaderRight/layoutTopHeaderRight';
import leftSliderbar from './components/leftSliderBar';

import cookies from '../../common/utils/cookies';

import { qiantaiRouters } from '../../router';
import { roleMaxType, roleEnum } from '../../common/role-types/role-types';
import {
    domain,
    todayTongji,
    queryWipsInfo,
    updateScInfo,
    jinrikanban,
    countQueliao,
    countqueliaohistory
} from '../../api/index';
export default {
    name: 'qiantai',
    data() {
        return {
            t: null,
            tabsList: [],
            todayLeftData: {},
            wipsInfo: [],
            activeName: 'first',
            userInfo: {},
            zxSort: [0, 1, 2, 3, 4],
            qbSort: [1, 0, 2, 3, 4],
            defaultSort: [],
            ws: null,
            count: [],
            qlCount: '',
            HistoryCount: [],
            qlHistoryCount: '',
            leftSliderDir: false,

        };
    },
    components: {
        layoutTopHeaderRight,
        leftSliderbar
    },
    methods: {
        showleftSlideBar() {
            this.leftSliderDir = !this.leftSliderDir;
        },
        tabClick(tab, event) {
            this.$router.push(this.tabsList[this.defaultSort[tab.index]].path);
            this.getCountQueliao();
        },
        //获取左边的今日数据
        async getTodayData(type) {
            let res = await jinrikanban();
            if (res.code === 0) {
                res.objects.forEach(item => {
                    item.finishPercent =
                        parseInt(item.finishPercent * 100) + '%';
                    if (item.type == type) {
                        this.todayLeftData = item;
                    }
                });

                // this.tableData = res.objects;
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        async getQueryWipsInfo(currentUserMaxType) {
            let res = await queryWipsInfo();
            if (res.code == 0) {
                // console.log(res);

                this.wipsInfo = res.objects;
                this.wipsInfo.forEach(item => {
                    item.lineName = roleEnum[item.lineno];
                    // if (currentUserMaxType == roleMaxType.ZX) {
                    //     item.lineName = roleEnum[item.sclineno];
                    //     // this.defaultSort = this.zxSort;
                    // } else if (currentUserMaxType == roleMaxType.QB) {
                    //     item.lineName = roleEnum[item.zplineno];
                    //     // this.defaultSort = this.qbSort;
                    // }
                    // let workingCars = item.ordercount / item.cars;
                    // if (workingCars >= item.wips) {
                    //     workingCars = Math.floor(workingCars);
                    //     item.carsFull = true;
                    // } else {
                    //     workingCars = Math.ceil(workingCars);
                    //     item.carsFull = false;
                    // }

                    // item.workingCars = workingCars;
                });
                // console.log(this.wipsInfo);
            } else {
                this.$notify.error({
                    title: '错误',
                    message: res.codeInfo
                });
            }
        },
        openWebSocket(username, role) {
            // console.log(username,role);
            this.ws = new WebSocket(`ws:${domain}/websocket/${username}`);

            this.ws.onopen = () => {
                console.log('服务器连接成功！');
            };
            this.ws.onmessage = event => {
                var obj = JSON.parse(event.data);
                // console.log(JSON.parse(event.data));
                // return ;

                // if(!obj.role.split(',').include(role))return;

                if (obj.notifyType == 1) {
                    this.xddPlay();
                } else if (obj.notifyType == 2) {
                    this.ddwcPlay();
                } else if (obj.notifyType == 3) {
                    this.bjycPlay();
                } else if (obj.notifyType == 4) {
                    this.qxbjPlay();
                }
            };
            this.ws.onclose = event => {
                console.log('连接已断开！');
            };
        },
        async countqueliaohistory() {
            let res = await countqueliaohistory();
            if (res.code === 0) {
                let count = res.objects;
                if (this.userInfo.roleMaxType == 'ZX') {
                    this.HistoryCount = [];
                    this.qlHistoryCount = '';
                    if (this.userInfo.role == 1 || this.userInfo.role == 2) {
                        if (count.qb == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.qb);
                        }
                        if (count.th == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.th);
                        }
                        if (count.jm == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.jm);
                        }
                        if (count.aj == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.aj);
                        }
                    } else if (this.userInfo.role == 3) {
                        if (count.jm == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.jm);
                        }
                        if (count.aj == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.aj);
                        }
                        // this.count = [1,1];
                        // this.qlCount = 4;
                    }
                    let qlCount = 0;
                    this.HistoryCount.forEach(item => {
                        if (item != '') {
                            qlCount += item;
                        }
                    });
                    if (qlCount > 0) {
                        this.qlHistoryCount = qlCount;
                    }
                } else if (this.userInfo.roleMaxType == 'QB') {
                    this.HistoryCount = [];
                    this.qlHistoryCount = '';
                    if (count.nan == 0) {
                        this.HistoryCount.push('');
                    } else {
                        this.HistoryCount.push(count.nan);
                    }
                    if (count.bei == 0) {
                        this.HistoryCount.push('');
                    } else {
                        this.HistoryCount.push(count.bei);
                    }

                    if (this.userInfo.role == 6 || this.userInfo.role == 7) {
                        if (count.emini == 0) {
                            this.HistoryCount.push('');
                        } else {
                            this.HistoryCount.push(count.emini);
                        }
                    }

                    let qlCount = 0;
                    this.HistoryCount.forEach(item => {
                        if (item != '') {
                            qlCount += item;
                        }
                    });
                    if (qlCount > 0) {
                        this.qlHistoryCount = qlCount;
                    }
                }
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        closeWebSocket() {
            this.ws.close();
        },
        //标记异常
        bjycPlay() {
            setTimeout(() => {
                document.querySelector('#biaojiyichang').play();
            });
        },
        //订单完成
        ddwcPlay() {
            setTimeout(() => {
                document.querySelector('#dingdanwancheng').play();
                // window.dingdanwancheng.player();
            });
        },
        //取消标记
        qxbjPlay() {
            setTimeout(() => {
                document.querySelector('#quxiaoyichang').play();
                // window.quxiaoyichang.player();
            });
        },
        //新订单
        xddPlay() {
            setTimeout(() => {
                document.querySelector('#xindedingdan').play();
                // window.xindedingdan.player();
            });
        },
        async getCountQueliao() {
            // console.log(this.userInfo);
            let res = await countQueliao();
            if (res.code == 0) {
                let count = res.objects;
                if (this.userInfo.roleMaxType == 'ZX') {
                    this.count = [];
                    this.qlCount = '';
                    if (this.userInfo.role == 1 || this.userInfo.role == 2) {
                        if (count.qb == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.qb);
                        }
                        if (count.th == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.th);
                        }
                        if (count.jm == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.jm);
                        }
                        if (count.aj == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.aj);
                        }
                    } else if (this.userInfo.role == 3) {
                        if (count.jm == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.jm);
                        }
                        if (count.aj == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.aj);
                        }
                        // this.count = [1,1];
                        // this.qlCount = 4;
                    }
                    let qlCount = 0;
                    this.count.forEach(item => {
                        if (item != '') {
                            qlCount += item;
                        }
                    });
                    if (qlCount > 0) {
                        this.qlCount = qlCount;
                    }
                } else if (this.userInfo.roleMaxType == 'QB') {
                    this.count = [];
                    this.qlCount = '';
                    if (count.nan == 0) {
                        this.count.push('');
                    } else {
                        this.count.push(count.nan);
                    }
                    if (count.bei == 0) {
                        this.count.push('');
                    } else {
                        this.count.push(count.bei);
                    }

                    if (this.userInfo.role == 6 || this.userInfo.role == 7) {
                        if (count.emini == 0) {
                            this.count.push('');
                        } else {
                            this.count.push(count.emini);
                        }
                    }

                    let qlCount = 0;
                    this.count.forEach(item => {
                        if (item != '') {
                            qlCount += item;
                        }
                    });
                    if (qlCount > 0) {
                        this.qlCount = qlCount;
                    }
                }
                // this.count = [1,1,1,1];
                // this.qlCount = 4;
                // let count = res.objects['南'] + res.objects['北'];
                // if (count > 0) {
                //     this.vvv = count;
                // }
            }
        }
    },

    mounted() {
        // setInterval(()=>{
        // this.bjycPlay();
        // },10);

        // setTimeout(() => {
        //     window.biaojiyichang.player();
        // });

        if (!cookies.get('userInfo')) {
            this.$router.push('/login');
            return;
        }
        this.userInfo = cookies.get('userInfo');

        this.getTodayData(this.userInfo.role);

        //获取当前用户的大类型
        let currentUserMaxType = this.userInfo.roleMaxType;
        this.getQueryWipsInfo(currentUserMaxType);

        //根据大类型来展示使用那种数据展示Tab
        if (currentUserMaxType == roleMaxType.ZX) {
            this.defaultSort = this.zxSort;
        } else if (currentUserMaxType == roleMaxType.QB) {
            this.defaultSort = this.qbSort;
        }

        this.tabsList = qiantaiRouters;
        this.activeName = this.$route.name;
        // this.getCountQueliao();
        this.t = setInterval(() => {
            this.getCountQueliao();
            this.countqueliaohistory();
        }, 5000);
        this.openWebSocket(this.userInfo.username, this.userInfo.role);
    },
    destroyed() {
        clearInterval(this.t);
    }
};
</script>
<style lang="scss" scoped>
.g-slide-bar {
    color: #fff;
    background: #005982;
}
.f-el-main {
    background: #fff;
}
.f-header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    background: #f8f9fd;
    .f-header-right {
        display: flex;
        align-items: center;
    }
}
.f-menu-line {
    position: relative;
    width: 20px;
    height: 12px;
    display: inline-block;
    border-top: 2px solid #b1b7c3;
    border-bottom: 2px solid #b1b7c3;
    background-clip: content-box;
    &:before {
        position: absolute;
        left: 0;
        top: 50%;
        content: '';
        width: 100%;
        height: 2px;
        background: #b1b7c3;
        margin-top: -1px;
    }
}
.qlhi {
    position: absolute;
    left: 0px;
    top: 9px;
    transform: translateY(-50%) translateX(-80%);
    background-color: #ffa500;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
}
</style>

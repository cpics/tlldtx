import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Houtai from './views/houtai/houtai';
import Qiantai from './views/qiantai/qiantai';
import index from './views/houtai/children/index/index';
import Login from './views/login/login';
import orderImport from './views/houtai/children/orderImport/orderImport';
import systemEdit from './views/houtai/children/systemEdit/systemEdit';
import manage from './views/houtai/children/manage/manage';

import CurrentWipAreaOrder from './views/qiantai/children/currentWipAreaOrder/currentWipAreaOrder';
import CurrentPullOrder from './views/qiantai/children/currentPullOrder/currentPullOrder';
import TodayProOrder from './views/qiantai/children/todayProOrder/todayProOrder';
import UnfinishOrder from './views/qiantai/children/unFinishOrder/unFinishOrder';
import boardOrder from './views/qiantai/children/boardOrder/boardOrder';

Vue.use(Router);

export const houtaiRouters = [{
    path: 'index',
    name: 'index',
    component: index,
    meta: {
        title: '生产看板'
    }
},
{
    path: 'order/import',
    name: 'orderImport',
    component: orderImport,
    meta: {
        title: '订单导入'
    }
},
{
    path: 'systemEdit',
    name: 'systemEdit',
    component: systemEdit,
    meta: {
        title: '系统设置'
    }
},
{
    path: 'system/manage',
    name: 'manage',
    component: manage,
    meta: {
        title: '员工管理'
    }
}
]
export const qiantaiRouters = [{
    path: 'currentWipAreaOrder',
    name: 'currentWipAreaOrder',
    component: CurrentWipAreaOrder,
    meta: {
        title: '当前Wip区订单'
    }
},
{
    path: 'currentPullOrder',
    name: 'currentPullOrder',
    component: CurrentPullOrder,
    meta: {
        title: '当前拉动订单'
    }
},
{
    path: 'todayProOrder',
    name: 'todayProOrder',
    component: TodayProOrder,
    meta: {
        title: '当前排产订单'
    }
},
{
    path: 'unfinishOrder',
    name: 'unfinishOrder',
    component: UnfinishOrder,
    meta: {
        title: '缺料装箱订单'
    }
},
{
    path: 'boardOrder',
    name: 'boardOrder',
    component: boardOrder,
    meta: {
        title: '订单看板'
    }
}
]

const router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/houtai/',
        name: 'houtai',
        component: Houtai,
        children: houtaiRouters
    },
    {
        path: '/qiantai/',
        name: 'qiantai',
        component: Qiantai,
        children: qiantaiRouters
    }
    ]
});

router.afterEach(route => {
    store.commit('setCurrentMeta', route.meta.title);
    // console.log(route);
})

export default router;
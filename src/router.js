import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Layout from './views/layout/layout';
import Home from './views/home/home';
import Login from './views/login/login';
import orderImport from './views/orderImport/orderImport';
import systemEdit from './views/systemEdit/systemEdit';

Vue.use(Router);

export const mainRouters = [{
    path: 'home',
    name: 'home',
    component: Home,
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
    path: 'system/edit',
    name: 'systemEdit',
    component: systemEdit,
    meta: {
        title: '系统设置'
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
        path: '/',
        name: 'Layout',
        component: Layout,
        children:mainRouters
    }
    ]
});

router.afterEach(route => {
    store.commit('setCurrentMeta', route.meta.title);
    console.log(route);
})

export default router;
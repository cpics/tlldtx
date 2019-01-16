import fetch from '../common/fetch/index';
const domain = '//kone.2xnet.net:8023';

//用户登录
export const login = params =>
    fetch.get(domain + '/userLogin.2x', {
        params: params
    });

//退出登录
export const loginOut = params =>
    fetch.get(domain + '/userLogout.2x', {
        params: params
    });

//获取当前登录用户信息
export const getCurrentUserInfo = params =>
    fetch.get(domain + '/getCurrentUser.2x', {
        params: params
    });

//添加用户
export const addUser = params =>
    fetch.get(domain + '/addUser.2x', {
        params: params
    });

//删除用户
export const removeUser = params =>
    fetch.get(domain + '/removeUser.2x', {
        params: params
    });

//导入订单
export const importOrder = (params, file) => {
    fetch.post(domain + '/importOrder.2x', params, {
        file,
        isUpload: true
    });
}

//查询拉动订单
export const ladongOrder = (params) => {
    fetch.get(domain + '/queryLadong.2x', {
        params: params
    })
}
//查询缺料订单
export const queliaoOrder = (params) => {
    fetch.get(domain + '/queryQueliao.2x', {
        params: params
    })
}
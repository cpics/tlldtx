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

//修改用户
export const modifyUser = params =>
    fetch.get(domain + '/modifyUser.2x', {
        params: params
    })

//导入订单
export const importOrder = (params, file) => {
    fetch.post(domain + '/importOrder.2x', params, {
        file,
        isUpload: true
    });
}

//查询拉动订单
export const ladongOrder = params => {
    fetch.get(domain + '/queryLadong.2x', {
        params: params
    })
}
//查询缺料订单
export const queliaoOrder = params => {
    fetch.get(domain + '/queryQueliao.2x', {
        params: params
    })
}
//今日统计
export const todayTongji = params => {
    fetch.get(domain + '/jinritongji.2x', {
        params: params
    })
}
//根据产线类型下单
export const xiadan = params => {
    fetch.get(domain + '/xiadan.2x', {
        params: params
    })
}
//更新订单为生产中
export const shengchan = params => {
    fetch.get(domain + '/shengchan.2x', {
        params: params
    })
}
//更新订单状态为生产完成
export const shengchanwancheng = params => {
    fetch.get(domain + '/shengchanwancheng.2x', {
        params: params
    })
}
//更新订单状态为订单
export const orderwancheng = params => {
    fetch.get(domain + '/orderwancheng.2x', {
        params: params
    })
}
//根据装配产线号查询生产产线所需的Wips，Cars信息
export const queryScInfo = params => {
    fetch.get(domain + '/queryScInfo.2x', {
        params: params
    })
}
//更新装配产线号对应的Wips，Cars信息
export const updateScInfo = params => {
    fetch.get(domain + '/updateScInfo.2x', {
        params: params
    })
}
//
import fetch from '../common/fetch/index';
export const domain = '//blog.365dianti.com:8023';
// export const domain = '//' + location.host;

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
//查询所有用户
export const getUsers = params =>
    fetch.get(domain + '/getUsers.2x', {
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
export const importOrder = (params, file) =>
    fetch.post(domain + '/importOrder.2x', params, {
        file,
        isUpload: true
    });


//查询拉动订单
export const ladongOrder = params =>
    fetch.get(domain + '/queryLadong.2x', {
        params: params
    })

//查询缺料订单
export const queliaoOrder = params =>
    fetch.get(domain + '/queryQueliao.2x', {
        params: params
    })


//查询Wip订单
export const wipOrder = params =>
    fetch.get(domain + '/queryWipsOrder.2x', {
        params: params
    })

//今日统计
export const todayTongji = params =>
    fetch.get(domain + '/jinritongji.2x', {
        params: params
    })

//根据产线类型下单
export const xiadan = params =>
    fetch.get(domain + '/xiadan.2x', {
        params: params
    })

//更新订单为生产中
export const shengchan = params =>
    fetch.get(domain + '/shengchan.2x', {
        params: params
    })

//更新订单状态为生产完成
export const shengchanwancheng = params =>
    fetch.get(domain + '/shengchanwancheng.2x', {
        params: params
    })

//更新订单状态为订单
export const orderwancheng = params =>
    fetch.get(domain + '/orderwancheng.2x', {
        params: params
    })

//更新订单状态为撤回
export const cehui = params =>
    fetch.get(domain + '/cehui.2x', {
        params: params
    })

//更新订单状态为缺料
export const queliao = params =>
    fetch.get(domain + '/queliao.2x', {
        params: params
    })

//根据装配产线号查询生产产线所需的Wips，Cars信息
export const queryScInfo = params =>
    fetch.get(domain + '/queryScInfo.2x', {
        params: params
    })

//更新装配产线号对应的Wips，Cars信息
export const updateScInfo = params =>
    fetch.get(domain + '/updateScInfo.2x', {
        params: params
    })

//取消标记
export const quxiaoqueliao = params =>
    fetch.get(domain + '/quxiaoqueliao.2x', {
        params: params
    })

//订单结束完成
export const orderFinish = params =>
    fetch.get(domain + '/orderFinish.2x', {
        params: params
    })
//一键下单
export const yijianxiadan = params =>
    fetch.get(domain + '/yijianxiadan.2x', {
        params: params
    })

//排产订单查询
export const queryPaichan = params =>
    fetch.get(domain + '/queryPaichan.2x', {
        params: params
    })

//未安排订单查询
export const queryWeianpai = params =>
    fetch.get(domain + '/queryweianpai.2x', {
        params: params
    })

//一键撤回
export const yijiancehui = params =>
    fetch.get(domain + '/yijiancehui.2x', {
        params: params
    })
//一键生产
export const yijianshengchan = params =>
    fetch.get(domain + '/yijianshengchan.2x', {
        params: params
    })
//一键生产完成
export const yijianshengchanwancheng = params =>
    fetch.get(domain + '/yijianshengchanwancheng.2x', {
        params: params
    })
//一键订单完成
export const yijiandingdanwancheng = params =>
    fetch.get(domain + '/yijiandingdanwancheng.2x', {
        params: params
    })
//一键缺料
export const yijianqueliao = params =>
    fetch.get(domain + '/yijianqueliao.2x', {
        params: params
    })
//一键取消缺料
export const yijianquxiaoqueliao = params =>
    fetch.get(domain + '/yijianquxiaoqueliao.2x', {
        params: params
    })
//一键取消缺料
export const jinrikanban = params =>
    fetch.get(domain + '/queryJinrikanban.2x', {
        params: params
    })

//查询小车信息
export const queryWipsInfo = params =>
    fetch.get(domain + '/queryWipsInfo.2x', {
        params: params
    })
//更新小车信息
export const saveOrupdateWipsInfo = params =>
    fetch.get(domain + '/saveOrupdateWipsInfo.2x', {
        params: params
    })
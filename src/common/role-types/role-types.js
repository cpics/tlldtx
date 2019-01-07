//装箱用户角色
export const zxRole = [1, 2, 3];
//前壁用户角色
export const qbRole = [4, 5, 6, 7];
//被冻结锁定角色
export const djRole = [-1];
//管理员角色
export const adminRole = [0];

//角色枚举
export const roleEnum = {
    0: '管理员',
    1: '装箱南线',
    2: '装箱北线',
    3: 'EMINI',
    4: '前壁产线',
    5: '天花产线',
    6: '轿门产线',
    7: '安捷木箱',
    '-1': '被冻结锁定'
}

export const roleMaxType = {
    ADMIN: 'ADMIN',
    ZX: 'ZX',
    QB: 'QB',
    DJ: 'DJ'
}



const filterRoleType = (roleTypeNumber) => {
    let roleTypeStr = '';
    if (adminRole.includes(roleTypeNumber)) {
        roleTypeStr = roleMaxType.ADMIN;
    } else if (zxRole.includes(roleTypeNumber)) {
        roleTypeStr = roleMaxType.ZX;
    } else if (qbRole.includes(roleTypeNumber)) {
        roleTypeStr = roleMaxType.QB;
    } else if (djRole.includes(roleTypeNumber)) {
        roleTypeStr = roleMaxType.DJ;
    }

    return roleTypeStr;
}

export default filterRoleType;
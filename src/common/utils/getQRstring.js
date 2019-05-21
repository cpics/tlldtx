function getQrStr(item) {
    // console.log(item);
    item.qr1 = qr1(item);
    item.qr2 = qr2(item);
    item.qr3 = qr3(item);
    // console.log(item.qr2);
    // console.log(item.qr3);
}

function qr1(item) {
    let strArr = [];
    strArr.push(item.orderNo);
    if (item.line == '') {
        strArr.push(0);
    } else if (item.line == '北') {
        strArr.push('N');
    } else if (item.line == '南') {
        strArr.push('S');
    }
    strArr.push(item.jc);
    strArr.push(item.zkck);
    strArr.push(item.panel); //Panel
    strArr.push(item.ll.replace(/[^0-9]/ig,''));
    strArr.push(item.hh);
    strArr.push(item.carType);
    //如果大于1则直接使用1 如果小于1 例如0.6就要变成.6
    if (item.tphd < 1) {
        strArr.push('.' + item.tphd.split('.')[1]);
    } else if (item.tphd >= 1) {
        strArr.push(item.tphd);
    }
    // strArr.push('.6');//贴皮厚度

    console.log(strArr.join('|'));
    return strArr.join('|');

}

function qr2(item) {
    let strArr = ['CB+C'];
    let LL = item.ll / 10;
    // debugger;
    if (LL / 10 < 10) {
        LL = '0' + '' + (LL / 10);
    }
    strArr.push(LL);
    let zkck = ''
    if (item.zkck == '1C') {
        zkck = 'CL';
    } else if (item.zkck == '2L' || item.zkck == '2R') {
        zkck = 'SL';
    }
    strArr.push(zkck);
    strArr.push(item.orderNo);

    console.log(strArr.join(''));
    return strArr.join('');

}

function qr3(item) {
    let strArr = ['CB+C'];
    let LL = item.ll / 10;
    if (LL / 10 < 10) {
        LL = '0' + '' + (LL / 10);
    }
    strArr.push(LL);
    let zkck = ''
    if (item.zkck == '1C') {
        zkck = 'CR';
    } else if (item.zkck == '2L' || item.zkck == '2R') {
        zkck = 'SR';
    }
    strArr.push(zkck);
    strArr.push(item.orderNo);
    console.log(strArr.join(''));
    return strArr.join('');

}
export default getQrStr;
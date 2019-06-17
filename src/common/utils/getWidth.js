function getWidth(item) {
    let width;
    let props = item.props;

    if (props == 'orderNo' || props == 'tp' || props == 'feibiao') {
        width = 230;
    } else if (props == 'orderBatch') {
        width = 100;
    } else if (props == 'tixing') {
        width = 350;
    } else if (props == 'Orderdate') {
        width = 200;
    } else if (props == 'carType') {
        width = 60;
    } else if (props == 'hmchouDu' || props == 'produceDate') {
        width = 100;
    } else if (props == 'ak') {
        width = 120;
    } else if (props == 'sz') {
        width = 200;
    } else if (props == 'guigeRiqi') {
        width = 200;
    } else if (props == 'FMaterial') {
        width = 100;
    } else if (props == 'lf' || props == 'copleixing') {
        width = 150;
    } else if (
        props == 'copgaodu' ||
        props == 'll' ||
        props == 'ch' ||
        props == 'hh' ||
        props == 'qianbigaodu' ||
        props == 'market'
    ) {
        width = 100;
    } else if (props == 'material') {
        width = 150;
    } else if (props == 'guobiao') {
        width = 150;
    } else if (props == 'bb' || props == 'dd') {
        width = 100;
    } else if (props == 'jc') {
        width = 90;
    } else if (props == 'jbgd' || props == 'tpgd') {
        width = 100;
    } else if (props == 'panel') {
        width = 50;
    }else if(props == 'line'){
        width = 70;
    }
    return width;
}
export default getWidth;

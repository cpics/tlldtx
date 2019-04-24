function getWidth(item) {
    let width;
    let props = item.props;

    if (
        props == 'orderBatch' ||
        props == 'tixing' ||
        props == 'orderNo' ||
        props == 'tp' ||
        props == 'feibiao'
    ) {
        width = 160;
    } else if (props == 'Orderdate') {
        width = 200;
    } else if (
        props == 'carType' ||
        props == 'hmchouDu' ||
        props == 'produceDate'
    ) {
        width = 100;
    } else if (props == 'ak') {
        width = 70;
    } else if (props == 'sz') {
        width = 60;
    } else if (props == 'guigeRiqi') {
        width = 60;
    }
    return width;
}
export default getWidth;

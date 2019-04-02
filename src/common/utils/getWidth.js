function getWidth(item) {
    let width;
    let props = item.props;
    if (props == 'orderBatch' || props == 'tixing' || props == 'orderNo' || props == 'ak' || props == 'tp') {
        width = 140;
    } else if (props == 'Orderdate') {
        width = 200;
    } else if (props == 'carType' || props == 'hmchouDu' || props == 'sz' || props == 'produceDate') {
        width = 100;
    }
    return width;
}
export default getWidth;
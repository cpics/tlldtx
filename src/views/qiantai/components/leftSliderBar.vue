<template>
    <div class="m-slide-main">
        <div class="u-slide-logo">
            <i class="u-logo-icon"></i>
            <span>生产拉动系统</span>
        </div>
        <div class="u-slide-content">
            <div class="d-slide-column">
                <h5>装箱南线</h5>
                <ul>
                    <li>2018-10-15 13.21.12</li>
                    <li><div class="d-label">今日计划：</div><div>312</div></li>
                    <li><div class="d-label">当前完成：</div><div>120</div></li>
                    <li><div class="d-label">完成率：</div><div>30%</div></li>
                    <li><div class="d-label">运行状态：</div><div>正常</div></li>
                </ul>
            </div>
            <div class="d-slide-column">
                <ul>
                    <li>
                        <div class="d-label">Wip-前壁:</div>
                        <div></div>
                    </li>
                    <li>
                        <div class="d-label">Wip-天花:</div>
                        <div></div>
                    </li>
                    <li>
                        <div class="d-label">Wip-前壁:</div>
                        <div></div>
                    </li>
                    <li>
                        <div class="d-label">Wip-木箱:</div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'leftSliderBar'
}
</script>
<style lang="scss" scoped>
.u-slide-logo{
    padding: 16px 10px;
    font-size: 14px;
    line-height: 28px;
    background: #004463;
    .u-logo-icon{
        width: 56px;
        height: 28px;
        margin-right: 10px;
        display: inline-block;
        vertical-align: top;
        background: url("images/logo.png") no-repeat center center;
        background-size: contain;
    }
}
.u-slide-content{
    padding: 25px 15px;
}
.d-slide-column{
    padding: 15px 0;
    h5{
        font-size: 14px;
        font-weight: normal;
        padding: 5px 0;
    }
    li{
        padding: 5px 0;
        display: flex;
    }
    .d-label{
        width: 80px;
        display: inline-block;
        flex-shrink: 0;
    }
}
</style>

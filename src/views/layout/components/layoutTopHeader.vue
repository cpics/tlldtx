<template>
    <div class="layout-top-header">
        <div class="layout-top-header-left">
            <div class="hd-logo"></div>
            <div class="hd-logo-name">生产拉动系统</div>
        </div>
        <div class="layout-top-header-right">
            <div class="manager-name">
                <i class="manager-icon"></i>管理员
            </div>
            <div class="exit-btn">
                <el-button>退出</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'layoutTopHeader'
    };
</script>
<style lang="scss" scoped>
    .layout-top-header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        .layout-top-header-left,
        .layout-top-header-right {
            display: flex;
            align-items: center;
            color: #000;
        }
        .hd-logo{
            width: 60px;
            height: 32px;
            margin-right: 15px;
            background: url("images/logo.png") no-repeat center center;
            background-size: contain;
        }
        .hd-logo-name{
            font-size: 16px;
        }
        .manager-icon {
            width: 14px;
            height: 16px;
            display: inline-block;
            margin-right: 10px;
            background: url("images/manager.png") no-repeat center center;
            background-size: contain;
        }
        .manager-name{
            display: flex;
            align-items: center;
            margin-right: 66px;
        }

    }
</style>

<template>
    <div class="mod-wrapper">
        <el-container>
            <el-header>
                <layoutTopHeader/>
            </el-header>
            <el-main class="g-flex">
                <el-container>
                    <el-aside width="180px">
                        <leftSlidebarMenu/>
                    </el-aside>
                    <el-container>
                        <el-header class="bread-source">
                            <div>当前位置:{{currentMeta}}</div>
                        </el-header>
                        <el-main class="el-main-content">
                            <router-view/>
                        </el-main>
                    </el-container>
                </el-container>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import layoutTopHeader from './components/layoutTopHeader';
    import leftSlidebarMenu from './components/leftSlidebarMenu';
    export default {
        name: 'layout',
        components: {
            layoutTopHeader,
            leftSlidebarMenu
        },
        computed: {
            ...mapState({
                currentMeta: state => state.currentMeta
            })
        }
    };
</script>
<style lang="scss" scoped>
    .el-main {
        padding: 0;
    }
    .el-main-content{
        padding: 30px;
    }
    .g-flex {
        display: flex;
        border-top:1px solid #dfdfdf;
    }

    .el-aside {
        background: #2d3c4f;
    }
    .bread-source{
        height: 60px;
        line-height: 60px;
        background: #fff;
        border-bottom:1px solid #dfdfdf;
    }
    .el-header{
        background: #fff;
    }
</style>


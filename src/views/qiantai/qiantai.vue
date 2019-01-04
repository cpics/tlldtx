<template>
  <el-container class="mod-wrapper">
    <el-aside class="g-slide-bar" width="200px">
      <leftSliderbar/>
    </el-aside>
    <el-container>
      <el-header class="f-header-bar">
        <i class="f-menu-line"></i>
        <layoutTopHeaderRight/>
      </el-header>
      <el-main class="f-el-main">
        <el-tabs v-model="activeName" type="card" @tab-click="tabClick">
          <el-tab-pane
            v-for="(item,index) in tabsList"
            :key="index"
            :label="item.meta.title"
            :name="item.name"
          ></el-tab-pane>
        </el-tabs>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import layoutTopHeaderRight from '../../components/layoutTopHeaderRight/layoutTopHeaderRight';
import leftSliderbar from './components/leftSliderBar';

import { qiantaiRouters } from '../../router';
export default {
    name: 'qiantai',
    data() {
        return {
            tabsList: [],
            activeName: 'first'
        };
    },
    components: {
        layoutTopHeaderRight,
        leftSliderbar
    },
    methods: {
        getTabs() {
            this.tabsList = qiantaiRouters;
            this.activeName = this.$route.name;
        },
        tabClick(tab, event) {
            this.$router.push(qiantaiRouters[tab.index].path);
        }
    },
    mounted() {
        this.getTabs();
    }
};
</script>
<style lang="scss" scoped>
  .g-slide-bar{
    color: #fff;
    background: #005982;
  }
  .f-el-main{
    background: #fff;
  }
  .f-header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    background: #f8f9fd;
    .f-header-right{
      display: flex;
      align-items: center;
    }
  }
  .f-menu-line{
    position: relative;
    width: 20px;
    height: 12px;
    display: inline-block;
    border-top: 2px solid #b1b7c3;
    border-bottom: 2px solid #b1b7c3;
    background-clip:content-box;
    &:before{
      position: absolute;
      left: 0;
      top: 50%;
      content: "";
      width: 100%;
      height: 2px;
      background: #b1b7c3;
      margin-top: -1px;
    }
  }
</style>

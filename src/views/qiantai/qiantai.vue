<template>
  <el-container class="mod-wrapper">
    <el-aside class="g-slide-bar" width="200px">
      <leftSliderbar :maxClassString="userInfo.roleString" />
    </el-aside>
    <el-container>
      <el-header class="f-header-bar">
        <i class="f-menu-line"></i>
        <layoutTopHeaderRight/>
      </el-header>
      <el-main class="f-el-main">
        <el-tabs v-model="activeName" type="card" @tab-click="tabClick">
          <el-tab-pane v-for="(item,index) in tabsList" :key="index" :name="item.name">
            <span slot="label">
              <el-badge :value="99" class="item m-inside">{{item.meta.title}}</el-badge>
            </span>
          </el-tab-pane>
        </el-tabs>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import layoutTopHeaderRight from '../../components/layoutTopHeaderRight/layoutTopHeaderRight';
import leftSliderbar from './components/leftSliderBar';

import cookies from '../../common/utils/cookies';

import { qiantaiZxRouters, qiantaiQbRouters } from '../../router';
import { roleMaxType } from '../../common/role-types/role-types';
export default {
    name: 'qiantai',
    data() {
        return {
            tabsList: [],
            activeName: 'first',
            qiantaiRouters: [],
            userInfo: {},
            zxSort:[0,1,2,3,4],
            qbSort:[1,0,2,3,4]
        };
    },
    components: {
        layoutTopHeaderRight,
        leftSliderbar
    },
    methods: {
        getTabs() {
            this.tabsList = this.qiantaiRouters;
            this.activeName = this.$route.name;
        },
        tabClick(tab, event) {
            this.$router.push(this.qiantaiRouters[tab.index].path);
        }
    },
    mounted() {
        if (!cookies.get('userInfo')) {
            this.$router.push('/login');
            return;
        }
        this.userInfo = cookies.get('userInfo');
        console.log(this.userInfo);
        let currentUserMaxType = this.userInfo.roleMaxType;

        if (currentUserMaxType == roleMaxType.ZX) {
            this.qiantaiRouters = qiantaiZxRouters;
        } else if (currentUserMaxType == roleMaxType.QB) {
            this.qiantaiRouters = qiantaiQbRouters;
        }
        this.getTabs();

        // if(this.userInfo.role)
        // this.getTabs();
    }
};
</script>
<style lang="scss" scoped>
.g-slide-bar {
  color: #fff;
  background: #005982;
}
.f-el-main {
  background: #fff;
}
.f-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  background: #f8f9fd;
  .f-header-right {
    display: flex;
    align-items: center;
  }
}
.f-menu-line {
  position: relative;
  width: 20px;
  height: 12px;
  display: inline-block;
  border-top: 2px solid #b1b7c3;
  border-bottom: 2px solid #b1b7c3;
  background-clip: content-box;
  &:before {
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

<template>
  <el-container>
    <el-aside width="200px">
      <leftSliderbar/>
    </el-aside>
    <el-container>
      <el-header>
        <layoutTopHeaderRight/>
      </el-header>
      <el-main>
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

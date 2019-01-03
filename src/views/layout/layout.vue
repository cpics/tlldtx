<template>
  <div>
    <el-container>
      <el-header>
        <layoutTopHeader/>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="150px">
            <leftSlidebarMenu/>
          </el-aside>
          <el-container>
            <el-header>
              <div>当前位置:{{currentMeta}}</div>
            </el-header>
            <el-main>
              <router-view/>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
</style>


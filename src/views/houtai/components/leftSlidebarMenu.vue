<template>
  <el-menu :default-active="currentIndex" class="el-menu-vertical-demo" :router="true">
    <el-menu-item v-for="(item,i) in sliderbarMenuList" :index="`${i}`" :key="i" :route="item">
      <span slot="title">{{item.meta.title}}{{i}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { houtaiRouters } from '../../../router.js';
export default {
    name: 'leftSlidebarMenu',
    data() {
        return {
            sliderbarMenuList: [],
            currentIndex: '1'
        };
    },
    methods: {
        getSliderbarMenuList() {
            this.sliderbarMenuList = houtaiRouters;
        },
        getCurrentIndex(route) {
            this.sliderbarMenuList.forEach((item, index) => {
                if (item.name == route.name) {
                    this.currentIndex = index + '';
                }
                
            });
            console.log(this.currentIndex);
        }
    },
    mounted() {
        this.getSliderbarMenuList();
        this.getCurrentIndex(this.$route);
        
    },
    watch: {
        $route(route, oldRoute) {
            this.getCurrentIndex(route);
        }
    }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  color: #fff;
  background: #2d3c4f;
  .el-menu-item {
    color: #fff;
    border-bottom: 1px solid #2d2b3c;
    &:focus,
    &:hover {
      background: #17ba9b;
    }
  }
  .is-active{
      background: #17ba9b;
  }
}
.el-menu {
  border-right: 0;
}
</style>



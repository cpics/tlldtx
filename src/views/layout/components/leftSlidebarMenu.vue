<template>
  <el-menu
    :default-active="currentIndex"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item v-for="(item,i) in sliderbarMenuList" :index="`${i}`" :key="i" :route="item">
      <span slot="title">{{item.meta.title}}{{i}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { mainRouters } from '../../../router.js';
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
            this.sliderbarMenuList = mainRouters;
        },
        getCurrentIndex(route) {
            this.sliderbarMenuList.forEach((item, index) => {
                if (item.name == route.name) {
                    this.currentIndex = index + '';
                }
            });
        }
    },
    mounted() {
        this.getSliderbarMenuList();
    },
    watch: {
        $route(route, oldRoute) {
            this.getCurrentIndex(route);
        }
    }
};
</script>



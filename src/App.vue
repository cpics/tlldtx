<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'app',
    components: {},
    methods: {
        ...mapMutations(['setUserInfo'])
    },
    mounted() {
        this.setUserInfo();
    }
};
</script>

<style>
@import "./assets/styles/reset.css";
@import "./assets/styles/common.css";
</style>

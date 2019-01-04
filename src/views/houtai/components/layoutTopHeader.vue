<template>
  <div class="layout-top-header">
    <div class="layout-top-header-left">
      <div class="hd-logo"></div>
      <div class="hd-logo-name">生产拉动系统</div>
    </div>
    <layoutTopHeaderRight />
  </div>
</template>
<script>
import layoutTopHeaderRight from '../../../components/layoutTopHeaderRight/layoutTopHeaderRight';
export default {
    name: 'layoutTopHeader',
    components:{
        layoutTopHeaderRight
    }
    
};
</script>
<style lang="scss" scoped>
.layout-top-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  .layout-top-header-left {
    display: flex;
    align-items: center;
    color: #000;
  }
  .hd-logo {
    width: 60px;
    height: 32px;
    margin-right: 15px;
    background: url("images/logo.png") no-repeat center center;
    background-size: contain;
  }
  .hd-logo-name {
    font-size: 16px;
  }
}
</style>

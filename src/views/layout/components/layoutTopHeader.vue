<template>
    <div class="layout-top-header">
        <div class="layout-top-header-left">
          <div class="logo"><img src="" /></div>
          <div class="name">生产拉动系统</div>
        </div>
        <div class="layout-top-header-right">
          <div><i class="el-icon-info"></i>管理员</div>
          <div><el-button>退出</el-button></div>
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
  align-content: center;
  justify-content: space-between;

  .layout-top-header-left,
  .layout-top-header-right {
    display: flex;
  }
}
</style>

<template>
  <div class="manager-name">
    <i class="manager-icon"></i>
    {{userInfo.name}}
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'user',
    computed: {
        ...mapState(['userInfo'])
    }
};
</script>
<style lang="scss" scoped>
.manager-icon {
  width: 14px;
  height: 16px;
  display: inline-block;
  margin-right: 10px;
  background: url("images/manager.png") no-repeat center center;
  background-size: contain;
}
.manager-name {
  display: flex;
  align-items: center;
  margin-right: 66px;
}
</style>



<template>
  <div class="layout-top-header-right">
    <user/>
    <loginOut/>
  </div>
</template>
<script>
import loginOut from '../loginOut/loginOut';
import user from '../user/user';
export default {
    name: 'layoutTopHeaderRight',
    components: {
        loginOut,
        user
    }
};
</script>
<style lang="scss" scoped>
.layout-top-header-right {
  display: flex;
  align-items: center;
  color: #000;
}
</style>


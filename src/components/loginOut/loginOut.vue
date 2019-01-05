<template>
  <div class="exit-btn">
    <el-button @click="loginOut">退出</el-button>
  </div>
</template>
<script>
import { loginOut } from '../../api';
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'loginOut',
    methods: {
        ...mapMutations(['removeUserInfo']),
        async loginOut() {
            let res = await loginOut();
            if (res.code == 0) {
                this.removeUserInfo();
                this.$router.push('/login');
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        }
    }
};
</script>


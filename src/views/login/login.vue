<template>
  <div class="mod-wrapper">
    <div class="g-login-main">
      <div class="m-login-main">
        <div class="login-inner">
          <div class="u-login-logo">
            <i class="login-logo-icon"></i>
            <span class="u-logo-txt">通力生产拉动系统</span>
          </div>
          <div class="m-login-box">
            <h4 class="login-title">用户登录</h4>
            <div class="m-login-form">
              <div class="form-row">
                <input type="text" v-model="username" placeholder="请输入用户名">
              </div>
              <div class="form-row">
                <input type="password" v-model="password" placeholder="请输入密码">
              </div>
            </div>
            <div class="m-login-button" @click="login">登 录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/index';
import { mapMutations, mapState } from 'vuex';

import cookies from '../../common/utils/cookies';
import filterRoleType, {
    roleMaxType,
    roleEnum
} from '../../common/role-types/role-types';
export default {
    name: 'login',
    components: {},
    data() {
        return {
            username: '',
            password: ''
        };
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapMutations(['setUserInfo']),
        async login() {
            if (this.username.length == 0) {
                this.$notify.error({
                    type: '错误',
                    message: '请填写用户名'
                });
                return;
            }
            if (this.password.length == 0) {
                this.$notify.error({
                    type: '错误',
                    message: '请填写密码'
                });
                return;
            }
            let res = await login({
                username: this.username,
                password: this.password
            });
            if (res.code == 0) {
                if (res.authorization) {
                    res.objects.authorization = res.authorization;
                }
                // console.log(res.authorization);
                // console.log(roleType);
                res.objects.roleMaxType = filterRoleType(res.objects.role);
                res.objects.roleString = roleEnum[res.objects.role];

                this.setUserInfo(res.objects);

                let $roleMaxType = res.objects.roleMaxType;
                if ($roleMaxType == roleMaxType.ADMIN) {
                    this.$router.push('houtai/index');
                } else if (
                    $roleMaxType == roleMaxType.ZX ||
                    $roleMaxType == roleMaxType.QB
                ) {
                    this.$router.push('qiantai/currentWipAreaOrder');
                }
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
            // console.log(res);
        }
    },
    mounted() {
        // console.log(this.$store.state);
    }
};
</script>
<style scoped>
@import url("./login.css");
</style>
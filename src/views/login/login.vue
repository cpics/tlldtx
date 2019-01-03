<style scoped>
    @import url('./login.css');
</style>
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
                                <input type="text" placeholder="请输入用户名" />
                            </div>
                            <div class="form-row">
                                <input type="text" placeholder="请输入密码" />
                            </div>
                        </div>
                        <div class="m-login-button">登 录</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        components: {}
    };
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from '../src/api';
export default {
    name: 'app',
    components: {},
    methods: {
        async login(username, password) {
            let res = await login({
                username,
                password
            });
        }
    },
    mounted() {
        this.login('ly','000111');
    }
};
</script>

<style>
</style>

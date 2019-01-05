import Vue from 'vue';
import Vuex from 'vuex';
import cookies from './common/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentMeta: '',
        userInfo: {}
    },
    getters: {
        getCurrentMeta(state) {
            return state.currentMeta;
        },
        getUserInfo(state) {
            return state.userInfo;
        }
    },
    mutations: {
        //设置页脚
        setCurrentMeta(state, currentMeta) {
            state.currentMeta = currentMeta;
        },
        setUserInfo(state, userInfo) {
            if (userInfo) {
                cookies.set('userInfo', userInfo, {
                    expires: 7
                });
                state.userInfo = userInfo;
            } else if (cookies.get('userInfo')) {
                state.userInfo = cookies.get('userInfo');
            }

        },
        removeUserInfo(state) {
            cookies.remove('userInfo', {
                path: '/'
            });
            state.userInfo = {};
        }
    },
    actions: {}
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentMeta:''
    },
    getters:{
        getCurrentMeta(state){
            return state.currentMeta;
        }
    },
    mutations: {
        setCurrentMeta(state,currentMeta){
            state.currentMeta = currentMeta;
        }
    },
    actions: {}
});

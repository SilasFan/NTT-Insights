import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
        isLogin: false,
    },
    mutations: {
        changeLogin(state, newval: boolean) {
            state.isLogin = newval;
        },
    },
    actions: {},
    getters: {
        hasToken: state => state.token === '',
    },
});

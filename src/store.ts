import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
    },
    mutations: {
        setToken(state, newToken: string) {
            state.token = newToken;
        },
    },
    actions: {},
    getters: {
        isLogin: state => !(state.token === ''),
    },
});

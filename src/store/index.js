import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuth: false,
        user: {},
        status: '',
    },
    mutations: {
        authRequest(state) {
            state.status = 'Loading';
        },

        logIn(state, user) {
            state.isAuth = true;
            state.user = user;
            state.status = 'Success';
        },

        authError(state) {
            state.status = 'Error';
        },
    },
    actions: {
        async logIn({ commit }) {
            commit('authRequest');
            await axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    commit('logIn', res.data);
                })
                .catch((err) => {
                    console.log(err);
                    commit('authError');
                });
        },
    },
    getters: {
        authStatus: (state) => state.status,
        isLoggedIn: (state) => state.isAuth,
        user: (state) => state.user,
    },
});

export default store;

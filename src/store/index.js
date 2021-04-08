import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuth: false,
        users: [],
        status: '',
    },
    mutations: {
        authRequest(state) {
            state.status = 'Loading';
        },

        logIn(state, user) {
            state.isAuth = true;
            state.users = user;
            state.status = 'Success';
        },

        authError(state) {
            state.status = 'Error';
        },

        getUsers(state, user) {
            state.users = user;
        },

        findUser(state, id) {
            state.users = state.users.filter((user) => user.id === id);
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

        async getUsers({ commit }, search) {
            await axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
                    console.log('search', search);
                    let data = res.data;
                    if (search) {
                        data = res.data.filter(
                            (item) => item.id === parseInt(search)
                        );
                    }
                    commit('getUsers', data);
                })
                .catch((err) => console.log(err));
        },
    },
    getters: {
        authStatus: (state) => state.status,
        isLoggedIn: (state) => state.isAuth,
        user: (state) => state.users,
    },
});

export default store;

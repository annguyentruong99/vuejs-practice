import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuth: false,
        users: [],
        posts: [],
        status: '',
    },
    mutations: {
        logIn(state) {
            state.isAuth = true;
        },

        getUsers(state, user) {
            state.users = user;
        },

        findUser(state, id) {
            state.users = state.users.filter((user) => user.id === id);
        },

        deleteUser(state, id) {
            state.users = state.users.filter((user) => user.id !== id);
        },

        getPosts(state, post) {
            state.posts = post;
        },
    },
    actions: {
        async logIn({ commit }) {
            try {
                commit('logIn');
            } catch (err) {
                console.log(err);
            }
        },

        async getUsers({ commit }, search) {
            await axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {
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

        async deleteUser({ commit }, id) {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(commit('deleteUser', id))
                .catch((err) => console.log(err));
        },

        async getPosts({ commit }) {
            await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    commit('getPosts', res.data);
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

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

        updateUser(state, updatedUser) {
            const index = state.users.findIndex(
                (user) => user.id === updatedUser.id
            );
            if (index !== -1) {
                state.users.splice(index, updatedUser);
            }
        },

        getPosts(state, post) {
            state.posts = post;
        },

        deletePost(state, id) {
            state.posts = state.posts.filter((post) => post.id !== id);
        },

        updatePost(state, updatedPost) {
            const index = state.users.findIndex(
                (user) => user.id === updatedPost.id
            );
            if (index !== -1) {
                state.users.splice(index, updatedPost);
            }
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

        async updateUser({ commit }, updatedUser) {
            await axios
                .put(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(commit('updateUser', updatedUser))
                .catch((err) => console.log(err));
        },

        async getPosts({ commit }, search) {
            await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    let data = res.data;
                    if (search) {
                        data = res.data.filter(
                            (item) => item.id === parseInt(search)
                        );
                    }
                    commit('getPosts', res.data);
                })
                .catch((err) => console.log(err));
        },

        async deletePost({ commit }, id) {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(commit('deletePost', id))
                .catch((err) => console.log(err));
        },

        async updatePost({ commit }, updatedPost) {
            await axios
                .put(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(commit('updatePost', updatedPost))
                .catch((err) => console.log(err));
        },
    },
    getters: {
        authStatus: (state) => state.status,
        isLoggedIn: (state) => state.isAuth,
        user: (state) => state.users,
        posts: (state) => state.posts,
    },
});

export default store;

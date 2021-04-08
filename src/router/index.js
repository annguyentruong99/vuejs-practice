import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';
import Login from '../views/Login.vue';
import Posts from '../views/Posts.vue';
import UserDetail from '../views/UserDetail.vue';
import PostDetail from '../views/PostDetail.vue';

import store from '../store';

const routes = [
    {
        path: '/',
        name: 'Users',
        component: Users,
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserDetail,
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: '/posts/:id',
        name: 'PostDetail',
        component: PostDetail,
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiredAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});

export default router;

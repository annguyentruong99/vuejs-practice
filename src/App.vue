<template>
    <div class="app-layout">
        <el-container>
            <el-aside width="200px" v-if="isLoggedIn === true">
                <div class="user-profile">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                    <span>An Nguyen</span>
                </div>
                <el-divider></el-divider>
                <el-menu default-active="1" class="nav-menu">
                    <router-link to="/">
                        <el-menu-item index="1">
                            <i class="el-icon-user"></i>
                            <span>Users</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/posts">
                        <el-menu-item index="2">
                            <i class="el-icon-notebook-2"></i>
                            <span>Posts</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'App',
        computed: {
            ...mapState({
                isLoggedIn: (state) => state.isAuth,
            }),
        },
    };
</script>

<style>
    .app-layout {
        height: 100vh;
    }

    .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .el-menu.nav-menu {
        border: 0;
    }
</style>

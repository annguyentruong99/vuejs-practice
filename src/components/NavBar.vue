<template>
    <el-container>
        <el-aside width="200px">
            <div class="user-info">
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
    </el-container>
</template>

<script>
    import store from '../store';

    export default {
        name: 'NavBar',
    };
</script>

<style>
    .el-aside {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>

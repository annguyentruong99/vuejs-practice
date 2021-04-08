<template>
    <div class="users">
        <div class="user-list">
            <el-row>
                <el-col :span="24">
                    <h1>User List</h1>
                </el-col>
            </el-row>
            <search-bar></search-bar>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <el-row>
                        <el-col :span="2"
                            ><div class="avatar">
                                <el-avatar
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                ></el-avatar></div
                        ></el-col>
                        <el-col :span="18"
                            ><div class="user-info">
                                {{ user.username }} <br />
                                {{ user.email }}
                            </div></el-col
                        >
                        <el-col :span="4"
                            ><div class="details-button">
                                <el-button @click="handleClick(user.id)"
                                    >Details</el-button
                                >
                            </div></el-col
                        >
                    </el-row>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import router from '../router';

    import SearchBar from '../components/SearchBar.vue';

    export default {
        name: 'Home',
        components: {
            SearchBar,
        },
        computed: {
            ...mapState({
                users: (state) => state.users,
            }),
        },
        methods: {
            handleClick(id) {
                router.push(`/user/${id}`);
            },
        },
    };
</script>

<style>
    el-main {
        width: 100%;
    }

    .user-list h1 {
        margin: 0;
        padding-left: 4rem;
    }

    .user-list ul {
        display: block;
        padding: 2rem;
        overflow: auto;
    }

    .user-list li {
        list-style-type: none;
        margin: 2rem;
        padding: 1rem;
        border: 1px solid #dcdfe6;
        border-radius: 8px;
    }

    .user-list li:hover {
        -moz-box-shadow: 0 2px 12px 0 rgba(54, 54, 54, 0.1);
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        background-color: #40a0ffa9;
    }

    .el-col.el-col-18 {
        display: flex;
        justify-content: left;
    }
</style>

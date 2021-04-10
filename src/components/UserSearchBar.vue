<template>
    <div class="users-search-bar">
        <el-row :gutter="10">
            <el-col :span="18">
                <el-input
                    v-model="searchInput"
                    placeholder="Search user by User ID"
                    maxlength="2"
                    @change="handleSearch"
                ></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="onSearch">Search</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import store from '../store';

    export default {
        name: 'UserSearchBar',
        data() {
            return {
                searchInput: '',
            };
        },
        computed: {
            ...mapState({
                users: (state) => state.users,
            }),
        },
        methods: {
            handleSearch(value) {
                this.searchInput = value;
            },
            getUserList(search) {
                store.dispatch('getUsers', search);
            },
            onSearch() {
                const { searchInput } = this;
                this.getUserList(searchInput);
            },
        },
        mounted() {
            this.getUserList();
        },
    };
</script>

<style scoped>
    .users-search-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        padding: 2rem;
        margin: 0 32px 0 32px;
    }
</style>

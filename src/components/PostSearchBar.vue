<template>
    <div class="posts-search-bar">
        <el-row :gutter="10">
            <el-col :span="18">
                <el-input
                    v-model="searchInput"
                    placeholder="Search post by Post ID"
                    maxlength="1"
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
        name: 'PostSearchBar',
        data() {
            return {
                searchInput: '',
            };
        },
        computed: {
            ...mapState({
                posts: (state) => state.posts,
            }),
        },
        methods: {
            handleSearch(value) {
                this.searchInput = value;
            },
            getPostList(search) {
                store.dispatch('getPosts', search);
            },
            onSearch() {
                const { searchInput } = this;
                this.getPostList(searchInput);
            },
        },
        mounted() {
            this.getPostList();
        },
    };
</script>

<style scoped>
    .posts-search-bar {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
    }
</style>

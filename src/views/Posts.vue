<template>
    <div class="posts">
        <el-row>
            <el-col :span="12" :push="1">
                <h1>Post list</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :push="1">
                <post-search-bar></post-search-bar>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col v-for="post in posts" :key="post.id" :span="10" :push="1">
                <el-card shadow="hover" @click="handleClick(post.id)">
                    <div class="card-content">
                        <div class="thumbnail">
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            />
                        </div>
                        <div class="post-text">
                            <h2>{{ post.title }}</h2>
                            <p>{{ post.body }}</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import store from '../store';
    import router from '../router';

    import { mapState } from 'vuex';

    import PostSearchBar from '../components/PostSearchBar.vue';

    export default {
        name: 'Posts',
        components: {
            PostSearchBar,
        },
        created() {
            store.dispatch('getPosts');
        },
        computed: {
            ...mapState({
                posts: (state) => state.posts,
            }),
        },
        methods: {
            handleClick(id) {
                router.push(`/post/${id}`);
            },
        },
    };
</script>

<style>
    .card-content {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 10px;
        overflow: hidden;
    }
</style>

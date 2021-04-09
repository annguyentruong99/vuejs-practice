<template>
    <div class="post-detail">
        <div class="form-header">
            <h1>Post {{ id }}</h1>
        </div>
        <div class="post-inputs">
            <el-form ref="postForm">
                <el-form-item label="Title">
                    <el-input placeholder="Title" v-model="dataSource.title">
                    </el-input>
                </el-form-item>

                <el-form-item label="Body">
                    <el-input
                        type="textarea"
                        v-model="dataSource.body"
                    ></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="form-buttons">
        <el-popconfirm
            confirmButtonText="Update"
            cancelButtonText="No, Thanks"
            title="Are you sure you want to update this post?"
            @cancel="handleCancel"
            @confirm="handleUpdate(dataSource)"
        >
            <template #reference>
                <el-button type="primary">Update</el-button>
            </template>
        </el-popconfirm>
        <el-popconfirm
            confirmButtonText="Delete"
            cancelButtonText="No, Thanks"
            icon="el-icon-info"
            iconColor="red"
            title="Are you sure you want to delete this post?"
            @cancel="handleCancel()"
            @confirm="handleDelete(dataSource.id)"
        >
            <template #reference>
                <el-button type="danger">Delete</el-button>
            </template>
        </el-popconfirm>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';
    import store from '../store';

    export default {
        name: 'PostDetail',

        data() {
            return {
                id: this.$route.params.id,
                dataSource: {
                    userId: '',
                    id: '',
                    title: '',
                    body: '',
                },
            };
        },

        create() {
            axios
                .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                .then((res) => (this.dataSource = res.data));
        },

        methods: {
            handleCancel() {
                router.push('/posts');
            },

            handleDelete(id) {
                store
                    .dispatch('deletePost', id)
                    .then(router.push('/posts'))
                    .then(
                        this.$notify({
                            title: 'Success',
                            message: 'Post has been deleted!',
                            type: 'success',
                        })
                    )
                    .catch((err) => {
                        console.log(err);
                        this.$notify({
                            title: 'Failed',
                            message: 'Post deletion failed!',
                            type: 'error',
                        });
                    });
            },

            handleUpdate(data) {
                store
                    .dispatch('updatePost', data)
                    .then(router.push('/posts'))
                    .then(
                        this.$notify({
                            title: 'Success',
                            message: 'Post has been updated!',
                            type: 'success',
                        })
                    )
                    .catch((err) => {
                        console.log(err);
                        this.$notify({
                            title: 'Failed',
                            message: 'Post update failed!',
                            type: 'error',
                        });
                    });
            },
        },
    };
</script>

<template>
    <div class="user-details">
        <div class="form-header">
            <h1>User {{ $route.params.id }}</h1>
        </div>
        <div class="user-inputs">
            <el-form ref="this.data" label-width="120px">
                <el-form-item label="Full Name">
                    <el-input
                        placeholder="Full Name"
                        v-model="dataSource.name"
                    ></el-input>
                </el-form-item>
                <el-form-item label="User Name">
                    <el-input
                        placeholder="User Name"
                        v-model="dataSource.username"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input
                        placeholder="Email"
                        v-model="dataSource.email"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Street">
                    <el-input
                        placeholder="Street"
                        v-model="dataSource.address.street"
                    ></el-input>
                </el-form-item>
                <el-form-item label="City">
                    <el-input
                        placeholder="City"
                        v-model="dataSource.address.city"
                    ></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="form-buttons">
            <el-popconfirm
                confirmButtonText="Update"
                cancelButtonText="No, Thanks"
                title="Are you sure you want to update this user?"
                @cancel="handleCancel"
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
                title="Are you sure you want to delete this user?"
                @cancel="handleCancel"
                @confirm="handleDelete(dataSource.id)"
            >
                <template #reference>
                    <el-button type="danger">Delete</el-button>
                </template>
            </el-popconfirm>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from '../router';
    import store from '../store';

    export default {
        name: 'UserDetail',
        data() {
            return {
                id: this.$route.params.id,
                dataSource: {
                    id: '',
                    name: '',
                    username: '',
                    email: '',
                    address: {
                        street: '',
                        city: '',
                    },
                },
            };
        },
        created() {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then((res) => (this.dataSource = res.data));
        },
        methods: {
            handleCancel() {
                router.push('/');
            },
            handleDelete(id) {
                store
                    .dispatch('deleteUser', id)
                    .then(router.push('/'))
                    .then(
                        this.$notify({
                            title: 'Success',
                            message: 'User has been deleted!',
                            type: 'success',
                        })
                    );
            },
            handleUpdate() {},
        },
    };
</script>

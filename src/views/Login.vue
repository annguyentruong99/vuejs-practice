<template>
    <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="6">
            <el-card class="login-card">
                <el-form
                    ref="loginForm"
                    :model="loginForm"
                    :rules="rules"
                    @submit.prevent="handleLogIn"
                >
                    <el-form-item prop="email">
                        <el-input
                            v-model="loginForm.email"
                            placeholder="Email"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            placeholder="Password"
                            v-model="loginForm.password"
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" native-type="submit"
                            >Login</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import store from '../store';
    import router from '../router';

    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    email: '',
                    password: '',
                },
                rules: {
                    email: [
                        {
                            required: true,
                            message: 'Please enter your email',
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            message: 'Please enter your password',
                            trigger: 'blur',
                        },
                    ],
                },
            };
        },
        methods: {
            handleLogIn() {
                store.dispatch('logIn').then(() => router.push('/'));
            },
        },
    };
</script>

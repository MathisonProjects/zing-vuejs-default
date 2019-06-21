<template>
    <div class='row my-5'>
    	<div class='col-md-4 offset-md-4'>
            <div class="card">
                <div class="card-header text-light bg-dark">
                    Administration Login
                </div>
                <div class="card-body">
                    <h5 class="card-title">Welcome to the Projects</h5>
                    <p class="card-text">
                        <div class='form-group'>
                            <label for='user'>Email</label>
                            <input type='text' placeholder='Email' id='user' name='user' v-model='email' class='form-control' />
                        </div>
                        <div class='form-group'>
                            <label for='password'>Password</label>
                            <input type='password' placeholder='Password' id='password' name='password' v-model='password' class='form-control' @keyup.enter='login' />
                        </div>
                    </p>
                    <a href="#" class="btn btn-primary" @click='login'>Login</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'admin-login-component',
        props: [],
        data() {
            return {
                password: null,
                email   : null,
            }
        },
        computed: {},
        methods: {
            login() {
                var data = {
                    login_email    : this.email,
                    login_password : this.password
                };

                this.$emit('fireLogin', data);
            }
        }    
    }
</script>

<style scope>

</style>
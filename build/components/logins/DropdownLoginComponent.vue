<template>
	<div class='card' style='width: 300px;'>
		<div class="card-body">
			<h4>Login</h4>
			<div class='form-group'>
				<label for='login_email'>Email</label>
				<input type='text' v-model='login_email' name='login_email' class='form-control' placeholder="Eg: example@example.com" />
			</div>
			<div class='form-group'>
				<label for='login_password'>Password</label>
				<input type='password' v-model='login_password' name='login_password' class='form-control' placeholder="Password" @keyup.enter='login' />
			</div>
			<div class='form-group'>
				<button type='button' class='btn btn-primary btn-block' :disabled='login_password.length < 3' @click='login()'>Login</button>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'dropdown-login-component',
		data() {
			return {
				login_email    : '',
				login_password : ''
			}
		},
		methods: {
			login() {
                var data = {
                    login_email    : this.login_email,
                    login_password : this.login_password
                };

                this.$emit('fireLogin', data);
            }
		},
        mounted() {
            console.log('Login Component mounted.')
        }
    }
</script>

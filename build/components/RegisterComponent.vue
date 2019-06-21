<template>
	<div class='card' style='width: 300px;'>
		<div class="card-body">
			<h4>Registeration</h4>
			<div class='form-group'>
				<label for='register_username'>Username</label>
				<input type='text' v-model='register_username' name='register_username' class='form-control' placeholder="Eg: user227" />
			</div>
			<div class='form-group'>
				<label for='first_name'>First Name</label>
				<input type='text' v-model='first_name' name='first_name' class='form-control' placeholder="Eg: example@example.com" />
			</div>
			<div class='form-group'>
				<label for='last_name'>Last Name</label>
				<input type='text' v-model='last_name' name='last_name' class='form-control' placeholder="Eg: example@example.com" />
			</div>
			<div class='form-group'>
				<label for='back_up_email'>Email</label>
				<input type='text' v-model='back_up_email' name='back_up_email' class='form-control' placeholder="Eg: example@example.com" />
			</div>
			<div class='form-group'>
				<label for='register_password'>Password</label>
				<input type='password' v-model='register_password' name='register_password' class='form-control' placeholder="Password" />
			</div>
			<div class='form-group'>
				<label for='register_password'>Repeat Password</label>
				<input type='password' v-model='register_repeat_password' name='register_repeat_password' class='form-control' placeholder="Password" />
			</div>
			<div class='form-group'>
				<button type='button' class='btn btn-primary btn-block' :disabled='formComplete' v-on:click='register()'>Register</button>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		data() {
			return {
				register_username        : '',
				first_name               : '',
				last_name                : '',
				back_up_email            : '',
				register_password        : '',
				register_repeat_password : ''
			}
		},
		computed: {
			formComplete() {
				return this.register_password != this.register_repeat_password || this.back_up_email.length < 6 || this.register_password.length < 3;
			}
		},
		methods: {
			register() {
	    		var data = {
					register_username        : this.register_username,
					first_name               : this.first_name,
					last_name                : this.last_name,
					back_up_email            : this.back_up_email,
					register_password        : this.register_password,
					register_repeat_password : this.register_repeat_password
	    		};

	    		this.$store.dispatch('UserStore/RegisterUser', data);
	    		
			}
		},
        mounted() {
            console.log('Register Component mounted.')
        }
    }
</script>

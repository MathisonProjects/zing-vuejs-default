<template>
    <div>
    	<AdminLogin v-if='type == "admin"' @fireLogin="login" />
    	<DropdownLogin v-if='type == null' @fireLogin="login" />
    </div>
</template>

<script>
	import AdminLoginComponent from './logins/AdminLoginComponent';
	import DropdownLoginComponent from './logins/DropdownLoginComponent';

    export default {
        name: 'login-component',
        components : {
        	AdminLogin    : AdminLoginComponent,
        	DropdownLogin : DropdownLoginComponent
        },
        props: [
        	"type"
        ],
        data() {
            return { }
        },
        computed: {},
        methods: {
        	login(data) {
                this.$store.dispatch('userStore/LoginUser', data).then(response => {
                    if (response.data == 'fail') {
                        this.password = '';
                        this.$Helper.notifications.failLogin();
                    } else {
                        this.$Helper.notifications.loginSuccess();
                    }
                });
            }
        }    
    }
</script>

<style scope>

</style>
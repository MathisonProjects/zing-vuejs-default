<template>
    <div :class="alertType()" style='position: absolute;z-index: 99999'>
        {{ args.message}}
    </div>
</template>

<script>
    export default {
        name: 'alert-box-component',
    	props: [
    		'args'
    	],
		data() {
			return {
			}
		},
		methods: {
            alertType() {
                return 'alert alert-' + this.args.type + ' w-75'
            }
		},
        watch: {

        },
        mounted() {
            console.log('Alert Component mounted.')
        }
    }
</script>

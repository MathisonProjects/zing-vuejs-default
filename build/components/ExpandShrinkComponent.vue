<template>
	<span>
		<span @click='$emit("expand", false)' v-if='expanded'><a href='javascript:void(0)'><i class="fa fa-window-minimize" aria-hidden="true"></i></a></span>

		<span @click='$emit("expand", true)' v-if='!expanded'><a href='javascript:void(0)'><i class="fa fa-expand" aria-hidden="true"></i></a></span>
	</span>
</template>

<script>
	export default {
    	name: 'expand-shrink-component',
    	components: { },
    	props: [
    		'expanded'
    	],
    	computed: {},
		data() {
			return { }
		},
		methods: { }
	};
</script>

<style scoped>

</style>
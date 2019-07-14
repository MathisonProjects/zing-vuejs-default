<template>
	<div>
		<div class='row' v-if='Blogs.length > 0'>
			<div class='col'>
				<div class="card">
					<div class="card-header">
						{{ Blog.title }}
					</div>
					<div class="card-body blogForm" v-html='Blog.long'></div>
				</div>
			</div>
		</div>

		<div class='row' v-if='Blogs.length == 0'>
			<div class='col'>
				<div class="card">
					<div class="card-header">
						No Blogs?!
					</div>
					<div class="card-body">
						<p>You should go over to Jacob's <a href='https://twitter.com/mathisonproject' target='_BLANK'>twitter</a> or hit him up in his <a href='mailto:jacob@mathisonprojects.com'>email</a> to share his feelings!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    	name: 'display-blog-component',
    	components: { },
    	props: [
    		'Blogs',
			'Blog'
    	],
    	computed: {},
		data() {
			return { }
		},
		methods: {}
	};
</script>

<style scoped>
	.blogForm {
		height: 400px;
		max-height: 400px;
		overflow-y: scroll;
	}
</style>
<template>
	<div class="card my-1">
			<div class="card-body">
				<div class='row'>
					<div class='col-9 small'>
						Post ID: {{ post.id }}
					</div>
					<div class='col-3 small'>
						Posted At: {{ post.time }}
					</div>
					<div class='col-2'>
						<ProfileBoxComponent :profileId='post.user' />
					</div>
					<div class='col'>
						<div class='my-1'>
							{{ post.message }}
						</div>
						<hr />
						<div class='my-1'>
							<CommentFooterComponent :profileId='post.user' />
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import ProfileBoxComponent from '../user/ProfileBoxComponent'
	import CommentFooterComponent from '../user/CommentFooterComponent'
	export default {
		name: 'topic-component',
		props: [
			'post'
		],
		components: {
			ProfileBoxComponent,
			CommentFooterComponent
		},
		computed: {
		},
		data() {
			return {}
		},
		created() {},
		methods: {},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>
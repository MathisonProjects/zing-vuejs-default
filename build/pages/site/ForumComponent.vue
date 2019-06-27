<template>
	<div>
		<div class="card my-3" v-for='forum in forums'>
			<div class="card-header">
				<h3>{{ forum.title }}</h3>
			</div>
			<div class="card-body">
				<div class='row' v-for='board in forum.boards'>
					<div class='col'>
						<router-link :to='getUrl(board.id)'><h4>{{ board.title }}</h4></router-link>
						<p>{{ board.description }}</p>
						<hr />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'forum-component',
		props: [],
		components: {},
		computed: {
			forums() {
				return this.$store.state.forumStore.forum;
			}
		},
		created() {},
		methods: {
			getUrl(id) {
				return '/forum/' + id;;
			}
		},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>
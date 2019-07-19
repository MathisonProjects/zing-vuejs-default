<template>
	<div>
		<AdminForumControlsComponent section='area' v-if='role == 2' />

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
	import AdminForumControlsComponent from '@/components/forum/AdminForumControlsComponent'
	export default {
		name: 'forum-component',
		props: [],
		components: {
			AdminForumControlsComponent
		},
		computed: {
			forums() {
				return this.$store.state.forumStore.forum;
			},
			role() {
				return this.$store.getters['userStore/userRole'];
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
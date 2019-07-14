<template>
	<div class="card my-3">
		<div class="card-header">
			<h3>{{ forum.title }}</h3>
			<p>{{ forum.description }}</p>
		</div>
		<div class="card-body">
			<div class='row'>
				<div class='col-6'>
					<b>Topic</b>
				</div>
				<div class='col text-center'>
					<b>Posts</b>
				</div>
				<div class='col text-center'>
					<b>Last Poster</b>
				</div>
				<div class='col-3 text-center'>
					<b>Times</b>
				</div>
			</div>
			<div class='row small' v-for='topic in forum.topics'>
				<div class='col-6'>
					<router-link :to='forumTopic(topic.id)'>{{ topic.title }}</router-link>
				</div>
				<div class='col text-center'>
					{{ topic.postList.length }}
				</div>
				<div class='col text-center'>
					{{ topic.lastPoster }}
				</div>
				<div class='col-3 text-center'>
					<div>Created: {{ topic.dates.created }}</div>
					<div>Last Post: {{ topic.dates.created }}</div>
				</div>
				<div class='col-12'>
					<hr />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'board-component',
		props: [
			'forum',
			'breadcrumbs'
		],
		components: {},
		computed: {
		},
		data() {
			return {}
		},
		created() {},
		methods: {
			forumTopic(id) {
				return this.breadcrumbs[1] + '/' + id;
			}
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>
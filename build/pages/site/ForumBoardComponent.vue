<template>
	<div>
		<BreadcrumbsComponent firstCrumb="/forum" />
		<ListingManagerComponent listManagerText='Total Topics' :total.sync='totalTopics' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />

		<div class="card my-3" v-if='forum.topics'>
			<div class="card-header">
				<h3>{{ forum.title }}</h3>
				<p>{{ forum.description }}</p>
			</div>
			<div class="card-body">
				<div class='row'>
					<div class='col-6'>
						<b>Topic</b>
					</div>
					<div class='col'>
						<b>Posts</b>
					</div>
					<div class='col'>
						<b>Last Poster</b>
					</div>
					<div class='col-3'>
						<b>Times</b>
					</div>
				</div>
				<div class='row small' v-for='topic in forum.topics'>
					<div class='col-6'>
						<router-link :to='forumTopic(topic.id)'>{{ topic.title }}</router-link>
					</div>
					<div class='col'>
						{{ topic.postList.length }}
					</div>
					<div class='col'>
						{{ topic.lastPoster }}
					</div>
					<div class='col-3'>
						<div>Created: {{ topic.dates.created }}</div>
						<div>Last Post: {{ topic.dates.created }}</div>
					</div>
					<div class='col-12'>
						<hr />
					</div>
				</div>
			</div>
		</div>

		<ListingManagerComponent listManagerText='Total Topics' :total.sync='totalTopics' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />
	</div>
</template>

<script>
	import BreadcrumbsComponent from '../../components/BreadcrumbsComponent'
	import ListingManagerComponent from '../../components/forum/ListingManagerComponent'

	export default {
		name: 'forum-board-component',
		components: {
			BreadcrumbsComponent,
			ListingManagerComponent
		},
		computed: {
			params() {
				return this.$route.params;
			},
			breadcrumbs() {
				var breadcrumbs = [
					'/forum'
				];

				var count = 0;
				for (var i in this.params) {
					breadcrumbs.push(breadcrumbs[count] + '/' + this.params[i]);
					count++;
				}

				return breadcrumbs;
			},
			forums() {
				return this.$store.state.ForumStore.forum;
			},
			forum() {
				if (this.$store.state.ForumStore.isLoaded == true) {
					var thisForum = [];
					for (var i in this.forums) {
						var forum = this.forums[i].boards;
						if (forum[this.params.board]) {
							thisForum = forum[this.params.board];
							break;
						}
					}
					return thisForum;
				} else {
					return [];
				}
			},
			totalTopics() {
				return null;
			}
		},
		data() {
			return {
				page: 0,
				perPage: 10
			}
		},
		created() {},
		methods: {
			forumTopic(id) {
				return this.breadcrumbs[1] + '/' + id;
			},
			pageChangeComp(page) {
				this.perPage = page;
			}
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>
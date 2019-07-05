<template>
	<div>
		<BreadcrumbsComponent firstCrumb="/forum" />
		<ListingManagerComponent listManagerText='Total Topics' :total.sync='totalTopics' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />

		<BoardComponent :forum='forum' :breadcrumbs='breadcrumbs' v-if='forum.topics' />

		<ListingManagerComponent listManagerText='Total Topics' :total.sync='totalTopics' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />
	</div>
</template>

<script>
	import BreadcrumbsComponent from '@/components/BreadcrumbsComponent'
	import ListingManagerComponent from '@/components/forum/ListingManagerComponent'
	import BoardComponent from '@/components/forum/BoardComponent'

	export default {
		name: 'forum-board-component',
		components: {
			BreadcrumbsComponent,
			ListingManagerComponent,
			BoardComponent
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
				return this.$store.state.forumStore.forum;
			},
			forum() {
				if (this.$store.state.forumStore.isLoaded == true) {
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
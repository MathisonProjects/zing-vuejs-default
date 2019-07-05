<template>
	<div>
		<BreadcrumbsComponent firstCrumb="/forum" />

		<ListingManagerComponent listManagerText='Total Posts' :total.sync='topic.postList.length' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />

		<div class='row mb-3'>
			<div class='col'>
				<textarea class="form-control" rows="2" placeholder="How will you respond?" v-model='post'></textarea>
			</div>
			<div class='col-2'>
				<button type='button' class='btn btn-primary btn-block' @click='postMessage'>Post</button>
			</div>
			<div class='col-3'>
				<ListOrderComponent :listOrder.sync='newestToOldest' @listOrderChange='changeNewestToOldest' />
			</div>
		</div>

		<TopicComponent v-for='post in topic.postList' :post='post' :key='post.id' />

		<div class='row mt-3'>
			<div class='col'>
				<textarea class="form-control" rows="2" placeholder="How will you respond?" v-model='post'></textarea>
			</div>
			<div class='col-2'>
				<button type='button' class='btn btn-primary btn-block' @click='postMessage'>Post</button>
			</div>
			<div class='col-3'>
				<ListOrderComponent :listOrder.sync='newestToOldest' @listOrderChange='changeNewestToOldest' />
			</div>
		</div>

		<ListingManagerComponent listManagerText='Total Posts' :total.sync='topic.postList.length' :perPage.sync='perPage' @pageChangeComp='pageChangeComp' />
		
	</div>
</template>

<script>
	import BreadcrumbsComponent from '@/components/BreadcrumbsComponent'
	import ListOrderComponent from '@/components/ListOrderComponent'
	import TopicComponent from '@/components/forum/TopicComponent'
	import ListingManagerComponent from '@/components/forum/ListingManagerComponent'

	export default {
		name: 'forum-topic-component',
		components: {
			BreadcrumbsComponent,
			ListOrderComponent,
			TopicComponent,
			ListingManagerComponent
		},
		computed: {
			params() {
				return this.$route.params;
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
			topic() {
				if (this.$store.state.forumStore.isLoaded == true) {
					return this.forum.topics[this.$route.params.topic];
				} else {
					return [];
				}
			}
		},
		data() {
			return {
				newestToOldest: true,
				page: 0,
				perPage: 10,
				post: ''
			}
		},
		created() {},
		methods: {
			postMessage() {
				this.post = '';
			},
			pageChangeComp(page) {
				this.perPage = page;
			},
			changeNewestToOldest(order) {
				this.newestToOldest = order;
			}
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>